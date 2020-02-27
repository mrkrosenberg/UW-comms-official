import React from 'react';

// Stylesheet
import './FeatureContainer.scss'

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Images
import connectIcon from '../../Static/connecticon2.png';
import deviceIcon from '../../Static/devicesicon4.png';
import noteIcon from '../../Static/noteicon5.png';
import newsIcon from '../../Static/newsicon1.png';

function FeatureContainer() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className="connect">
                        <div className="container text-center">
                            <div className="icon-container">
                                <img className="feature-icon" src={connectIcon} alt=""></img>
                            </div>
                            <div className="container feature-text">
                                <p>
                                    Connect with your neighbors and increase communication
                                    in our building
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="feature">
                        <div className="container text-center">
                            <div className="icon-container">
                                <img className="feature-icon" src={noteIcon} alt=""></img>
                            </div>
                            <div className="container feature-text">
                                <p>
                                    Post and view announcements, news, messages, classifies, etc..., all
                                    from your neighbors and all in real time
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="feature">
                        <div className="container text-center">
                            <div className="icon-container">
                                <img className="feature-icon" src={newsIcon} alt=""></img>
                            </div>
                            <div className="container feature-text">
                                <p>
                                    Stay up-to-date on official news and announcments form Union West
                                    and Inland Residential
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="feature">
                        <div className="container text-center">
                            <div className="icon-container">
                                <img className="feature-icon" src={deviceIcon} alt=""></img>
                            </div>
                            <div className="container feature-text">
                                <p>
                                    Responsive design and progressive features make for a seamless experience
                                    on any device
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FeatureContainer;