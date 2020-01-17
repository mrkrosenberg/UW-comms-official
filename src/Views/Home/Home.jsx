import React, { Component } from 'react';

// Components
import Header from '../../Components/Header/Header';
import PostList from '../../Components/PostList/PostList';


export class Home extends Component {

    constructor() {
        super();

        this.collection = 'News';
    }

    
    render() {
        return (
            <div className="view-body">
                <Header />
                <div>
                    <h1>hello</h1>
                </div>
                <div className="news-container">
                    <h1>Announcements/News from Union West Management</h1>
                    <PostList collection={this.collection}/>
                </div>
            </div>
        )
    };
};

export default Home;
