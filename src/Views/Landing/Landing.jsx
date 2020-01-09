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

export class Landing extends Component {

    constructor() {
        super();
        // console.log(AuthContext);

        this.state = {
            userStatus: ''
        };

    };

   
// Refactor these functions
    logIn = () => {

        this.setState({
            userStatus: 'login'
        });
    };

    signUp =() => {

        this.setState({
            userStatus: 'signup'
        });
    };

    componentWillUnmount() {
        
        this.setState({
            userStatus: ''
        })
    }

    render() {

        // if()

        return (
            <div className="landing-view">
                    <header className="auth-options">
                        <button className="option-button" onClick={this.logIn}>Log In</button>
                        <button className="option-button" onClick={this.signUp}>Sign Up</button>
                    </header>
                { this.state.userStatus === 'login' && <LogIn />}
                { this.state.userStatus === 'signup' && <SignUp />}
            </div>
        )
    };
};

export default Landing;
