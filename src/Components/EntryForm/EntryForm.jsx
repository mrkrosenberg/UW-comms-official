import React, { Component } from 'react';

// Database Ref
import Firebase from '../../Config/Firebase';

export class EntryForm extends Component {

    constructor(props) {
        super(props);

        // console.log(props.collection);

        this.db = Firebase.firestore().collection(props.collection);

        this.state = {
            // postContent: {
            //     title: '',
            //     body: ''
            // }
            postContent: ''
        };

        this.handleUserInput = this.handleUserInput.bind(this);
    };

    // handleUserInput(e) {  
    //     e.preventDefault();
    //     const { title, body } = e.target.elements;
    //     this.setState({
    //         postContent: {
    //             title: title.value,
    //             body: body.value
    //         }
    //     });
    //     this.props.addNote(this.state.postContent);
    // };

    handleUserInput(e) {
        console.log(e.target.value);
        this.setState({
            postContent: e.target.value
        })
    }

    submitPost() {

        this.setState({
            postContent: ''
        })
    };

    render() {
        return (
            <div className="formWrapper">
                {/* <form onSubmit={this.handleUserInput}> */}
                <input name="title" type="text" placeholder="title" value={this.state.postContent.title} onChange={this.handleUserInput}/>
                <button></button>
                {/* <input name="body" type="text" placeholder="enter text" value={this.state.postContent.body} onChange={this.handleInput}/> */}
                {/* <button type="submit">Submit</button> */}
                {/* </form> */}
            </div>
        )
    };
};

export default EntryForm;
