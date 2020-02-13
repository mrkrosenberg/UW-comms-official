import React, { Component } from 'react';

// Contract Template
import Contract from './Contract';

// Stylesheet
import './UserAgreement.scss';

// pdfMake Config
import Printer from 'pdfmake/build/pdfmake';
import fontStyles from 'pdfmake/build/vfs_fonts';
Printer.vfs = fontStyles.pdfMake.vfs;





export class UserAgreement extends Component {

    constructor(props) {
        super(props);

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
            let pdfDoc = Printer.createPdf(Contract(this.refs.firstName.value, this.refs.lastName.value));
            pdfDoc.download();
        })
    };

    render() {
        return (
            <div className="user-form-container">
                <h2>Sign User Agreement</h2>
                <form onSubmit={this.handleAgreement}>
                    <label 
                        className="user-input"
                        htmlFor="firsName">
                            First Name
                            <input 
                                type="text"
                                ref="firstName"
                            />
                    </label>
                    <label 
                        className="user-input"
                        htmlFor="lastName">
                            Last Name
                            <input 
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
}

export default UserAgreement
