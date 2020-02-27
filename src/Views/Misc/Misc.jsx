import React, { Component } from 'react';

// Stylesheet
import '../View-Styles/views.scss';

// Componenents
import Header from '../../Components/Header/Header';
import PostList from '../../Components/PostList/PostList';
import Footer from '../../Components/Footer/Footer';

export class Misc extends Component {

    constructor() {
        super();

        this.collection = 'Misc';

    };


    render() {
        return (
            <div className="view-body">
                <Header />
                <PostList collection={this.collection} />
                <Footer />
            </div>

        )
    };
};

export default Misc;
