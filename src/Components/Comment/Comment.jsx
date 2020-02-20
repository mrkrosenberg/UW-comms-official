import React from 'react';

// Stylesheet
import './Comment.scss';

// Icons
import userIcon from '../../Static/usericon.png';

function Comment(props) {


    return (
        <div className="comment">
            <div className="user-block">
                <img 
                    src={userIcon} 
                    alt="user: "
                    className="comment-icon"
                />
                <h6 className="comment-title">{props.user}</h6>
            </div>
            <p>{props.body}</p> 
        </div>
    );
}

export default Comment;