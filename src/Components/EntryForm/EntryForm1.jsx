import React, { useState } from 'react';
import useForm from 'react-hook-form';

// Stylesheet
import './EntryForm.scss';

// Components
import Accordian from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function EntryForm1 (props) {    

    const { register, handleSubmit } = useForm();
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');

    // refactor as promise and move post ref to onSubmit
    const checkFileType = (post, file) => {

        const fileType = file["type"];
        const validFileTypes = ["image/jpeg", "image/png"];

        if (validFileTypes.includes(fileType)) {
            console.log('this is an image')
            // add post with image
            props.addPostWithImage(post, file)
        } else {

            alert('please select a file that is either JPG or PNG')
        }
    };

    const onSubmit = (post) => {
        if (post.postImage.length > 0) {

            const file = post.postImage[0];
            console.log(post.postImage);
            console.log(post.postImage[0]);
            checkFileType(post, file);
        } else {

            console.log('no image attached')
            // add post without image
            props.addPostWithoutImage(post);
        }
        setTitle('');
        setBody(''); 
     };

    return (

        <div className="entry-form-container">
            <h3 className="entry-form-title">Post to the Board</h3>
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
                        <p className="image-option">
                            Attach Image?
                        </p>
                    </Accordian.Toggle>
                    <Accordian.Collapse eventKey="1">
                    <input 
                        className="post-input image-select-button"
                        type="file"
                        name="postImage"
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