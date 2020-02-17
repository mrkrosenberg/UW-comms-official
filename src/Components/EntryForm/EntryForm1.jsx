import React, { useState } from 'react';
import useForm from 'react-hook-form';

// Stylesheet
import './EntryForm.scss';

// Components
import Accordian from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import FileUploader from "react-firebase-file-uploader";

function EntryForm1 (props) {    

    const { register, handleSubmit } = useForm();
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');


    const onSubmit = (post) => {
        props.addPost(post);
        setTitle('');
        setBody(''); 
     };

    return (

        <div className="entry-form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="post-input"
                    required 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text" 
                    placeholder="Title" 
                    name="title" 
                    ref={register} 
                />
                <textarea
                    className="post-input" 
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type="text"
                    placeholder="body"
                    name="body"
                    ref={register} 
                /> 
                <Accordian defaultActiveKey="0">
                    <Accordian.Toggle as={Button} variant="link" eventKey="1">
                        Attach Image?
                    </Accordian.Toggle>
                    <Accordian.Collapse eventKey="1">
                        {/* <FileUploader 
                            accept="image/*"
                            name="post-image"
                            storageRef={props.imageStorage}
                            multiple
                        /> */}
                        <input 
                            className="post-input"
                            type="file"
                            name="image"
                            ref={register}
                        />
                    </Accordian.Collapse>
                </Accordian>         
                <input
                    className="post-submit-button" 
                    type="submit" 
                    value="Submit Post" 
                />
            </form>
        </div>    
    );

};

export default EntryForm1;