import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal';

export class Post extends Component {

    constructor(props) {
        super(props)

        // put this into state
        this.post = {
            currentUser: props.currentUser,
            id: props.postId,
            postUser: props.postUser,
            title: props.postTitle,
            body: props.postBody
        };

        this.state = {
            showModal: false
        }
    };

    showModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    };


    render() {
        return (
            <div>
                <article className="post" onClick={this.showModal}>
                    <h3>{this.post.title}</h3>
                    <p>
                       {
                        this.post.body.substring(0, 10)
                       }... 
                    </p>
                </article>
                <Modal
                    show={this.state.showModal}
                    onHide={this.showModal}>
                    <Modal.Header closeButton>
                        <h3>{this.post.title}</h3>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.post.body}</p>
                    </Modal.Body>
                </Modal>
            </div>
            
        )
    }
};

export default Post;
