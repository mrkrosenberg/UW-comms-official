import React from 'react';
import { Link } from 'react-router-dom';

// Database Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import './Header.scss';

// Components
import Dropdown from 'react-bootstrap/Dropdown';
// import Button from '../Button/Button';

// Images
import hamburgerIcon from '../../Static/hamburgericon.png';
import userIcon from '../../Static/usericon.png';

function Header() {

    const app = Firebase;
    const currentUser = app.auth().currentUser.displayName;

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
                    <div className="display-name-container">
                        <h6 className="display-name">
                            Welcome {currentUser}
                        </h6>
                    </div>
                    <Dropdown.Toggle>
                        <img src={userIcon} alt="User Menu" className="dropdown-icon align-right"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Link to="/account">
                            <li>My Account</li>
                        </Link>
                        <Link to="/usersposts">
                            <li>My Posts</li>
                        </Link>
                        <hr />
                        <li>
                            <button
                                className="signout-button" 
                                onClick={signOut}>
                                    Sign Out
                            </button>
                        </li>
                        {/* <li>
                            <Button 
                                className="signout-button"
                                action={signOut}
                                buttonText={buttonText}
                            />
                        </li> */}
                    </Dropdown.Menu>
                </Dropdown> 
            </nav>
        );
};

export default Header;
