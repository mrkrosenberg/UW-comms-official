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

// change to functional component for authContext stuff
export class Landing extends Component {
// const Landing = () => {

    constructor() {
        super();
        // console.log(AuthContext);

        // will have to refactor to use hooks for state in functional component
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
// flip order of callbacks
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

    // const { currentUser } = useContext(AuthContext);

    // if (currentUser) {
    //     return <Redirect to="/" />;
    // }

        return (
            <div className="landing-view">
                <section className="top">
                    <header>
                        <div className="auth-options">
                            <button className="option-button" onClick={this.logIn}>Log In</button>
                            <button className="option-button" onClick={this.signUp}>Sign Up</button>
                        </div>
                    </header>
                    <div className="welcome-text">
                        <h3>Welcome</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, facilis?</p>
                    </div>
                     <Modal 
                        className="modal"
                        show={this.state.showModal} 
                        onHide={this.closeModal}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header closeButton>
                            { this.state.userStatus === 'login' && <LogIn closeModal={this.closeModal}/>}
                            { this.state.userStatus === 'signup' && <SignUp closeModal={this.closeModal}/>}
                        </Modal.Header>
                        
                    </Modal>
                </section>
                <section className="middle">

                </section>
            </div>
        )
    };
};

export default Landing;
