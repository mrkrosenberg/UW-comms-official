import React from 'react';

// Stylesheet
import './Button.scss';

export default function Button (props) {


    const buttonAction = () => {
        props.action();
    };

    return (
        <div>
            <button 
                className="action-button"
                onClick={buttonAction}>
                    {props.buttonText}
        </button>
        </div>
    );
};

