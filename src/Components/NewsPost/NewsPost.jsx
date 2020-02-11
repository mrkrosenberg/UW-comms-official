import React, { Component } from 'react'

// Stylesheet
import './NewsPost.scss';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class NewsPost extends Component {

    constructor(props) {
        super();

        this.post = {
            title: props.postTitle,
            body: props.postBody,
            time: props.eventTime,
            date: props.eventDate
        }
        
    };



    render() {
        return (
            <Container>
                <Row>
                    <Col md={1} />
                    <Col className="news-container" md={10}>
                        <article className="event-post">
                            <h3>{this.post.title}</h3>
                            <p>Date: {this.post.date}</p>
                            <p>From: {this.post.time}</p>
                            <p>{this.post.body}</p>
                        </article>
                    </Col>
                    <Col md={1} />
                </Row>
            </Container>
        )
    }
};

export default NewsPost;
