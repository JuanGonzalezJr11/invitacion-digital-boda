import { createContext, useRef, useState } from "react";

export const ContextUI = createContext();

export const ContextProvider = ({children}) => {
    const myRef = useRef([]);
    const [path, setPath] = useState("");
    const [gift, setGift] = useState('')
    const handleClick = (index) => {
        myRef.current[index].scrollIntoView({behavior: 'smooth', block: 'center'});
    };

    const saveGift = (gift) => {
        setGift(gift)
    }
    const savePath = (path) => {
        setPath(path);
    };

    return(
        <ContextUI.Provider value={{myRef, path, gift, savePath, handleClick, saveGift}}>
            {children}    
        </ContextUI.Provider>
    )
};