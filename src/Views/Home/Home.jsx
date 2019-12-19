import React, { Component } from 'react';

// Database Ref
// import Firebase from '../../Config/Firebase';

// Components
import Header from '../../Components/Header/Header';


export class Home extends Component {

    // componentDidMount() {
    //     console.log(Firebase.auth().currentUser.uid)
    // }
    
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
    }
}

export default Home
