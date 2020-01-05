import React, { useCallback, useContext } from 'react';

// Routing Stuff
import { Link } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router';

// Auth Config
import Firebase from '../../Config/Firebase';
import { AuthContext } from '../../Authentication/Auth';

const LogIn = ({ history }) => {
  
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await Firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <div className="signup">
          <h6>New User? <Link to="/signup">SignUp</Link> </h6>
      </div>
    </div>
  );
};

export default withRouter(LogIn);
