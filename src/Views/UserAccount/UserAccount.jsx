import React, { Component } from 'react'

// Database Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import '../View-Styles/views.scss';

// Components
import Header from '../../Components/Header/Header';

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

    render() {
        return (
            <div className="view-body">
                <Header />
                <h1>user account settings</h1>
            </div>
        )
    }
};

export default UserAccount;
