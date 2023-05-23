import React, { useState, createContext } from "react";

export const AppContext = createContext()

const InitialState = {
    Notification: false,
    UserProfile: false,

}

export const AppProvider =({children}) => {
   
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [isAdmin, setIsAdmin] = useState(true);
   
   return (
   <AppContext.Provider value={[isLoggedIn, isAdmin, setIsAdmin, setIsLoggedIn, InitialState]}>
        {children}
    </AppContext.Provider>
    )
}