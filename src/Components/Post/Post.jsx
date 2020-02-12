import React, { Component } from 'react';

// Stylesheet
import './Post.scss';

// Components
import Comments from '../Comments/Comments';
import Modal from 'react-bootstrap/Modal';
import Button from '../Button/Button';

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
            showModal: false,
            post: {
                currentUser: '',
                id: '',
                postUser: '',
                title: '',
                body: ''
            }
        }
    };

    componentDidMount() {
        
        this.setState({
            post: {
                currentUser: this.props.currentUser,
                id: this.props.postId,
                postUser: this.props.postUser,
                title: this.props.postTitle,
                body: this.props.postBody
            }
        })
    };

    showModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    };

    deletePost = () => {
        this.props.deletePost(this.post.id)
    };


    render() {
        return (
            <div>
                <article className="post" onClick={this.showModal}>
                    <h3>
                        {this.state.post.title}
                    </h3>
                    <p>
                       {this.state.post.body.substring(0, 10)}...
                    </p>
                </article>
                <Modal
                    show={this.state.showModal}
                    onHide={this.showModal}>
                    <Modal.Header closeButton>
                        <h3>
                            {this.state.post.title}
                        </h3>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            {this.state.post.body}
                        </p>
                        {this.state.post.currentUser === this.state.post.postUser && <Button 
                                                                                        action={this.deletePost} 
                                                                                     /> 
                        }
                        <Comments postId={this.state.post.id} />
                    </Modal.Body>
                </Modal>
            </div>
            
        )
    }
};

export default Post;
