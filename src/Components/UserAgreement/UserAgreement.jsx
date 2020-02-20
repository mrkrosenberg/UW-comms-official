import React, { Component } from 'react';

// Firebase Ref
import Firebase from '../../Config/Firebase';

// Stylesheet
import './UserAgreement.scss';

// Components
import Agreement from '../UserAgreement/Agreement';
import Spinner from 'react-bootstrap/Spinner';

// Contract Template
import Contract from './Contract';

// pdfMake Config
import Printer from 'pdfmake/build/pdfmake';
import fontStyles from 'pdfmake/build/vfs_fonts';
Printer.vfs = fontStyles.pdfMake.vfs;


export class UserAgreement extends Component {

    constructor(props) {
        super(props);

        this.app = Firebase;
        this.storageRef = this.app.storage().ref('user-agreements');
        this.showSignUpForm = this.showSignUpForm.bind(this);

        this.state = {
            user: {
                firstName: '',
                lastName: ''
            },
            isLoading: false
        }
    };

    showSignUpForm = () => {
        this.props.showSignUpForm();
    }


    handleAgreement = (e) => {
        e.preventDefault();
        this.setState({
            user: {
                firstName: this.refs.firstName.value,
                lastName: this.refs.lastName.value
            }
        }, () => {
            let pdfDoc = Printer.createPdf(Contract(this.state.user.firstName, this.state.user.lastName));
            pdfDoc.download();
            pdfDoc.getBuffer((data) => {
                this.setState({
                    isLoading: true
                })
                this.storageRef.child(`${this.state.user.firstName}` + ` ${this.state.user.lastName}` + `-user-agreement`)
                .put(data)
                .then(
                    this.showSignUpForm(),
                    // this.setState({
                    //     isLoading: false
                    // })
                )
                .catch(function(error) {
                    console.log(error)
                })
            })   
        })
    };

    render() {
        return (
            <div className="user-form-container">
                {this.state.isLoading ? (
                    <Spinner animation="border" />
                ) : (
                    <div className="user-agreement-section text-center">
                        <h6 >Please review our terms and conditions</h6>
                        <Agreement />
                        <form
                            className="user-agreement-form" 
                            onSubmit={this.handleAgreement}>
                            <h6 className="agreement-form-title">Sign user agreement</h6>
                            <input
                                className="agreement-input" 
                                required
                                type="text"
                                ref="firstName"
                                placeholder="First Name"
                            />
                            <br />
                            <input
                                className="agreement-input" 
                                required
                                type="text"
                                ref="lastName"
                                placeholder="Last Name"
                            />
                            <br />
                            <input
                                className="agreement-button submit-button" 
                                type="submit"
                            />
                        </form>
                    </div>
                    
                )}
            </div>
        )
    }
};

export default UserAgreement;
