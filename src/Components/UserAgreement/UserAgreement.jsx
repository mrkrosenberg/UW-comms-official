import React, { Component } from 'react';

// Firebase Ref
import Firebase from '../../Config/Firebase';

// Contract Template
import Contract from './Contract';

// Stylesheet
import './UserAgreement.scss';

// Components
import Agreement from '../UserAgreement/Agreement';

// pdfMake Config
import Printer from 'pdfmake/build/pdfmake';
import fontStyles from 'pdfmake/build/vfs_fonts';
Printer.vfs = fontStyles.pdfMake.vfs;


export class UserAgreement extends Component {

    constructor(props) {
        super(props);

        this.app = Firebase;
        this.storageRef = this.app.storage().ref('user-agreements');

        this.state = {
            user: {
                firstName: '',
                lastName: ''
            }
        }
    };

    handleAgreement = (e) => {
        e.preventDefault();
        console.log('first: ', this.refs.firstName.value, 'last: ', this.refs.lastName.value)

        this.setState({
            user: {
                firstName: this.refs.firstName.value,
                lastName: this.refs.lastName.value
            }
        }, () => {
            let pdfDoc = Printer.createPdf(Contract(this.state.user.firstName, this.state.user.lastName));
            // let fileName = `${this.state.user.firstName, this.state.user.lastName}` + '-user-agreement';
            // console.log(fileName)
            // pdfDoc.download();
            pdfDoc.getBuffer((data) => {
                this.storageRef.child(`${this.state.user.firstName}` + ` ${this.state.user.lastName}` + `-user-agreement`)
                .put(data)
                .then(function(snapshot) {
                    console.log('agreement upload successful')
                }).catch(function(error) {
                    console.log(error)
                })
            })
            
        })
    };

    render() {
        return (
            <div className="user-form-container">
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
        )
    }
};

export default UserAgreement;
