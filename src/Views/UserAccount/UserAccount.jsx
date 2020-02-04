import React, { Component } from 'react';
import { auth as FirebaseAuth } from 'firebase/app';

// Database Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import '../View-Styles/views.scss';

// Components
import Header from '../../Components/Header/Header';
import ReAuthForm from '../../Components/ReAuthForm/ReAuthForm';
import Modal from 'react-bootstrap/Modal';

export class UserAccount extends Component {

    constructor(props) {
        super(props);

        this.app = Firebase;
        this.currentUser = this.app.auth().currentUser;
        this.deleteAccount = this.deleteAccount.bind(this);
        // this.showModal = this.showModal.bind(this);

        this.state = {
            showModal: false
        };


    };


    componentDidMount() {
        console.log(this.currentUser)
    };

    showModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    deleteAccount = () => {
        this.currentUser.delete()
            .then(function() {
                alert('user has been deleted')
            }).catch(function(error) {
                alert('There has been an error deleting your account. Please sign out and sign back in to delete account')
                console.log('error: ', error)
            });
    }

    reAuthUser = (data) => {
        console.log('email: ', data.userEmail, 'password: ', data.password);
        const userCredential = FirebaseAuth.EmailAuthProvider.credential(
            data.userEmail,
            data.password
        );
        this.currentUser.reauthenticateWithCredential(userCredential)
            .then(this.showModal(), {
                
            }).catch(function(error) {
                console.log('reauth error: ', error)
            });
    };

    render() {
        return (
            <div className="view-body">
                <Header />
                <h1>user account settings</h1>
                <ReAuthForm 
                    reAuthUser={this.reAuthUser}
                    firebase={this.app}/>
                <Modal
                    show={this.state.showModal}
                    onHide={this.showModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                        <button onClick={this.deleteAccount}>Confirm</button>
                </Modal>
            </div>
        )
    }
};

export default UserAccount;
