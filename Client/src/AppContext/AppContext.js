import React, { useState, createContext } from "react";

 const AppContext = createContext({
    Notification: false,
    UserProfile: false,
    isLoggedIn: false,
    isAdmin: false,

 })

const AppProvider = ({ children }) => {
    const [Notification, setNotification] = useState(false);
    const [UserProfile, setUserProfile] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    
    return (
        <AppContext.Provider
        value={{
            Notification,
            setNotification,
            UserProfile,
            setUserProfile,
            isLoggedIn,
            setIsLoggedIn,
            isAdmin,
            setIsAdmin,
        }}
        >
        {children}
        </AppContext.Provider>
    );
 };

export { AppContext, AppProvider };