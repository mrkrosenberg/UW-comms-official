import React, { Component } from 'react';

export class Post extends Component {

    constructor(props) {
        super(props)

        this.post = {
            id: props.postId,
            title: props.postTitle,
            body: props.postBody
        }
    };



    render() {
        return (
            <div className="post">
                <h3>{ this.post.title }</h3>
                <p>{ this.post.body }</p>
                <p>{ this.post.id }</p>
            </div>
        )
    }
};

export default Post;
