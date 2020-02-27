import React, { Component } from 'react';


// Components
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';
import UserAgreement from '../../Components/UserAgreement/UserAgreement';
import FeatureContainer from '../../Components/FeatureContainer/FeatureContainer';
import Disclaimer from '../../Components/Disclaimer/Disclaimer';
import Modal from 'react-bootstrap/Modal';

// StyleSheet
import './Landing.scss';

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


    showModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    };

    showlogIn = () => {
        this.showModal();
        this.setState({
            userStatus: 'login'
        });
    };

    showSignUp = () => {
        this.setState({
            userStatus: 'signup'
        });
    };

    showAgreement = () => {    
        this.showModal();
        this.setState({
            userStatus: 'signAgreement'
        })
    };

    componentWillUnmount() {    
        this.setState({
            userStatus: ''
        })
    };

    render() {

        return (
            <div className="landing-view">
                <section className="top">
                    <header className="auth-header">
                        <div className="auth-options">
                            <button className="option-button" onClick={this.showlogIn}>Log In</button>
                            <button className="option-button" onClick={this.showAgreement}>Sign Up</button>
                        </div>
                    </header>
                    <Modal 
                        // className="text-center"
                        show={this.state.showModal} 
                        onHide={this.showModal}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                            <Modal.Header closeButton>
                                <div className="modal-title-container text-center">
                                    <h2 className="modal-title">UW Community Board</h2>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                { this.state.userStatus === 'login' && <LogIn closeModal={this.showModal}/>}
                                { this.state.userStatus === 'signup' && <SignUp closeModal={this.showModal}/>}
                                { this.state.userStatus === 'signAgreement' &&  <UserAgreement showSignUpForm={this.showSignUp} />}
                            </Modal.Body>
                    </Modal>
                    <div className="welcome-text">
                        <h2>UW Community Board</h2>
                        <p>The unofficial communication board for residents of Union West Apartments</p>
                    </div>
                </section>
                <section className="middle">
                    <FeatureContainer />
                </section>
                <section>
                    <Disclaimer />
                </section>
            </div>
        )
    };
};

export default Landing;
