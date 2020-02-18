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
        this.imageStorage = this.app.storage().ref('images');
        this.currentUser = this.app.auth().currentUser.uid;

        this.state = {
            posts: [],
            newPost: {}
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
                    body: doc.data().body,
                    imageUrl: doc.data().imageUrl
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

    postToFirebase = (post) => {

        this.db.add(post);
    };

    addPostWithImage = (post, file) => {
        
            console.log('post with image: ', post)
            console.log('here is the file: ', file)
            this.imageStorage.child(file.name).put(post.postImage[0])
            .then((response) => {
                this.imageStorage.child(file.name).getDownloadURL()
                .then((url) => {
                    let newPost = {
                        user: this.currentUser,
                        title: post.title,
                        body: post.body,
                        imageUrl: url
                    };
                    this.setState({
                        newPost: newPost
                    })
                    // this.db.add(newPost)
                    this.postToFirebase(newPost)
                })
            })
            .catch((error) => {
                console.log(error)
            });     
    };
    
// CRUD Methods
    addPostWithoutImage = (newPost) => {
       
        let post = {
            user: this.currentUser,
            title: newPost.title,
            body: newPost.body,
            imageUrl: null
        };
        console.log('post without image', post)

        // this.db.add(post);
        this.postToFirebase(post)
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
                                            imageUrl={post.imageUrl}
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
                            <EntryForm1 
                                addPost={this.addPostWithoutImage}
                                addPostWithImage={this.addPostWithImage} 
                                // imageStorage={this.imageStorage}
                            />
                        </Col>
                        <Col md={1} />
                    </Row>             
                </Container>
            </section>
        )
    };
};

export default PostList;
