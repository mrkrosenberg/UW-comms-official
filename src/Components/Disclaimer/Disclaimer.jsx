import React from 'react';

// Stylesheet
import './Disclaimer.scss'


function Disclaimer() {
    return (
        <div>
            <section>
                <div className="disclaimer-text container-fluid text-center">
                    <p>
                        * Disclaimer: We hold no official affiliation with Union West Apartments or Inland Residential.
                        This app is built by a resident, for residents to better communicate within the apartment complex
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Disclaimer;