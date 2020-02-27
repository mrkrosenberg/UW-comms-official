import React, { useState } from 'react';
import useForm from 'react-hook-form';

// Stylesheet
import './PasswordResetForm.scss';

// Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PasswordResetForm(props) {

    const { register, handleSubmit } = useForm();
    const [ password, setPassword ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const onSubmit = (data) => {
        if (data.newPassword === data.confirmPassword) {
            // console.log('passwords match')
            props.reauthPassword(data)
        } else {
            alert('Passwords do not match. Please try again.')
        }
    };
 
    return (
        <div>
            <Container>
                <Row>
                    <Col md={1} />
                    <Col className="password-form-container" md={10}>
                        <h6>Reset Password:</h6>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="reset-input"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)} 
                                type="password"
                                placeholder="current password"
                                name="password"
                                ref={register}
                            />
                            <input
                                className="reset-input"
                                required
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)} 
                                type="password"
                                placeholder="enter new password"
                                name="newPassword"
                                ref={register}
                            />
                            <input
                                className="reset-input"
                                required
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                type="password"
                                placeholder="confirm new password"
                                name="confirmPassword"
                                ref={register}
                            />
                            <input
                                className="reset-input-button" 
                                type="submit"
                                value="Reset Password"
                            />
                        </form>
                    </Col>
                    <Col md={1} />
                </Row>
            </Container>
        </div>
    );
}

export default PasswordResetForm;