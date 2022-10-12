
// import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const EartContext = createContext();

export const ContextProvider = ({ children }) => {
    // i pass this state here because i want that the background color change when an image is clicked
    // and there will be a modal only on view!
    const [darkBg, setDarkBg] = useState(false);

    return (
        <EartContext.Provider value={{ darkBg, setDarkBg }}>
            { children }
        </EartContext.Provider>
    )
}

export const Eart = () => {
    return useContext(EartContext);
}
