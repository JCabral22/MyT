import { Router, Route, NavLink } from "react-router-dom";
import React from "react";

import "./mobilenav.css";
import {
  FaDiscord,
  FaPlaystation,
  FaXbox,
  FaMobile,
  FaLaptop,
} from "react-icons/fa";
const Mobilenav = (props) => {
  return (
    <div
      className={`flex lg:hidden absolute h-screen w-screen flex-col text-center justify-evenly bg-red-600 text-white
           duration-1000 ${
             props.isOpen
               ? "mobileMenuOpen z-[1000] h-[100vh]"
               : "mobileMenuClosed h-0 invisible   opacity-0 "
           }`}
      onClick={() => props.setIsOpen(!props.isOpen)}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tournaments">Tournaments</NavLink>
      <a href="https://discord.gg/mytourni">JOIN SERVER</a>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};

export default Mobilenav;
