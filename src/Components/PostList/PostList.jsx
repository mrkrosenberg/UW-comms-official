import React, { Component } from 'react';

// Database Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import './PostList.scss'

// Components
import Post from '../Post/Post';
import EntryForm1 from '../EntryForm/EntryForm1';
import Button from '../Button/Button';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class PostList extends Component {

    constructor(props) {
        super(props);

        this.collection = props.collection;
        // this.showEntryForm = props.showEntryForm;

        this.app = Firebase;
        this.db = this.app.firestore().collection(this.collection);
        this.currentUser = this.app.auth().currentUser.uid;

        this.state = {
            posts: []
        };
    };

// Lifecycle Methods
    componentDidMount() {

        // console.log('current user: ', this.currentUser)

        this.unsubscribe = this.db.onSnapshot((snapshot) => {
            var postsArray = snapshot.docs.map((doc) => {
                // console.log(doc.id)
                return {
                    id: doc.id,
                    user: doc.data().user,
                    title: doc.data().title,
                    body: doc.data().body
                };
            });

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
                user: this.currentUser,
                title: post.title,
                body: post.body
            })
        };
    
        deletePost = (post) => {
            console.log(post);
            // this.db.
        };

    render() {
        return (
            <section className="view-body">
                <div className="posts-container">
                    <Container>
                        <Row>
                            <Col md={2}/>
                            <Col md={8}>
                                    { this.state.posts.map((post) => {
                                        // console.log(post);
                                        return(
                                            <div className="post">
                                                <Post 
                                                    key={post.id} 
                                                    postId={post.id} 
                                                    postTitle={post.title} 
                                                    postBody={post.body} 
                                                    postUser={post.user}
                                                    currentUser={this.currentUser} />
                                                    {/* move this into post component */}
                                                    { this.currentUser === post.user && <Button 
                                                                                            postId={post.id}
                                                                                            deletePost={this.deletePost}
                                                                                        /> }
                                            </div>
                                        )
                                    })};
                            </Col>
                            <Col md={2}/>
                        </Row>
                    </Container>
                    
                </div>
                    
                <div className="entry-form">
                    <EntryForm1 addPost={this.addPost} />
                </div>
            </section>
        )
    };
};

export default PostList;
