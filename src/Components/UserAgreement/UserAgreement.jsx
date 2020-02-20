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
            // pdfDoc.download();
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
            // write if statement to display on state of conditional isLoading
            <div className="user-form-container">
                {this.state.isLoading ? (
                    <Spinner animation="border" />
                ) : (
                    <div>
                        <Agreement />
                        <h2>Sign User Agreement</h2>
                        <form onSubmit={this.handleAgreement}>
                            <label 
                                className="user-input"
                                htmlFor="firsName">
                                    First Name
                                    <input 
                                        required
                                        type="text"
                                        ref="firstName"
                                    />
                            </label>
                            <label 
                                className="user-input"
                                htmlFor="lastName">
                                    Last Name
                                    <input 
                                        required
                                        type="text"
                                        ref="lastName"
                                    />
                            </label>
                            <input 
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
