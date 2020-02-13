module.exports = (
    firstName = '',
    lastName = '',
    signatureDataUrl = ''
) => {

    return {

        content: [
            {
                text: 'Individual User Agreement',
                style: 'header'
            },
            'This User Agreement (“Agreement”) is made as of ',
            `${new Date()}`,
            ' (“Effective Date”) between UW-Comms. (“Assignee”), and',
            `${firstName} ${lastName}`,
            '(“Assignor”). In consideration of the mutual promises and covenants contained in this Agreement, the parties agree as follows:\n\n',
            {
                text: '1. Definitions\n\n',
                style: 'subheader'
              },
                '1.1 "Assigned Property" means the property listed in Exhibit A and all Intellectual Property and Intellectual Property Rights forming a part of, embodied, in or necessary for use of the property.\n\n',
              '1.2 "Intellectual Property" means all technology and intellectual property, regardless of form, including without limitation: published and unpublished works of authorship, including without limitation audiovisual works, collective works, computer programs, compilations, databases, derivative works, literary works, maskworks, and sound recordings (“Works of Authorship”); inventions and discoveries, including without limitation articles of manufacture, business methods, compositions oF matter, improvements, machines, methods, and processes and new uses for any of the preceding items ("Inventions"); words, names, symbols, devices, designs, and other designations, and combinations of the preceding items, used to identify or distinguish a business, good, group, product, or service or to indicate a form of certification, including without limitation logos, product designs, and product features (“Trademarks”); and information that is not generally known or readily ascertainable through proper means, whether tangible or intangible, including without limitation algorithms, customer lists, ideas, designs, formulas, know-how, methods, processes, programs, prototypes, systems, and techniques (“Confidential Information”).\n\n',
              '1.3 "Intellectual Property Rights" means all rights in, arising out of, or associated with Intellectual Property in any jurisdiction, including without limitation: rights in, arising out of, or associated with Works of Authorship, including without limitation rights in maskworks and databases and rights granted under the Copyright Act (“Copyrights”); rights in, arising out of, or associated with Inventions, including without limitation rights granted under the Patent Act (“Patent Rights”) rights in, arising out of, or associated with Trademarks, including without limitation rights granted under the Lanham Act (“Trademark Rights”); rights in, arising out of, or associated with Confidential Information, including without limitation rights granted under the Uniform Trade Secrets Act (“Trade Secret Rights”); rights in, arising out of, or associated with a person’s name, voice, signature, photograph, or likeness, including without limitation rights of personality, privacy, and publicity (“Personality Rights”); rights of attribution and integrity and other moral rights of an author (“Moral Rights”); and rights in, arising out of, or associated with domain names (“Domain Name Rights”).\n\n',
              '2. Assignment. Assignor hereby perpetually, irrevocably, and unconditionally assigns, transfers, and conveys to Assignee and its successors and assigns, all of Assignor’s right, title, and interest in and to the Assigned Property. Assignor further perpetually, irrevocably, and unconditionally assigns, transfers, and conveys to Assignee and its successors and assigns all claims for past, present and future infringement or misappropriation of the Intellectual Property Rights included in the Assigned Property, including all rights to sue for and to receive and recover all profits and damages accruing from an infringement misappropriation prior to the Effective Date as well as the right to grant releases for past infringements. Assignor hereby waives and agrees not to enforce all Moral Rights and all Personality Rights that Assignor may have in the Assigned Property.\n\n',
              '3. Consideration Your exclusive assignment, transfer, grant of ownership, of all rights to Steve Media of the Content, (or exclusive license of copyright in and to the Content if a court or arbitrator were to find that, for some reason, ownership of the Content was not properly transferred to Steve Media), and this Agreement are supported by reasonable and valuable consideration, the receipt and adequacy of which is or are hereby acknowledged by You. You acknowledge that such consideration includes the mere possibility of Compiler’s or Steve Media (as defined, and naturally its other licensees) use or display and/or distribution of the Content, and the mere possibility of the publicity and promotion by Compiler or from Steve Media’s use or display and/or distribution of the Content, and the mere possible use of Your Personality Rights.\n\n',
              '4. Confidentiality. Assignor must not use any Confidential Information assigned as part of the Assigned Property except for the benefit of Assignee. Assignor must not disclose such Confidential Information to third parties. Assignor must take reasonable steps to maintain the confidentiality and secrecy of such Confidential Information and to prevent the unauthorized use or disclosure of such Confidential Information. Any breach of these restrictions will cause irreparable harm to Assignee and will entitle Assignee to injunctive relief in addition to all applicable legal remedies.\n\n',
              '5. Representations and Warranties. Assignor represents and warrants to Assignee that: Assignor exclusively owns all right, title, and interest in and to the Assigned Property; Assignor has not granted and will not grant any licenses or other rights to the Assigned Property to any third party; the Assigned Property is free of any liens, encumbrances, security interests, and restrictions on transfer; to Assignor’s knowledge, the Intellectual Property that is assigned as part of the Assigned Property does not infringe Intellectual Property Rights of any third party; and there are no legal actions, investigations, claims, or proceedings pending or threatened relating to the Assigned Property.\n\n',
              '6. Indemnification. Assignor will defend, indemnify, and hold harmless Assignee, and Assignee’s officers, directors, shareholders, successors, and assigns, from and against all losses, liabilities, and costs including, without limitation, reasonable attorneys’ fees, expenses, penalties, judgments, claims and demands of every kind and character that Assignee, its officers, directors, shareholders, successors, and assigns may incur, suffer, or be required to pay arising out of, based upon, or by reason of: the breach by Assignor of any of the representations or warranties made by Assignor under this Agreement; Assignor’s use of the Assigned Property prior to the date of this Agreement; or Assignor’s failure to perform its obligations under this Agreement.\n\n',
              {
                text: '7. Further Assurances\n\n',
                style: 'subheader'
              },
              '7.1 Assistance. Assignor will take all action and execute all documents as Assignee may reasonably request to effectuate the transfer of the Assigned Property and the vesting of complete and exclusive ownership of the Assigned Property in Assignee. In addition, Assignor will, at the request and sole cost and expense of Assignee, but without additional compensation, promptly sign, execute, make, and do all such deeds, documents, acts, and things as Assignee may reasonably require:\n\n',
              '(a) to apply for, obtain, register, maintain and vest in the name of Assignee alone (unless Assignee otherwise directs) Intellectual Property Rights protection relating to any or all of the Assigned Property in any country throughout the world, and when so obtained or vested, to renew and restore the same;\n\n',
              '(b) to defend any judicial, opposition, or other proceedings in respect of such applications and any judicial, opposition, or other proceedings or petitions or applications for revocation of such Intellectual Property Rights; and \n\n',
              '(c) to assist Assignee with the defense and enforcement of its rights in any registrations issuing from such applications and in all Intellectual Property Rights protection in the Intellectual Property.\n\n',
              '7.2 Power of Attorney. If at any time Assignee is unable, for any reason, to secure Assignor’s signature on any letters patent, copyright, or trademark assignments or applications for registrations, or other documents or filings pertaining to any or all of the Assigned Property, whether because of Assignor’s unwillingness, or for any other reason whatsoever, Assignor hereby irrevocably designates and appoints Assignee and its duly authorized officers and agents as its agents and attorneys-in-fact, to act for and on its behalf and stead to execute and file any and all such applications, registrations, and other documents and to do all other lawfully permitted acts to further the prosecution thereon with the same legal force and effect as if executed by Assignor.\n\n',
              {
                text: '8. Miscellaneous\n\n',
                style: 'subheader'
              },
              '8.1 Injunctive Relief. A breach of this Agreement may result in irreparable harm to Assignee and a remedy at law for any such breach will be inadequate, and in recognition thereof, Assignee will be entitled to injunctive and other equitable relief to prevent any breach or the threat of any breach of this Agreement by Assignor without showing or proving actual damages.\n\n',
              '8.2 Binding on Successors. This Agreement will inure to the benefit of, and be binding upon, the parties, together with their respective representatives, successors, and assigns, except that Assignor may not assign this Agreement without the consent of Assignee.Assignee may assign this Agreement in its discretion.\n\n',
              '8.3 Governing Law and Jurisdiction. This Agreement will be governed by, and construed in accordance with, the laws of the State of New York without reference to its conflict of laws provisions.With respect to any dispute arising out of or related to this Agreement, the parties consent to the exclusive jurisdiction of, and venue in, the federal and state courts located in New York County, New York.\n\n',
              '8.4 Amendment and Waiver. This Agreement may not be amended or modified unless mutually agreed upon in writing by the parties and no waiver will be effective unless signed by the party from whom such waiver is sought. The waiver by any party of a breach of any provision of this Agreement will not operate or be construed as a waiver of any subsequent breach.\n\n',
              '8.5 Severability. If any provision of this Agreement is held invalid by any court of competent jurisdiction, such invalidity will not affect the validity or operation of any other provision, and the invalid provision will be deemed severed from this Agreement.\n\n',
              '8.6 Entire Agreement. This Agreement is the entire agreement concerning the subject matter hereof. It supersedes all prior and contemporaneous agreements, assurances, representations, and communications between the parties.\n\n',
        
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