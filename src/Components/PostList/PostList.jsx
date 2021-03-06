import React, { Component } from 'react';

// Database Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import './PostList.scss'

// Components
import Post from '../Post/Post';
import EntryForm1 from '../EntryForm/EntryForm1';
import EmptyPosts from '../EmptyPosts/EmptyPosts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class PostList extends Component {

    constructor(props) {
        super(props);

        this.collection = props.collection;

        this.app = Firebase;
        this.db = this.app.firestore().collection('Posts');
        this.posts = this.db.where('collection', '==', this.collection);
        this.imageStorage = this.app.storage().ref('images');
        this.currentUser = this.app.auth().currentUser.uid;

        this.state = {
            posts: [],
            newPost: {},
            uploadProgress: 0,
            isLoading: false
        };
    };

// Lifecycle Methods
    componentDidMount() {
        this.unsubscribe = this.posts.onSnapshot((snapshot) => {
            var postsArray = snapshot.docs.map((doc) => {
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

        const uploadTask = this.imageStorage.child(file.name).put(post.postImage[0]);

        this.setState({
            isLoading: true
        });

        uploadTask.on('state_changed', 
            (snapshot) => {
                var progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({
                    uploadProgress: progress
                });
            },
            (error) => {
                console.log(error)
            },
            () => {
                this.imageStorage.child(file.name).put(post.postImage[0])
                .then((response) => {
                    this.imageStorage.child(file.name).getDownloadURL()
                    .then((url) => {
                        let newPost = {
                            collection: this.collection,
                            user: this.currentUser,
                            title: post.title,
                            body: post.body,
                            imageUrl: url
                        };
                        this.setState({
                            newPost: newPost
                        })
                        this.postToFirebase(newPost)
                        this.setState({
                            isLoading: false
                        })
                    })
                })
                .catch((error) => {
                    console.log(error)
                });  
            });
        };
    
    addPostWithoutImage = (newPost) => {  
        let post = {
            collection: this.collection,
            user: this.currentUser,
            title: newPost.title,
            body: newPost.body,
            imageUrl: null
        };

        this.postToFirebase(post)
    };


    deletePost = (postID) => {
        this.db.doc(postID).delete()
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
                {/* {!this.state.posts ? (
                    <EmptyPosts />
                ) : ( */}
                    <div>
                        <Container>
                            <Row>
                                <Col md={1}/>
                                <Col className="posts-container" md={10}>
                                    {!this.state.posts ? (
                                        <EmptyPosts />
                                    ) : (
                                        this.state.posts.map((post) => {
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
                                    )}  
                                </Col>
                                <Col md={1}/>
                            </Row>
                        </Container>   
                        <Container>
                            <Row>
                                <Col  md={1} />
                                <Col md={10}>
                                    <EntryForm1 
                                        addPostWithoutImage={this.addPostWithoutImage}
                                        addPostWithImage={this.addPostWithImage} 
                                        uploadProgress={this.state.uploadProgress}
                                        isLoading={this.state.isLoading}
                                    />
                                </Col>
                                <Col md={1} />
                            </Row>             
                        </Container>
                    </div>
                    
                {/* )} */}
                
            </section>
        )
    };
};

export default PostList;
