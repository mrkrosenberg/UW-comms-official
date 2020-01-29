import React, { useState } from 'react';
import useForm from 'react-hook-form';

// Stylesheet
import './EntryForm.scss';

export default function EntryForm1 (props) {
    

    const { register, handleSubmit } = useForm();
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');


    const onSubmit = (post) => {
        props.addPost(post);
        setTitle('');
        setBody(''); 
     };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text" 
                placeholder="Title" 
                name="title" 
                ref={register} />
            <input 
                value={body}
                onChange={e => setBody(e.target.value)}
                type="text" 
                placeholder="Body" 
                name="body" 
                ref={register} />            
            <input 
                type="submit" 
                value="Post" />
        </form>
    );

};