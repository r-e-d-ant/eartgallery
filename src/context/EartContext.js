
// import { useEffect } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../firebase';

import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

const EartContext = createContext();

export const ContextProvider = ({ children }) => {
    // i pass this state here because i want that the background color change when an image is clicked
    // and there will be a modal only on view!
    const [darkBg, setDarkBg] = useState(false);
    const [user, setUser] = useState(""); // will store current user if any

    useEffect(() => {
        // get current logged in user
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    // function to create a user
    const createUser = (email, password) => {
        console.log(email, password);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // function to create a user
    const signInUser = (email, password) => {
        console.log(email, password);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // function to logout a user
    const logoutUser = () => {
        return signOut(auth);
    }

    // function to verify email
    const verifyEmail = (user) => {
        return sendEmailVerification(user, { url: 'http://localhost:3000/login' })
    }

    // function to reset password
    const resetUserPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    return (
        <EartContext.Provider value={{ darkBg, setDarkBg, user, createUser, verifyEmail, signInUser, resetUserPassword, logoutUser }}>
            {children}
        </EartContext.Provider>
    )
}

export const Eart = () => {
    return useContext(EartContext);
}
