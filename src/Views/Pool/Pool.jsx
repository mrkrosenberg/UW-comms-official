import React, { Component } from 'react';

// Stylesheet
import '../View-Styles/views.scss';

// Componenents
import Header from '../../Components/Header/Header';
import PostList from '../../Components/PostList/PostList';

export class Pool extends Component {

    constructor() {
        super();

        this.collection = 'Pool';

    };


    render() {
        return (
            <div className="view-body">
                <Header />
                <PostList collection={this.collection} />
            </div>

        )
    };
};

export default Pool;
