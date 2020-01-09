import React, { Component } from 'react';

// Auth Shtuff
// import { AuthContext } from '../../Authentication/Auth';

// Components
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';

// StyleSheet
import './Landing.scss';

// Bootstrap Imports
// import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';

export class Landing extends Component {

    constructor() {
        super();
        // console.log(AuthContext);

        this.state = {
            userStatus: '',
            showModal: false
        };

    };

    openModal = () => {

        this.setState({
            showModal: true
        });
    };

    closeModal = () => {

        this.setState({
            showModal: false
        });
    };

   
// Refactor these functions
    logIn = () => {

        this.openModal();
        this.setState({
            userStatus: 'login'
        });
    };

    signUp = () => {

        this.openModal();
        this.setState({
            userStatus: 'signup'
        });
    };


    componentWillUnmount() {
        
        this.setState({
            userStatus: ''
        })
    };

    render() {

        // if()

        return (
            <div className="landing-view">
                <header>
                    <div className="auth-options">
                        <button className="option-button" onClick={this.logIn}>Log In</button>
                        <button className="option-button" onClick={this.signUp}>Sign Up</button>
                    </div>
                </header>
                    
                <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        { this.state.userStatus === 'login' && <LogIn />}
                        { this.state.userStatus === 'signup' && <SignUp />}
                    </Modal.Header>
                    
                </Modal>
            </div>
        )
    };
};

export default Landing;
