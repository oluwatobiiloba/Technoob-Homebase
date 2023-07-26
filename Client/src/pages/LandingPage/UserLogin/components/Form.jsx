import { useState, useContext } from "react";
import Cookies from "universal-cookie";
import img from "../img/quino-al-xhGMQ_nYWqU-unsplash 1.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../AppContext/AppContext";
import serverApi from "../../../../utility/server";

const cookies = new Cookies();

const Form = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    UserName: null,
    Password: null,
    error: null,
  });
  const {setIsLoggedIn, setUserProfile, setDashboardToggle} =
      useContext(AppContext);

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };
  const login = async () => {
    let raw = JSON.stringify({
      password: user.Password,
      username: user.UserName,
    });

    try {
      const response = await serverApi.post(
          "/authenticate/login",
          raw
      )

      console.log(response)

      if (response.status === 200) {
        navigate("/Home");
        const userInfo = {
          ...response.data.data,
        };
        setUserProfile(userInfo);
        setIsLoggedIn(true);
        cookies.set("user", JSON.stringify(userInfo), {
          path: "/user",
          maxAge: 3600,
        });
        //localStorage.setItem("user", JSON.stringify(userInfo));
        if (userInfo.user.role === "admin") {
          setDashboardToggle({
            displayToggle: true,
            toggleValue: "User Dashboard",
          });
        }
      }

    } catch (error) {
      setUser({error: error.message, UserName: "", Password: ""});
    }
  }
    const submit = async (e) => {
      e.preventDefault();
      await login();
    };

    const handleClick = () => {
      navigate("/Sign-Up");
    };

    return (
        <section className=" md:flex flex-auto w-screen block md:px-20 md:py-5 nun mb-20 justify-center">
          <img src={img} alt="" className=" lg:block hidden w-[50%]"/>
          <form
              action="get"
              className="block bgcontact lg:p-10 p-5 rounded lg:w-[50%] w-full"
          >
            <label
                htmlFor="username"
                className=" text-2xl font-semibold py-10 px-4 "
            >
              Username
            </label>
            <br/>
            <input
                type="username"
                name="UserName"
                value={user.UserName}
                placeholder="Username"
                className=" w-[100%] rounded-xl m-1 border px-5 py-4 my-10 outline-0 ring-1 bg-white"
                onChange={handleChange}
            />
            <label
                htmlFor="password"
                className=" text-2xl font-semibold py-10 px-4 "
            >
              Password
            </label>
            <br/>
            <input
                type="password"
                name="Password"
                placeholder="Password"
                value={user.Password}
                className=" w-[100%] rounded-xl m-1 border px-5 py-4 my-10 outline-0 ring-1 bg-white"
                autoComplete="current-password"
                onChange={handleChange}
            />
            {user.error && (
                <div className="text-red-500 mb-2">
                  <p>{user.error}</p>
                </div>
            )}
            <div className=" lg:flex">
              <button
                  className=" bg-tblue text-twhite py-[14px] lg:w-[50%] w-[100%] rounded"
                  onClick={submit}
              >
                Login
              </button>
              {" "}
              <p className="py-5 lg:w-[10%] w-[100%] text-center">Or</p>
              <button
                  onClick={handleClick}
                  className="py-[14px] lg:w-[40%] w-[100%] bg-twhitee ring-1 rounded"
              >
                Sign Up?
              </button>
            </div>
            <p className=" cursor-pointer px-2 py-8 italic">
              <span className=" text-red-500">Forget </span>
              <span>Password?</span>
            </p>
          </form>
        </section>
    );
  }
;

export default Form;
