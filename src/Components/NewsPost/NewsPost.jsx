import React, { Component } from 'react'

// Stylesheet
import './NewsPost.scss';

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
            <div>
                <article className="event-post">
                    <h3>{this.post.title}</h3>
                    <p>Date: {this.post.date}</p>
                    <p>From: {this.post.time}</p>
                    <p>{this.post.body}</p>
                </article>
            </div>
        )
    }
};

export default NewsPost;
