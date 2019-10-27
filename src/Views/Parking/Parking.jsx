import React, { Component } from 'react';

// Database Ref
import Firebase from '../../Config/Firebase';

// Componenents
import Post from '../../Components/Post/Post';

// Stylesheet
import '../View-Styles/views.scss';

export class Parking extends Component {

    constructor() {
        super();

        this.app = Firebase;
        this.db = this.app.firestore().collection('Parking');

        this.state = {
            posts: []
        }
    };

    componentDidMount() {

        this.currentPosts = this.state.posts;

        this.db.onSnapshot((snapshot) => {
            snapshot.docs.forEach((doc) => {
                this.currentPosts.push({
                    id: doc.id,
                    title: doc.data().title,
                    body: doc.data().body
                })
            })

            this.setState({
                posts: this.currentPosts
            })
        })
    };

    render() {
        return (
            <div>
                {
                    this.state.posts.map((post) => {
                        return(
                            <Post key={post.id} postId={post.id} postTitle={post.title} postBody={post.body} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Parking
