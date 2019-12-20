import React, { useState } from 'react';
import useForm from 'react-hook-form';

export default function EntryForm1 (props) {
    
    

    const { register, handleSubmit, errors } = useForm();
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');

    // const onSubmit = (data) => {
    //     console.log(data);
    //     setTitle('');
    //     setBody('');
    // };

    const onSubmit = (data) => {
        props.addPost(data);
        setTitle('');
        setBody('');
     };

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
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
            <input type="submit" value="Post" />
        </form>
    );

};