import React, { useState } from 'react';
import useForm from 'react-hook-form';

// Stylesheet
import './ReAuthForm.scss';

function ReAuthForm(props) {

    const { register, handleSubmit } = useForm();
    // const [ userEmail, setUserEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const onSubmit = (data) => {
        // console.log('form submitted: ', data);
        props.reauthDelete(data);
        setPassword('');
    };

    return (
        <div className="delete-form-container">
                <div className="delete-form-color">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Enter password to confirm</p>
                        {/* <input
                            value={userEmail}
                            onChange={e => setUserEmail(e.target.value)}
                            type="email"
                            placeholder="re-enter email"
                            name="userEmail"
                            ref={register}/> */}
                        <input
                            className="password-input"
                            required
                            value={password} 
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="password"
                            name="password"
                            ref={register}
                        />
                        <input 
                            className="account-delete-button"
                            type="submit"
                            value="Confirm"
                        />
                    </form>
                </div>
                
            
        </div>
    );
}

export default ReAuthForm;