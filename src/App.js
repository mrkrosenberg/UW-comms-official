import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Stylesheet
import './App.scss';

// Components
import Home from './Views/Home/Home';
import Header from '../src/Components/Header/Header';
import Footer from '../src/Components/Footer/Footer';
import Gym from './Views/Gym/Gym';
import Maintenance from './Views/Maintenance/Maintenance';
import Misc from './Views/Misc/Misc';
import Park from './Views/Park/Park';
import Parking from './Views/Parking/Parking';
import Pool from './Views/Pool/Pool';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/gym" component={Gym} />
            <Route path="/maintenance" component={Maintenance} />
            <Route path="/misc" component={Misc} />
            <Route path="/park" component={Park} />
            <Route path="/parking" component={Parking} />
            <Route path="/pool" component={Pool} />
          </Switch>

        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
