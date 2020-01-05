import React from 'react';

// Stylesheet
import './Button.scss';

export default function Button (props) {

    let postId = props.postId;

    const deletePost = () => {
        props.deletePost(postId);
    };

    return (
        <div>
            <button onClick={deletePost}>Delete Post</button>
        </div>
    );
};

