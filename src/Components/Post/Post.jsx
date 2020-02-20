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

        this.buttonText = 'Delete Post';

        this.state = {
            showModal: false,
            showImageModal: false,
            post: {
                currentUser: '',
                id: '',
                postUser: '',
                title: '',
                body: '',
                imageUrl: ''
            }
        };
    };

    componentDidMount() {     
        this.setState({
            post: {
                currentUser: this.props.currentUser,
                id: this.props.postId,
                postUser: this.props.postUser,
                title: this.props.postTitle,
                body: this.props.postBody,
                imageUrl: this.props.imageUrl
            }
        })
    };

    showModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    };

    showImageModal = () => {
        this.setState({
            showImageModal: !this.state.showImageModal,
            showModal: !this.state.showModal
        })
    };

    deletePost = () => {
        this.props.deletePost(this.state.post.id)
    };


    render() {
        return (
            <div>
                <article 
                    className="post" 
                    onClick={this.showModal}>
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
                        {this.state.post.imageUrl ? (
                            <div className="post-image-container">
                                <img 
                                    className="post-image" 
                                    onClick={this.showImageModal}
                                    src={this.state.post.imageUrl} 
                                    alt="no image to display"
                                />
                            </div>
                        ) : (console.log('no image'))}
                        
                        {this.state.post.currentUser === this.state.post.postUser 
                            && <Button
                                    buttonText={this.buttonText} 
                                    action={this.deletePost} 
                                /> 
                        }
                        <Comments postId={this.state.post.id} />
                    </Modal.Body>
                </Modal>
                <Modal
                    className="image-modal"
                    show={this.state.showImageModal}
                    onHide={this.showImageModal}>
                    {/* <div className="image-close-button"> */}
                        {/* <p onClick={this.showImageModal}>x</p> */}
                    {/* </div> */}
                        <img 
                            className="large-image"
                            src={this.state.post.imageUrl} 
                            alt="no image to display"
                        />
                </Modal>
            </div>
            
        )
    }
};

export default Post;
