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
import userIcon from '../../Static/usericon.png';

function Header() {

    const app = Firebase;

    const signOut = () => {
        app.auth().signOut();
    };

        return (
            <nav className="nav-links d-flex justify-content-between">
                <Dropdown drop="right">
                    <Dropdown.Toggle>
                        <img 
                            src={hamburgerIcon} 
                            alt="Menu" 
                            className="dropdown-icon"
                        />
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
                <Dropdown drop="left">
                    <Dropdown.Toggle>
                        <img src={userIcon} alt="User Menu" className="dropdown-icon align-right"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Link to="/account">
                            <li>My Account</li>
                        </Link>
                        <hr />
                        <li>
                            <button
                                className="signout-button" 
                                onClick={signOut} 
                                alt="Menu">
                                    Sign Out
                            </button>
                        </li>
                    </Dropdown.Menu>
                </Dropdown> 
            </nav>
        );
};

export default Header;
