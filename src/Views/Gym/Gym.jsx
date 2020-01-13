import React, { Component } from 'react';

// Stylesheet
import '../View-Styles/views.scss';

// Componenents
import Header from '../../Components/Header/Header';
import PostList from '../../Components/PostList/PostList';

export class Gym extends Component {

    constructor() {
        super();

        this.collection = 'Gym';
        this.showEntryForm = true;

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

export default Gym;
