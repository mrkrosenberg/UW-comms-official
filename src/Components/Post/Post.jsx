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

    openModal = () => {

        this.setState({
            showModal: true
        });
    };

    closeModal = () => {

        this.setState({
            showModal: false
        });
    };

    showPost = () => {

        this.openModal();
    };

    render() {
        return (
            <div>
                <article className="post" onClick={this.openModal}>
                    <h3>{this.post.title}</h3>
                    <p>{this.post.body}</p>
                    <p>{this.post.id}</p>
                    <p>{this.post.postUser}</p>
                </article>
                <Modal
                    show={this.state.showModal}
                    onHide={this.closeModal}>
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
