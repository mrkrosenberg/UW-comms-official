import React, { Component } from 'react';
import { auth as FirebaseAuth } from 'firebase/app';

// Database Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import '../View-Styles/views.scss';

// Components
import Header from '../../Components/Header/Header';
import ReAuthForm from '../../Components/ReAuthForm/ReAuthForm';
import PasswordResetForm from '../../Components/PasswordResetForm/PasswordResetForm';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Components/Footer/Footer';

export class UserAccount extends Component {

    constructor(props) {
        super(props);

        this.app = Firebase;
        this.auth = this.app.auth();
        this.currentUser = this.app.auth().currentUser;
        this.displayName = this.currentUser.displayName;
        this.deleteAccount = this.deleteAccount.bind(this);

        this.state = {
            showModal: false,
            resetPassword: '',
            userEmail: this.currentUser.email
        };

    };

    showModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    };

    deleteAccount = () => {
        this.currentUser.delete()
            .then(function() {
                alert('User has been deleted')
            }).catch(function(error) {
                alert('error:', error.message)
                // console.log('error: ', error)
            });
    };

    resetPassword = () => {
        this.currentUser.updatePassword(this.state.resetPassword)
            .then(function() {
                // console.log('password reset successful')
                alert('Your password has been reset')
            }).catch(function(error) {
                alert('error: ', error.message)
                // console.log('reset error: ', error.message)
            });
    };

    // sendResetEmail = () => {
    //     this.auth.sendPasswordResetEmail(this.state.userEmail)
    //         .then(function() {
    //             console.log('email sent')
    //             alert('email has been sent')
    //         }).catch(function(error) {
    //             alert('email error: ', error.message)
    //         })
    // }

    reauthDelete = (data) => {
        // console.log('email: ', data.userEmail, 'password: ', data.password);
        const userCredential = FirebaseAuth.EmailAuthProvider.credential(
            this.currentUser.email,
            data.password
        );
        this.currentUser.reauthenticateWithCredential(userCredential)
            .then(this.deleteAccount)
            .catch(function(error) {
                // console.log('reauth error: ', error)
                alert(error.message)
            });
    };

    reauthPassword = (data) => {
        const userCredential = FirebaseAuth.EmailAuthProvider.credential(
            this.currentUser.email,
            data.password
        );
        console.log(data)
        this.setState({
            resetPassword: data.newPassword
        })
        console.log(this.state.resetPassword)
        this.currentUser.reauthenticateWithCredential(userCredential)
            .then(this.resetPassword)
            .catch(function(error) {
                console.log('reauth error: ', error)
            })
            // .finally(this.sendResetEmail);
    };

    render() {
        return (
            <div>
                <div className="view-body">
                    <Header />
                    <h1 className="view-title text-center">Settings</h1>
                    <PasswordResetForm 
                        reauthPassword={this.reauthPassword}
                    />
                    <Container className="delete-bootstrap-container">
                        <Row>
                            <Col md={1} />
                            <Col
                                className="delete-button-container" 
                                md={10}>
                                    <div className="delete-container-color">
                                        <h6>Delete Account:</h6>
                                        <button 
                                            className="delete-button"
                                            onClick={this.showModal}>
                                                Delete Account
                                        </button>
                                        <p className="delete-warning">warning: this can't be undone</p>
                                    </div>
                            </Col> 
                            <Col md={1} />
                        </Row>
                    </Container>
                    <Modal
                        show={this.state.showModal}
                        onHide={this.showModal}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                            <Modal.Header closeButton>
                                <h3 className="account-delete-header">
                                    Are you sure?
                                </h3>
                                
                            </Modal.Header> 
                            <Modal.Body>
                                <ReAuthForm 
                                    reauthDelete={this.reauthDelete}
                                    firebase={this.app}
                                />
                            </Modal.Body>    
                    </Modal>
                </div>
                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        )
    }
};

export default UserAccount;
