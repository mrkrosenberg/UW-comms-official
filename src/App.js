import React from 'react';

// Routing & Authentication
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Authentication/Auth';
import ProtectedRoute from './Authentication/ProtectedRoutes';

// Stylesheet
import './App.scss';

// Components
import Home from './Views/Home/Home';
import LogIn from './Views/LogIn/LogIn';
import SignUp from './Views/SignUp/SignUp'
import Footer from '../src/Components/Footer/Footer';
import Gym from './Views/Gym/Gym';
import Maintenance from './Views/Maintenance/Maintenance';
import Misc from './Views/Misc/Misc';
import Park from './Views/Park/Park';
import Parking from './Views/Parking/Parking';
import Pool from './Views/Pool/Pool';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <div className="main">
            <Switch>
              <Route path="/login" component={LogIn} />
              <Route path="/signup" component={SignUp} />
              <ProtectedRoute path="/" exact component={Home} />
              <ProtectedRoute path="/gym" component={Gym} />
              <ProtectedRoute path="/maintenance" component={Maintenance} />
              <ProtectedRoute path="/misc" component={Misc} />
              <ProtectedRoute path="/park" component={Park} />
              <ProtectedRoute path="/parking" component={Parking} />
              <ProtectedRoute path="/pool" component={Pool} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>


  );
}

export default App;
