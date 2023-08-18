import React, { useContext, useEffect } from "react";
import "./App.css";

import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import { NavBar, Footer } from "./components/index.js";

import { SignUp } from "./pages/Auth";
import {
  ContactUs,
  Resources,
  AboutUs,
  FindJobs,
  Home,
  UserLogin,
} from "./pages/LandingPage";

import { AppContext } from "./AppContext/AppContext";
import AdminNavBar from "./components/AdminNavBar";
import AdminSideBar from "./components/AdminSideBar";

import {
  AdminDashboard,
  JobManagement,
  ResourceManagement,
  EventManagement,
} from "./pages/AdminPage/Dashboard";
import DashSelector from "./utility/DashSelector";
import AllResources from "./pages/LandingPage/Resources/reasources_pages/Page1";

// import JobDetails from "./pages/LandingPage/FindJob/JobDetails"
import JobDescription from "./pages/LandingPage/FindJob/JobDescription";

const cookies = new Cookies();

function App() {
  const { isLoggedIn, setIsLoggedIn, setDashboardToggle, dashboardToggle, setUserProfile } =
    useContext(AppContext);
  const { displayToggle, toggleValue } = dashboardToggle;

  useEffect(() => {
    const checkUserLogin = sessionStorage.getItem("userData");
    const checkUserViewPreference = sessionStorage.getItem("viewPreference")
    // const sessionCookie = cookies.get('session')

    if (checkUserLogin) {
      setIsLoggedIn(true);
      setUserProfile(JSON.parse(checkUserLogin));
    } else {
      setIsLoggedIn(false);
    }

    if(checkUserViewPreference) {
      setDashboardToggle(JSON.parse(checkUserViewPreference))
    }
  }, [isLoggedIn, setDashboardToggle, setIsLoggedIn, setUserProfile]);

  //const [isAdmin] = useContext(AppContext)

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <BrowserRouter>
      {displayToggle && <DashSelector />}
      {displayToggle && <div className="blur-effect" />}
      {toggleValue === "User Dashboard" ? (
        <div className="bg-primary w-full overflow-auto relative">
          <div className="flex flex-start w-full top-0 lg:fixed z-50">
            <div className="w-full">
              <NavBar />
            </div>
          </div>
          <main className="lg:pt-16 w-full">
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About-Us" element={<AboutUs />} />
                <Route path="/Find-Jobs" element={<FindJobs />} />
                <Route path="/Contact-Us" element={<ContactUs />} />
                <Route path="/Resources" element={<Resources />} />
                <Route path="/all-resources" element={<AllResources />} />
                <Route path="/Sign-Up" element={<SignUp />} />
                <Route path="/User-Login" element={<UserLogin />} />
                {/*<Route path="/Job-Description" element={<JobDescription />} />*/}
              </Routes>
            </Wrapper>
          </main>

          <div className="">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="h-full bg-[#f9f9f9] w-full">
          <div className="flex flex-start h-full w-full top-0  z-50">
            <div className="w-full h-full">
              <AdminNavBar />
            </div>
          </div>

          <div className="flex justify-between h-auto">
            <div className="hidden sm:block rounded-md shadow-md w-[380px] h-full ">
              <AdminSideBar />
            </div>

            <div className="bg-[#f9f9f9] w-full grow h-auto pb-16 lg:pr-10 p-5">
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/Home" element={<AdminDashboard />} />
                <Route path="/Admin-Home" element={<AdminDashboard />} />
                <Route path="/Job-Management" element={<JobManagement />} />
                <Route
                  path="/Resources-Management"
                  element={<ResourceManagement />}
                />
                <Route path="/Event-Management" element={<EventManagement />} />
                
              </Routes>
            </div>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
