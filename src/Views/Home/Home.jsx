import React, { Component } from 'react';

// Components
import Header from '../../Components/Header/Header';


export class Home extends Component {

    
    render() {
        return (
            <div className="main">
                <div className="header">
                    <Header />
                </div>
                <div>
                    <h1>hello</h1>
                </div>
            </div>
        )
    };
};

export default Home;
