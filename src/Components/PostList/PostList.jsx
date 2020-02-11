import React, { Component } from 'react';

// Database Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import './PostList.scss'

// Components
import Post from '../Post/Post';
import EntryForm1 from '../EntryForm/EntryForm1';

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
        this.db.doc(post).delete()
            .then(function() {
                alert('post deleted')
            }).catch(function(error) {
                alert('there was an error deleting your post: ', error)
            });
    };

    render() {
        return (
            <section className="view-body">
                <header className="collection-title-container text-center">
                    <h3 className="collection-title">{this.collection} Message Board</h3>
                </header>
                <Container>
                    <Row>
                        <Col md={1}/>
                        <Col className="posts-container" md={10}>
                            { this.state.posts.map((post) => {
                                return(
                                    <div className="post">
                                        <Post 
                                            key={post.id} 
                                            postId={post.id} 
                                            postTitle={post.title} 
                                            postBody={post.body} 
                                            postUser={post.user}
                                            currentUser={this.currentUser} 
                                            deletePost={this.deletePost}
                                        />
                                    </div>
                                )
                                })
                            }
                        </Col>
                        <Col md={1}/>
                    </Row>
                </Container>   
                <Container>
                    <Row>
                        <Col  md={1} />
                        <Col md={10}>
                            <EntryForm1 addPost={this.addPost} />
                        </Col>
                        <Col md={1} />
                    </Row>             
                </Container>
            </section>
        )
    };
};

export default PostList;
