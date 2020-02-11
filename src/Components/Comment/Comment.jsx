import React from 'react';

// Stylesheet
import './Comment.scss';

// Icons
import userIcon from '../../Static/usericon.png';

function Comment(props) {


    return (
        <div className="comment">
            <h6>
                <img 
                    src={userIcon} 
                    alt="user: "
                    className="comment-icon"
                />
                {props.user}
            </h6>
            <p>{props.body}</p> 
        </div>
    );
}

export default Comment;