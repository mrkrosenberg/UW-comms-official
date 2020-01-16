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
                                <img class="feature-icon" src={connectIcon} alt=""></img>
                            </div>
                            <div className="container feature-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Debitis, velit maiores! Tempore vero consequuntur ipsum 
                                    culpa illo minus blanditiis qui!
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="feature">
                        <div className="container text-center">
                            <div className="icon-container">
                                <img class="feature-icon" src={noteIcon} alt=""></img>
                            </div>
                            <div className="container feature-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Debitis, velit maiores! Tempore vero consequuntur ipsum 
                                    culpa illo minus blanditiis qui!
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="feature">
                        <div className="container text-center">
                            <div className="icon-container">
                                <img class="feature-icon" src={newsIcon} alt=""></img>
                            </div>
                            <div className="container feature-text">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Debitis, velit maiores! Tempore vero consequuntur ipsum 
                                    culpa illo minus blanditiis qui!
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="feature">
                        <div className="container text-center">
                            <div className="icon-container">
                                <img class="feature-icon" src={deviceIcon} alt=""></img>
                            </div>
                            <div className="container feature-text">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Debitis, velit maiores! Tempore vero consequuntur ipsum 
                                    culpa illo minus blanditiis qui!
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