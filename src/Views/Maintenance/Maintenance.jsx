import React, { Component } from 'react';

// Database Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import '../View-Styles/views.scss';

// Componenents
import Header from '../../Components/Header/Header';
import Post from '../../Components/Post/Post';
import EntryForm1 from '../../Components/EntryForm/EntryForm1';

export class Maintenance extends Component {

    constructor() {
        super();

        this.collection = 'Maintenance';

        this.app = Firebase;
        this.db = this.app.firestore().collection(this.collection);
        this.user = this.app.auth().currentUser.uid;

        this.state = {
            posts: []
        };

        this.addPost = this.addPost.bind(this);
    };


    // Lifecycle Methods
    componentDidMount() {

      this.unsubscribe = this.db.onSnapshot((snapshot) => {
            var postsArray = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    body: doc.data().body,
                    user: doc.data().uid
                };
            });

            // this.currentPosts = postsArray;
            this.setState({
                posts: postsArray
            });
        });
    };

    componentWillUnmount() {
        this.unsubscribe();
    };

    addPost = (post) => {
        this.db.add({
            title: post.title,
            body: post.body
        })
    };


    render() {
        return (
            <div className="view-body">
                <Header firebase={Firebase}/>
                <div>
                    {
                        this.state.posts.map((post) => {
                            return(
                                <div className="post">
                                    <Post 
                                        key={post.id} 
                                        postId={post.id} 
                                        postTitle={post.title} 
                                        postBody={post.body} 
                                        user={post.user} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="entry-form">
                    <EntryForm1 addPost={this.addPost} />
                </div>
            </div>

        )
    };
};    

export default Maintenance;
