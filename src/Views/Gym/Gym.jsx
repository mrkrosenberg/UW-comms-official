import React, { Component } from 'react';

// Database Ref
// import Firebase from '../../Config/Firebase';

// Stylesheet
import '../View-Styles/views.scss';

// Componenents
import Header from '../../Components/Header/Header';
import PostList from '../../Components/PostList/PostList';

export class Gym extends Component {

    constructor() {
        super();

        this.collection = 'Gym';

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

export default Gym;
