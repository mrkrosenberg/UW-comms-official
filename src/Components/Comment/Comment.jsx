import React from 'react';

// Stylesheet
import './Comment.scss';

function Comment(props) {


    return (
        <div>
            <h6>user: {props.user}</h6>
           <p>{props.body}</p> 
        </div>
    );
}

export default Comment;