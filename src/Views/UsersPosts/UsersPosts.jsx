import React, { Component } from 'react';

// Database Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import './UsersPosts.scss';

// Components
import Header from '../../Components/Header/Header';
import Post from '../../Components/Post/Post';
import EmptyPosts from '../../Components/EmptyPosts/EmptyPosts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class UsersPosts extends Component {

    constructor(props) {
        super(props);

        this.app = Firebase;
        this.currentUser = this.app.auth().currentUser.uid;
        this.db = this.app.firestore().collection('Posts');
        this.posts = this.db.where('user', '==', this.currentUser);

        this.state = {
            posts: []
        }
    };

    componentDidMount() {
        console.log(this.posts);
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

    deletePost = (postID) => {
        // console.log(post);
        this.db.doc(postID).delete()
            .then(function() {
                alert('post deleted')
            }).catch(function(error) {
                alert('there was an error deleting your post: ', error)
            });
    };

    render() {
        return (
            <div className="view-body">
                <Header />
                <header className="collection-title-container text-center">
                    <h3 className="collection-title">My Posts</h3>
                </header>
                {!this.state.posts ? (
                    <EmptyPosts />
                ) : (
                    <Container>
                        <Row>
                            <Col md={1} />
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
                            <Col md={1} />
                        </Row>
                    </Container>
                )}
            </div>
           
        )
    }
};

export default UsersPosts;
