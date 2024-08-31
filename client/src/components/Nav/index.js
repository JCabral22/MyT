import { ReactComponent as MyTourniLogo } from "./images/myTourniLogoFull.svg";
import { Router, Route, NavLink, Link, Navigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import "./nav.css";
import Mobilenav from "./Mobilenav";
import Cookies from "js-cookie";
import { FaDiscord } from "react-icons/fa";

const Nav = () => {
  const cookie = Cookies.get("authToken");
  const [user, setUser] = React.useState([]);
  const [useravatar, setUserAvatar] = React.useState();
  const getData = async () => {
    await axios
      .get("https://discord.com/api/users/@me", {
        headers: {
          authorization: `Bearer ${cookie}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        Cookies.set("userID", res.data.id);
      });
  };
  React.useEffect(() => {
    getData();
  }, []);

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    if (isOpen) {
      html.classList.add("overflow-y-hidden");
    } else {
      html.classList.remove("overflow-y-hidden");
    }
    return () => {
      html.classList.remove("overflow-y-hidden");
    };
  }, [isOpen]);

  return (
    <React.Fragment>
      <header className=" bg-transparent absolute lg:relative lg:flex  z-50 overflow-x-hidden">
        <div className="max-w-[99vw]  ">
          <div className="navBar  flex w-[100vw]  lg:h-auto lg:w-[100vw]">
            <div className="burgerMenu">
              <button
                className="menuButtonClosed lg:hidden p-2 ml-5 mt-2 z-[-1] text-white  border-2 rounded-full"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
            <div className="navLinks hidden font-BigShoulders justify-start  lg:text-lg xl:text-4xl  font-medium lg:flex ">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/tournaments">TOURNAMENTS</NavLink>
              <a href="https://discord.gg/mytourni">JOIN SERVER</a>
              <NavLink to="/contact">CONTACT</NavLink>
            </div>
            <div className="login navLinks flex  ml-auto  mr-[3vw] font-BigShoulders  lg:text-md xl:text-4xl font-medium lg:flex">
              <a
                target="_blank"
                href="https://discord.com/api/oauth2/authorize?client_id=1000892629397024878&redirect_uri=https%3A%2F%2Fmytourni.com%2Fauth&response_type=code&scope=identify"
              >
                {user.id ? (
                  user.username
                ) : (
                  <button
                    type="button"
                    className="text-white px-1 py-1 text-lg md:text-2xl  bg-[#5865F2]  focus:ring-blue-300 font-medium rounded-md lg:px-2 text-center"
                  >
                    <div className="flex ">
                      <FaDiscord className="text-center hidden md:flex mt-1 mr-2" />
                      Login With Discord
                    </div>
                  </button>
                )}
              </a>
              {user.id ? (
                <img
                  src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`}
                  className="rounded-full h-[5vh] ml-5 lg:mt-3"
                ></img>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </header>
      <Mobilenav
        className={`${isOpen ? "h-[80vh]" : "h-0"}`}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </React.Fragment>
  );
};

export default Nav;
