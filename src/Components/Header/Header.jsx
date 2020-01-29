import React from 'react';
import { Link } from 'react-router-dom';

// Database Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import './Header.scss';

// Bootstrap Components
import Dropdown from 'react-bootstrap/Dropdown';


// Components
// import 

// Images
import hamburgerIcon from '../../Static/hamburgericon.png';
import homeIcon from '../../Static/homeicon.png';

function Header() {

    const app = Firebase;

    const signOut = () => {
        app.auth().signOut();
    };

        return (
            <nav className="nav-links">
                <Dropdown>
                    <Dropdown.Toggle>
                        <img src={hamburgerIcon} alt="" className="dropdown-icon"/>
                    </Dropdown.Toggle> 
                    <Dropdown.Menu>
                        <ul className="navbar-nav">
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/gym">
                                <li>Gym</li>
                            </Link>
                            <Link to="/maintenance">
                                <li>Maintenance</li>
                            </Link>
                            <Link to="/misc">
                                <li>Misc</li>
                            </Link>
                            <Link to="/parking">
                                <li>Parking</li>
                            </Link>
                            <Link to="/pool">
                                <li>Pool/Rec</li>
                            </Link> 
                        </ul>
                    </Dropdown.Menu>
                </Dropdown> 
                <Dropdown className="user">
                    <Dropdown.Toggle>
                        <img src={homeIcon} alt="User" className="dropdown-icon user-icon"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <ul>
                            <Link to="/account">
                                <li>Account Settings</li>
                            </Link>
                            <li>
                                <button onClick={signOut} alt="Menu">Sign Out</button>
                            </li>
                        </ul>
                    </Dropdown.Menu>
                </Dropdown>   
            </nav>
        );
};

export default Header;
