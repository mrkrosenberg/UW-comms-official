import React, { useState } from 'react';
import useForm from 'react-hook-form';

// Stylesheet
import './ReAuthForm.scss';

function ReAuthForm(props) {

    const { register, handleSubmit } = useForm();
    const [ userEmail, setUserEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const onSubmit = (data) => {
        console.log('form submitted: ', data);
        props.reAuthUser(data);
        setPassword('');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                    type="email"
                    placeholder="email"
                    name="userEmail"
                    ref={register}/>
                <input
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                    name="password"
                    ref={register}/>
                <input 
                    type="submit"
                    value="Authenticate"/>
            </form>
            
        </div>
    );
}

export default ReAuthForm;