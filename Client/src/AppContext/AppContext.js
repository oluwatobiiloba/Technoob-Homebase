import React, { useState, createContext } from "react";

 const AppContext = createContext({
    Notification: false,
    UserProfile: false,
    isLoggedIn: false,
    isAdmin: false,

 })

const AppProvider = ({ children }) => {
    const [Notification, setNotification] = useState(false);
    const [UserProfile, setUserProfile] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [dashboardToggle, setDashboardToggle] = useState({
        displayToggle: false,
        toggleValue: "User Dashboard"
    });

    //custom fuction to make API calls
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, options) => {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const jsonData = await response.json();
      setData(jsonData.data.activity);
       console.log(jsonData.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
    
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
            dashboardToggle,
            setDashboardToggle,

            data, loading, error, fetchData,
        }}
        >
        {children}
        </AppContext.Provider>
    );
 };

export { AppContext, AppProvider };