module.exports = (
    firstName = '',
    lastName = '',
    signatureDataUrl = ''
) => {

    return {

        content: [
            {
                text: 'Individual User Agreement - Terms and Conditions',
                style: 'header'
            },
            'This User Agreement is made as of ', 
            `${new Date()}`,
            'between UW Community Board, and', 
            `${firstName} ${lastName}. `,
            'In consideration of the mutual promises and covenants contained in this Agreement, the parties agree as follows:\n\n',
            {
                text: 'Welcome to UW Community Board!',
                style: 'subheader'
            },
            'These terms and conditions outline the rules and regulations for the use of UW Community Boards Website, located at uwcommunityboard.zyx.',
            'By accessing this website we assume you accept these terms and conditions. Do not continue to use UW Community Board if you do not agree to take all of the terms and conditions stated on this page. Our Terms and Conditions were created with the help of the Terms And Conditions Generator and the Free Terms & Conditions Generator.\n\n',
            {
                text: '1. Definitions\n\n',
                style: 'subheader'
            },
            'The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.\n\n',
              {
                text: '2. Cookies\n\n',
                style: 'subheader'
              },
              'We employ the use of cookies. By accessing UW Community Board, you agreed to use cookies in agreement with the UW Community Boards Privacy Policy. Most interactive websites use cookies to let us retrieve the users details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.\n\n',
              {
                text: '3. Content Liability\n\n',
                style: 'subheader'
              },
              'We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.\n\n',
              {
                  text: '4. Reservation of Rights\n\n',
                  style: 'subheader'
              },
              'We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.\n\n',
              {
                  text: '5. Disclaimer \n\n',
                  style: 'subheader'
              },
              'To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:\n\n',
              {
                  ul: [
                      'limit or exclude our or your liability for death or personal injury;',
                      'limit or exclude our or your liability for fraud or fraudulent misrepresentation;',
                      'limit any of our or your liabilities in any way that is not permitted under applicable law; or',
                      'exclude any of our or your liabilities that may not be excluded under applicable law.\n\n'
                  ]
              },
              'The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.\n\n',
              'As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.\n\n',
              `${firstName} ${lastName}`,
                '___________________________________________________________',
                'Full Legal Name\n\n',
            //   {
            //   image: `${signatureDataUrl}`,
            //   width: 200
            //   },
            //   '___________________________________________________________',
            //   'My Signature\n\n',
            //   `${new Date()}`,
            //     '___________________________________________________________',
            //     'Date\n\n',
    
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true
            },
            subheader: {
                fontSize: 12,
                bold: true
            },
            quote: {
                italics: true
            },
            small: {
                fontSize: 8
            }
        }
    }
};