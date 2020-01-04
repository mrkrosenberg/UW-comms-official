import React from 'react';
import { Link } from 'react-router-dom';

// Stylesheet
import './Header.scss'

function Header() {


        return (
            <div>
                <div className="header">
                    <Link to="/">
                        <h3>Logo</h3>
                    </Link>
                    <ul>
                        <Link to="/gym">
                            <li>Gym</li>
                        </Link>
                        <Link to="/maintenance">
                            <li>Maintenance</li>
                        </Link>
                        <Link to="/misc">
                            <li>Misc</li>
                        </Link>
                        <Link to="/park">
                            <li>Park</li>
                        </Link>
                        <Link to="/parking">
                            <li>Parking</li>
                        </Link>
                        <Link to="/pool">
                            <li>Pool/Rec</li>
                        </Link>
                    </ul>
                </div>
            </div>

        );
};

export default Header;
