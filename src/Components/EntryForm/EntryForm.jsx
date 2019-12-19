import React, { Component } from 'react';

// Database Ref
import Firebase from '../../Config/Firebase';

export class EntryForm extends Component {

    constructor(props) {
        super(props);

        // console.log(props.collection);

        this.db = Firebase.firestore().collection(props.collection);

        this.state = {
            postContent: ''
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.submitPost = this.submitPost.bind(this);
    };


    handleUserInput(e) {
        // console.log(e.target.value);
        this.setState({
            postContent: e.target.value
        })
    }

    submitPost() {

        this.props.addPost(this.state.postContent);

        this.setState({
            postContent: ''
        })
    };

    render() {
        return (
            <div className="formWrapper">
                <input name="title" type="text" placeholder="text" value={this.state.postContent} onChange={this.handleUserInput}/>
                <button onClick={this.submitPost}>Post</button>
            </div>
        )
    };
};

export default EntryForm;
