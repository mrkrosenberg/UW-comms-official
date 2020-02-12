import React, { useCallback } from 'react';

// Routing Stuff
import { withRouter } from 'react-router';

// Firebase Ref
import Firebase from '../../Config/Firebase';

const SignUp = ({ history }) => {

  const app = Firebase;

  const handleSignUp = useCallback(

    async event => {
      event.preventDefault();
      const { email, password, displayname } = event.target.elements;
      console.log('email: ', email.value, 'password: ', password.value, 'display: ', displayname.value)
      try {
        await app.auth().createUserWithEmailAndPassword(email.value, password.value);
        const currentUser = app.auth().currentUser;
        console.log(currentUser)
        await currentUser.updateProfile({
          displayName: displayname.value
        });
        history.push("/");
      } catch (error) {
        alert(error);
      }
    }, [history]
  );

  return (
    <div className="auth-form">
      <h1 className="auth-title text-center">Sign up</h1>
      <form onSubmit={ handleSignUp }>
        <label className="auth-input-label" >
          Email
          <input 
            className="auth-input" 
            name="email" 
            type="email" 
            placeholder="Email" 
          />
        </label>
        <label className="auth-input-label" >
          Password
          <input 
            className="auth-input" 
            name="password" 
            type="password" 
            placeholder="Password" 
          />
        </label>
        <label className="auth-input-label">
          Display name
          <input
            className="auth-input"
            name="displayname" 
            type="text"
            placeholder="Display Name"
          />
        </label>
        <button 
          className="auth-submit" 
          type="submit">
            Sign Up
        </button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
