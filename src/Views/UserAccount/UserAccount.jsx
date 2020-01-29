import React, { Component } from 'react';
import { auth as FirebaseAuth } from 'firebase/app';

// Database Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import '../View-Styles/views.scss';

// Components
import Header from '../../Components/Header/Header';
import ReAuthForm from '../../Components/ReAuthForm/ReAuthForm';

export class UserAccount extends Component {

    constructor(props) {
        super(props);

        this.app = Firebase;
        this.currentUser = this.app.auth().currentUser;

    };

// Lifecycle methods
    componentDidMount() {
        console.log(this.currentUser)
    };

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
            .then(function() {
                alert('user has been reauthenticated')
            }).catch(function(error) {
                console.log('reauth error: ', error)
            })
    };

    render() {
        return (
            <div className="view-body">
                <Header />
                <h1>user account settings</h1>
                <ReAuthForm 
                    reAuthUser={this.reAuthUser}
                    firebase={this.app}/>
                <button onClick={this.deleteAccount}>Delete Account</button>
            </div>
        )
    }
};

export default UserAccount;
