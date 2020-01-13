import React, { Component } from 'react';

// Stylesheet
import '../View-Styles/views.scss';

// Componenents
import Header from '../../Components/Header/Header';
import PostList from '../../Components/PostList/PostList';

export class News extends Component {

    constructor() {
        super();

        this.collection = 'News';
        this.showEntryForm = false;

    };


    render() {
        return (
            <div className="view-body">
                <Header />
                <PostList collection={this.collection}
                        showEntryForm={this.showEntryForm} />
            </div>

        )
    };
};

export default News;