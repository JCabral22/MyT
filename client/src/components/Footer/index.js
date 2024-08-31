import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { ReactComponent as AhsokaFace } from "./images/ahsokatanoFace.svg";
import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-[#101019] font-light font-BigShoulders pb-8 pt-20   flex text-[#f4f4f4]">
      <div className="socials space-y-5 lg:my-auto xl:w-1/2  lg:ml-32  text-lg max-w-1/2  flex flex-col    align-bottom ">
        <a
          className=" flex hover:scale-125 duration-500"
          href="https://discord.gg/mytourni"
        >
          <FaDiscord className="discord my-auto lg:text-7xl text-2xl " />
          <span className=" flex my-auto ml-4  lg:text-7xl text-2xl">
            DISCORD
          </span>
        </a>

        <a
          className=" flex hover:scale-125 duration-500  "
          href="https://www.youtube.com/channel/UC-Wxvc_Jy44L8Bo2P-LPK5A"
        >
          <FaYoutube className="youtube my-auto lg:text-7xl  text-2xl  " />
          <span className=" flex my-auto ml-4 lg:text-7xl text-2xl">
            YOUTUBE
          </span>
        </a>
        <a
          className=" flex hover:scale-125 duration-500 "
          href="https://www.instagram.com/mytourni/"
        >
          <FaInstagram className="instagram my-auto lg:text-7xl text-2xl " />
          <span className=" flex my-auto ml-4 lg:text-7xl text-2xl">
            INSTAGRAM
          </span>
        </a>
      </div>
      <div className="footertextContainer  ml-4 lg:ml-32 xl:ml-96   border-l-2 border-[#d85058]">
        <div className="footerText text-sm text-center lg:mt-12  xl:w-1/2 lg:my-auto ml-6 mr-6 md:text-xl lg:text-3xl text-[#bdbdbd]">
          Photo assets were used from Unsplash.com (Fredrick Tendong, Stem List)
          Images used belong to their respective rights holders: Electronic Arts
          Inc., Riot Games Inc., and Activision Publishing Inc., and are used
          under their respective fair use policies
        </div>
      </div>
    </div>
  );
};

export default Footer;
