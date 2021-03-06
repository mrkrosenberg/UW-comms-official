import React, { useState, useEffect } from 'react';
import Firebase from '../Config/Firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [ currentUser, setCurrentUser ] = useState(null);

    useEffect(() => {
        Firebase.auth().onAuthStateChanged(setCurrentUser);   
    }, []);

    return(
        <AuthContext.Provider value={ {currentUser} }>
            { children }
        </AuthContext.Provider>
    );
};