import React, { useState } from 'react';
import useForm from 'react-hook-form';

// Stylesheet 
import './CommentForm.scss';

function CommentForm(props) {

    const { register, handleSubmit } = useForm();
    const [ comment, setComment ] = useState('');

    const onSubmit = (comment) => {
        console.log('comment form submitted')
        props.addComment(comment)
    };

    return (
        <div className="comment-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    required
                    value={comment}
                    onChange={e => setComment(e.target.value)} 
                    type="text"
                    placeholder="enter comment"
                    name="comment"
                    ref={register}
                />
                <input 
                    type="submit"
                    value="Comment"
                />
            </form>
        </div>
    );
};

export default CommentForm;