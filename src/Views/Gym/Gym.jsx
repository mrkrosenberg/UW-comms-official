import React, { Component } from 'react';

// Database Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import '../View-Styles/views.scss';

// Componenents
import Header from '../../Components/Header/Header';
import Post from '../../Components/Post/Post';
import EntryForm1 from '../../Components/EntryForm/EntryForm1';
import Button from '../../Components/Button/Button';

export class Gym extends Component {

    constructor() {
        super();

        this.collection = 'Gym';

        this.app = Firebase;
        this.db = this.app.firestore().collection(this.collection);
        this.currentUser = this.app.auth().currentUser.uid;

        this.state = {
            posts: []
        };

        this.addPost = this.addPost.bind(this);
        this.signOut = this.signOut.bind(this);
    };

    // Lifecycle Methods
    componentDidMount() {

        console.log('current user: ', this.currentUser)

      this.unsubscribe = this.db.onSnapshot((snapshot) => {
            var postsArray = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    user: doc.data().user,
                    title: doc.data().title,
                    body: doc.data().body
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

    // CRUD Methods
    addPost = (post) => {
        this.db.add({
            user: this. currentUser,
            title: post.title,
            body: post.body
        })
    };

    deletePost = (post) => {
        console.log(post);
        // this.db.
    };

    signOut = () => {
        this.app.auth().signOut();
    };


    render() {
        return (
            <div className="view-body">
                <Header />
                <div>
                    { this.state.posts.map((post) => {
                            console.log(post);
                            return(
                                <div className="post">
                                    <Post 
                                        key={post.id} 
                                        postId={post.id} 
                                        postTitle={post.title} 
                                        postBody={post.body} 
                                        postUser={post.user}
                                        currentUser={this.currentUser} />
                                        { this.currentUser === post.user && <Button 
                                                                                postId={post.id}
                                                                                deletePost={this.deletePost}
                                                                            /> }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="entry-form">
                    <EntryForm1 addPost={this.addPost} />
                </div>
                <div className="signOut">
                    <div className="signout">
                        <button onClick={this.signOut}>SignOut</button>
                    </div>
                </div>
            </div>

        )
    };
};

export default Gym;
