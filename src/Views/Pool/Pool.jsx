import React, { Component } from 'react';

// Stylesheet
import '../View-Styles/views.scss';

// Componenents
import Header from '../../Components/Header/Header';
import PostList from '../../Components/PostList/PostList';
import Footer from '../../Components/Footer/Footer';

export class Pool extends Component {

    constructor() {
        super();

        this.collection = 'Pool';

    };


    render() {
        return (
            <div>
                <div className="view-body">
                    <Header />
                    <PostList collection={this.collection} />
                </div>
                <div className="footer-container">
                    <Footer />
                </div>
            </div>

        )
    };
};

export default Pool;
