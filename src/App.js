import React from 'react';

// Stylesheet
import './App.scss';

// Components
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
    <div className="App">
      <Header />
      <div className="main">
        <Gym />
        <Maintenance />
        <Misc />
        <Park />
        <Parking />
        <Pool />
      </div>
      <Footer />
    </div>
  );
}

export default App;
