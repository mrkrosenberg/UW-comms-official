import React, { Component } from 'react';

// Auth Shtuff
import { AuthContext } from '../../Authentication/Auth';

// Components
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';

export class Landing extends Component {

    constructor() {
        super();
        // console.log(AuthContext);

        this.state = {
            userStatus: ''
        };

        this.logIn = this.logIn.bind(this);
        this.signUp = this.signUp.bind(this);
    };

   
// Refactor these functions
    logIn() {

        this.setState({
            userStatus: 'login'
        });
    };

    signUp() {

        this.setState({
            userStatus: 'signup'
        });
    };

    render() {

        // if()

        return (
            <div className="landing-view">
                <div className="auth-options">
                    <button onClick={this.logIn}>Log In</button>
                    <button onClick={this.signUp}>Sign Up</button>
                </div>
                { this.state.userStatus === 'login' && <LogIn />}
                { this.state.userStatus === 'signup' && <SignUp />}
            </div>
        )
    };
};

export default Landing;
