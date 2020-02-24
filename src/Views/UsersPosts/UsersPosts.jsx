import React, { Component } from 'react';

// Database Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import 'UsersPosts.scss';

// Components
import Post from '../../Components/Post/Post';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class UsersPosts extends Component {

    constructor(props) {
        super(props);

        this.app = Firebase;
        this.currentUser = this.app.auth().currentUser.uid;
        this.db = this.app.firestore().collection('Comments').w;
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
};

export default UsersPosts;



// Bring in Firebase
// Bring in current user id
// Create ref to database collection and find all where user id = current user id
// first find all posts that belong to that user
// for each post belonging to the user, find all comments 
// map each post to a post component