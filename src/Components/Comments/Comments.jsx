import React, { Component } from 'react';

// Database Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import './Comments.scss';

// Components 
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';

export class Comments extends Component {

    constructor(props) {
        super(props)

        this.app = Firebase;
        this.db = this.app.firestore().collection('Comments');
        this.dbCollection = this.db.where('postId', '==', props.postId);
        this.currentUser = this.app.auth().currentUser.displayName;

        this.state = {
            comments: [],
            postId: ''
        };

    };

    componentDidMount() {
        this.unsubscribe = this.dbCollection.onSnapshot((snapshot) => {
            var commentsArray = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
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

    componentWillUnmount() {
        this.unsubscribe();
    };

    addComment = (comment) => {
        // console.log('comment: ', comment)
        this.db.add({
            body: comment.comment,
            user: this.currentUser,
            postId: this.state.postId
        })
    };

    render() {
        return (
            <div className="comments-container">
                <CommentForm
                    addComment={this.addComment} 
                />
                <div className="comments justify-content-around">
                    { this.state.comments.map((comment) => {
                        return (
                                <Comment
                                    key={comment.id} 
                                    user={comment.user}
                                    body={comment.body}
                                />                            
                        )
                    }) 
                    }
                </div>  
            </div>
        )
    }
};

export default Comments;
