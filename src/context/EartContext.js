
// import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { auth } from '../firebase';

import { 
    createUserWithEmailAndPassword
 } from 'firebase/auth';

const EartContext = createContext();

export const ContextProvider = ({ children }) => {
    // i pass this state here because i want that the background color change when an image is clicked
    // and there will be a modal only on view!
    const [darkBg, setDarkBg] = useState(false);

    // function to create a user
    const createUser = (email, password) => {
        console.log(email, password);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    return (
        <EartContext.Provider value={{ darkBg, setDarkBg, createUser }}>
            { children }
        </EartContext.Provider>
    )
}

export const Eart = () => {
    return useContext(EartContext);
}
