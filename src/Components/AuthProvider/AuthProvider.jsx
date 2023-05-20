import React, {  createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/config';

export const AuthContext = createContext();
const Provider = new GoogleAuthProvider();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState(null)

    const handleSignUp = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,Provider)
    }
    const logInEmailPass = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser => {
            setLoading(false)
            setUsers(currentUser);
        }))
        return () => {
            return unsubscribe();
        }
    },[])
    const updatename = (currentuser,name,photo) => {
        return updateProfile(currentuser,{
            displayName:name, photoURL:photo
        })
    }

    const userInfo = {
        handleSignUp,
        logInGoogle,
        logInEmailPass,
        logOut,
        users,
        updatename,

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;