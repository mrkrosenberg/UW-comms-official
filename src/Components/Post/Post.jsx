import React, { Component } from 'react';

export class Post extends Component {

    constructor(props) {
        super(props)

        this.post = {
            currentUser: props.currentUser,
            id: props.postId,
            postUser: props.postUser,
            title: props.postTitle,
            body: props.postBody
        }
    };



    render() {
        return (
            <article className="post">
                <h3>{ this.post.title }</h3>
                <p>{ this.post.body }</p>
                <p>{ this.post.id }</p>
                <p>{ this.post.postUser }</p>
            </article>
        )
    }
};

export default Post;
