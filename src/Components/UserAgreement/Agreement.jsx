import React, { Component } from 'react';

// PDF Rendering Dependencies
import { Document, Page, pdfjs } from "react-pdf";


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
                <nav>
                    <button onClick={this.goToPrevPage}>Prev</button>
                    <button onClick={this.goToNextPage}>Next</button>
                </nav>
                <Document
                    file={require("../../Static/file copy.pdf")}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    onLoadError={console.error}>
                    <Page 
                        pageNumber={pageNumber}
                        width={400}
                    />
                </Document>
                <div className="page-number">
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </div>
            </div>
        )
    }
};

export default Agreement;
