"use client";
import { createContext, useContext, useState } from "react";

const LinkDataContext = createContext();

export const LinkDataProvider = ({ children }) => {
    const [linkData, setLinkData] = useState({});

    const updateLinkData = (updatedFields) => {
        setLinkData(prev => ({
            ...prev,
            ...updatedFields
        }));
    };

    return (
        <LinkDataContext.Provider value={{ linkData, setLinkData, updateLinkData }}>
            {children}
        </LinkDataContext.Provider>
    );
};

export const useLinkData = () => useContext(LinkDataContext);
