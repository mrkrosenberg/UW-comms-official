import React, { Component } from 'react';

// Database Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import './Comments.scss';

// Components 
import Comment from '../Comment/Comment';

export class Comments extends Component {

    constructor(props) {
        super(props)

        // this.postId = props.postId

        this.app = Firebase;
        this.db = this.app.firestore().collection('Comments').where('postId', '==', props.postId);

        this.state = {
            comments: [],
            postId: ''
        };

    };

    componentDidMount() {

       
        this.unsubscribe = this.db.onSnapshot((snapshot) => {
            var commentsArray = snapshot.docs.map((doc) => {
                return {
                    id: doc.data().postId,
                    user: doc.data().user,
                    body: doc.data().body
                }
            });

            this.setState({
                comments: commentsArray,
                postId: this.props.postId
            });
        });
   
    };

    render() {
        return (
            <div>
                <h1>Comments!</h1>
                <Comment />
            </div>
        )
    }
};

export default Comments;
