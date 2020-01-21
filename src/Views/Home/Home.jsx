import React, { Component } from 'react';

// Database Ref
import Firebase from '../../Config/Firebase';

// Components
import Header from '../../Components/Header/Header';
import PostList from '../../Components/PostList/PostList';
import NewsPost from '../../Components/NewsPost/NewsPost';


export class Home extends Component {

    constructor() {
        super();

        this.collection = 'News';
        this.app = Firebase;
        this.db = this.app.firestore().collection('News');

        this.state = {
            posts: []
        };
    };

// Lifecycle Methods
    componentDidMount() {

        // console.log('current user: ', this.currentUser)

        this.unsubscribe = this.db.onSnapshot((snapshot) => {
            var postsArray = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    // user: doc.data().user,
                    title: doc.data().title,
                    body: doc.data().body,
                    date: doc.data().date,
                    time: doc.data().time
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

    
    render() {
        return (
            <div className="view-body">
                <Header />
                <div>
                    <h1>hello</h1>
                </div>
                <div className="news-container">
                    <h1>Announcements/News from Union West Management</h1>
                    {/* <PostList collection={this.collection}/> */}
                    { this.state.posts.map((post) => {
                        return (
                            <NewsPost
                                    postTitle={post.title}
                                    postBody={post.body}
                                    eventTime={post.time}
                                    eventDate={post.date}        
                            />
                        )
                    })};
                </div>
            </div>
        )
    };
};

export default Home;
