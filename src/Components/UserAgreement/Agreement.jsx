import React, { Component } from 'react';

// PDF Rendering Dependencies
import { Document, Page, pdfjs } from "react-pdf";

// Stylesheet
import './UserAgreement.scss';

export class Agreement extends Component {

    constructor() {
        super();
        
        this.state = {
            numPages: null,
            pageNumber: 1
        };
    };

    componentDidMount() {
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${ pdfjs.version }/pdf.worker.js`
    };

    onDocumentLoadSuccess = ({numPages}) => {
        this.setState({
            numPages
        });
    };

    goToPrevPage = () =>
        this.setState(state => ({ 
            pageNumber: state.pageNumber - 1 
        }));
    goToNextPage = () =>
        this.setState(state => ({ 
            pageNumber: state.pageNumber + 1 
        }));

    render() {

        const { numPages, pageNumber } = this.state;

        return (
            <div className="pdf-container">
                <nav className="pdf-page-button d-flex justify-content-between">
                    <button className="agreement-button" onClick={this.goToPrevPage}>Prev</button>
                    <button className="agreement-button" onClick={this.goToNextPage}>Next</button>
                </nav>
                <div className="page-number text-center">
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </div>
                <Document
                    className="user-agreement"
                    file={require("../../Static/UWComm - Agreement.pdf")}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    onLoadError={console.error}>
                    <Page 
                        pageNumber={pageNumber}
                        width={400}
                    />
                </Document>  
            </div>
        )
    }
};

export default Agreement;
