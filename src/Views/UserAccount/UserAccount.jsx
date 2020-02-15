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

export class UserAccount extends Component {

    constructor(props) {
        super(props);

        this.app = Firebase;
        this.auth = this.app.auth();
        this.currentUser = this.app.auth().currentUser;
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
                alert('user has been deleted')
            }).catch(function(error) {
                alert('There has been an error deleting your account. Please sign out and sign back in to delete account')
                console.log('error: ', error)
            });
    };

    resetPassword = () => {
        this.currentUser.updatePassword(this.state.resetPassword)
            .then(function() {
                console.log('password reset successful')
            }).catch(function(error) {
                console.log('reset error: ', error)
            });
    };

    sendResetEmail = () => {
        this.auth.sendPasswordResetEmail(this.state.userEmail)
            .then(function() {
                console.log('email sent')
            }).catch(function(error) {
                alert('email error: ', error)
            })
    }

    reauthDelete = (data) => {
        // console.log('email: ', data.userEmail, 'password: ', data.password);
        const userCredential = FirebaseAuth.EmailAuthProvider.credential(
            this.currentUser.email,
            data.password
        );
        this.currentUser.reauthenticateWithCredential(userCredential)
            .then(this.deleteAccount)
            .catch(function(error) {
                console.log('reauth error: ', error)
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
            .finally(this.sendResetEmail);
    };

    render() {
        return (
            <div className="view-body">
                <Header />
                <h1 className="view-title text-center">user account settings</h1>
                <PasswordResetForm 
                    reauthPassword={this.reauthPassword}
                />
                <button onClick={this.showModal}>Delete Account</button>
                <Modal
                    show={this.state.showModal}
                    onHide={this.showModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                        <Modal.Header closeButton>
                            <h3>
                                Please Re-enter Password
                            </h3>
                            <ReAuthForm 
                                reauthDelete={this.reauthDelete}
                                firebase={this.app}
                            />
                        </Modal.Header>     
                </Modal>
            </div>
        )
    }
};

export default UserAccount;
