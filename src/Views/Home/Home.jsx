import React, { Component } from 'react';

// Database Ref
import Firebase from '../../Config/Firebase';

// Components
import Header from '../../Components/Header/Header';
import NewsPost from '../../Components/NewsPost/NewsPost';
import Weather from '../../Components/Weather/Weather';


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
                    <h1 className="view-title text-center">Community Board</h1>
                </div>
                <Weather />
                <div className="news-container">
                <h1 className="news-title text-center">Events:</h1>
                    { this.state.posts.map((post) => {
                        return (
                            <NewsPost
                                    key={post.id}
                                    postTitle={post.title}
                                    postBody={post.body}
                                    eventTime={post.time}
                                    eventDate={post.date}        
                            />
                        )
                    })}
                </div>
            </div>
        )
    };
};

export default Home;
