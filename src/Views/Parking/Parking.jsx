import React, { Component } from 'react';

// Stylesheet
import '../View-Styles/views.scss';

// Componenents
import Header from '../../Components/Header/Header';
import PostList from '../../Components/PostList/PostList';
import Footer from '../../Components/Footer/Footer';

export class Parking extends Component {

    constructor() {
        super();

        this.collection = 'Parking';

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

export default Parking;
