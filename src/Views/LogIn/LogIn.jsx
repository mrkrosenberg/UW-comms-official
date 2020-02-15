import React, { useCallback, useContext } from 'react';

// Routing Stuff
import { withRouter, Redirect } from 'react-router';

// Firebase Ref
import Firebase from '../../Config/Firebase';

// Auth Config
import { AuthContext } from '../../Authentication/Auth';

const LogIn = ({ history }, props) => {

  // const app = Firebase;
  
  const handleLogin = useCallback(

    async event => {  

      const app = Firebase;
      
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    }, [history]
  );

  const { currentUser } = useContext(AuthContext);


  if (currentUser) {
    return <Redirect to="/" />;
  };

  return (
    <div className="auth-form">
      <h1 className="auth-title text-center">Log in</h1>
      <form onSubmit={ handleLogin }>
        <label 
          className="auth-input-label">
          Email
          <input 
            className="auth-input" 
            name="email" 
            type="email" 
            placeholder="Email" />
        </label>
        <label 
          className="auth-input-label">
          Password
          <input 
            className="auth-input" 
            name="password" 
            type="password" 
            placeholder="Password" />
        </label>
        <button 
          className="auth-submit" 
          type="submit">Log in</button>
      </form>
      {/* <div className="signup">
          <h6>New User? <Link to="/signup">SignUp</Link> </h6>
      </div> */}
    </div>
  );
};

export default withRouter(LogIn);
