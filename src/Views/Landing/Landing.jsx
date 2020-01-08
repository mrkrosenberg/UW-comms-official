import React, { Component } from 'react';

// Auth Shtuff
import { AuthContext } from '../../Authentication/Auth';

// Components
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';

export class Landing extends Component {

    constructor() {
        super();
        console.log(AuthContext);
    };

    render() {

        // if()

        return (
            <div className="landing-view">
                <LogIn />
                <SignUp />
            </div>
        )
    };
};

export default Landing;
