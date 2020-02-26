import React, { useCallback } from 'react';

// Routing Stuff
import { withRouter } from 'react-router';

// Firebase Ref
import Firebase from '../../Config/Firebase';

// Components
// import UserAgreement from '../../Components/UserAgreement/UserAgreement';

const SignUp = ({ history }) => {

  const handleSignUp = useCallback(

    async event => {
      
      const app = Firebase;

      event.preventDefault();
      const { email, password, displayname } = event.target.elements;
      // console.log('email: ', email.value, 'password: ', password.value, 'display: ', displayname.value)
      try {
        await app.auth().createUserWithEmailAndPassword(email.value, password.value);
        const currentUser = app.auth().currentUser;
        // console.log(currentUser)
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
          <input 
            className="auth-input" 
            name="email" 
            type="email" 
            placeholder="Email" 
          />
          <input 
            className="auth-input" 
            name="password" 
            type="password" 
            placeholder="Password" 
          />
          <input
            className="auth-input"
            name="displayname" 
            type="text"
            placeholder="Display Name"
          />
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
