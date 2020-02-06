import React, { useState } from 'react';
import useForm from 'react-hook-form';

// Stylesheet
import './PasswordResetForm.scss';


function PasswordResetForm(props) {

    const { register, handleSubmit } = useForm();
    const [ password, setPassword ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const onSubmit = (data) => {
        console.log('password: ', password, 'new password: ', newPassword, 'confirm: ', confirmPassword);
        console.log(data.password, data.newPassword, data.confirmPassword)
        if (data.newPassword === data.confirmPassword) {
            console.log('passwords match')
            props.reauthPassword(data)
        } else {
            alert('Passwords do not match. Please try again.')
        }
    };
 
    return (
        <div className="password-form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                    type="password"
                    placeholder="re-enter password"
                    name="password"
                    ref={register}
                />
                <input
                    required
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)} 
                    type="password"
                    placeholder="enter new password"
                    name="newPassword"
                    ref={register}
                />
                <input
                    required
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="confirm new password"
                    name="confirmPassword"
                    ref={register}
                />
                <input 
                    type="submit"
                    value="reset password"
                />
            </form>
        </div>
    );
}

export default PasswordResetForm;