import React from 'react';

// Stylesheet
import './Button.scss';

export default function Button (props) {

    // let postId = props.postId;

    const buttonAction = () => {
        props.action();
    };

    return (
        <div>
            <button onClick={buttonAction}>Delete Post</button>
        </div>
    );
};

