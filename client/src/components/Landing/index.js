import { ReactComponent as MyTourniLogo } from "./images/myTourniLogoNoLetters.svg";
import React from "react";

import "./landing.css";
import { ReactComponent as Trophy } from "./images/weeklyTrophy.svg";
import Soldier from "./images/soldier.png";
import Ezreal from "./images/Ezreal_red.png";
import CommunityImage from "./images/community_image.jpg";
import Mbappe from "./images/mbappe_cutout.png";
import Landingbg from "./images/bg_1.png";
import Widget from "../Widget";
import AXE from "./images/AXE-logo.png";
import Unilever from "./images/Unilever-Logo.png";
import Holidaysnacks from "./images/holiday_snacks_logo.png";
import Logo3 from "./images/sponsorlogo3.png";
import Arrow from "./images/arrow.png";
import Nav from "../Nav";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.css";

import {
  FaDiscord,
  FaPlaystation,
  FaXbox,
  FaMobile,
  FaLaptop,
} from "react-icons/fa";
import { color } from "@mui/system";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="hero bg-[#13131d]">
      <Nav></Nav>
      <div className="heroContainer lg:h-screen overflow-x-hidden flex-col  bg-cover bg-[url('/src/components/Landing/images/bg_1.png')] flex relative">
        <div className="asbolute hidden lg:flex top-[50%] left-[50%] max-w-3xl  mx-auto xl:ml-0 ">
          <span className=" font-BigShoulders lg:absolute text-left lg:mt-[20vh]  md:mt-[30vh] md:z-[90]  lg:pt-[15vh] lg:mx-auto  text-4xl ml-[10vw] text-extrabold xl:ml-80 xl:mt-[4vh] text-[#d85058] xl:text-7xl pointer-events-none">
            WELCOME TO_
          </span>
          <span className="mytourniText lg:absolute  lg:mt-[40vh] mt-[20vh] xl:mt-[25vh] md:mt-[50vh] md:z-[100] lg:z-[0] flex  lg:mx-auto md:ml-20 lg:text-[12rem] md:text-9xl text-7xl -ml-[10vw] xl:ml-80   z-[0]   font-BigShoulders font-extrabold tracking-wider text-white xl:text-[15rem] xl:pointer-events-none">
            MYTOURNI
          </span>
          <span className="mytourniTextOutline hidden lg:flex lg:mt-[40vh]  xl:mt-[25vh] md:hidden md:z-[100]  lg:z-[100]    lg:mx-auto  md:ml-20 md:text-9xl lg:text-[12rem] text-7xl  -ml-[10vw] lg:absolute xl:ml-80  z-[100]   font-BigShoulders font-extrabold tracking-wider text-white xl:text-[15rem] xl:pointer-events-none">
            MYTOURNI
          </span>
          <NavLink
            to="/tournaments"
            className="playButton   px-4  z-[200] md:mt-[70vh] md:w-[40vw] sm:border-white lg:border-[#d85058] lg:mt-[65vh] xl:mt-[50vh] lg:mr-[50vw] xl:mr-auto  lg:mx-auto mx-auto py-6 pointer-events-auto w-full flex xl:ml-80 lg:w-1/2 justify-center  text-xl font-medium text-[#f4f4f4] bg-transparent border-[6px] border-white hover:scale-[1.05]  duration-300 "
          >
            <p className="text-left flex">PLAY NOW</p>
          </NavLink>
        </div>
        <div className="textContainerMobile lg:hidden absolute lg:h-screen  z-10 bottom-10 left-0 right-0">
          <div className="welcomeTo text-center mr-40  text-[#d85058] font-BigShoulders">
            WELCOME TO_
          </div>
          <div className="myTourniTextMobile lg:absolute lg:bottom-0 lg:right-[10%] lg:hidden  font-BigShoulders lg:text-9xl text-[4rem] font-bold text-center">
            MYTOURNI
          </div>
          <div className="myTourniOutline lg:absolute lg:flex lg:bottom- lg:right-[10%]  font-BigShoulders lg:text-9xl text-[4rem] font-bold text-center hidden">
            MYTOURNI
          </div>
          <div className="btnContainer mx-auto">
            <NavLink
              to="/tournaments"
              className="playButton p-3 pointer-events-auto w-[50%] md:w-[33%] flex mx-auto  justify-center  font-medium text-[#f4f4f4] bg-transparent border-[4px] border-white hover:scale-[1.05]  duration-300 "
            >
              <p className=" text-center text-sm flex">PLAY NOW</p>
            </NavLink>
          </div>
        </div>
        <div className="rect w-1/2 mx-auto absolute xl:left-[55%] lg:left-[50%] lg:z-0 left-[35%] opacity-75 -skew-x-[30deg]   h-full bg-[#d85058]"></div>
        <img
          src={Soldier}
          alt=""
          className=" opacity-80 w-2/3 lg:absolute lg:left-[35%] xl:left-[45%] xl:bottom-0 xl:w-auto xl:-h-auto  lg:w-auto lg:max-h-screen lg:mr-12   mx-auto"
        />
      </div>
      <div className="whoContainer max-h-[65vh] bg-[#13131d]">
        <div className="bg-opacity-50 h-auto bg-[#101019] w-5/6 lg:w-1/3 mx-auto mt-4 mb-12 font-BigShoulders text-3xl  font-extrabold text-center text-[#d85058]">
          Who we are
          <div className=" text-lg font-normal text-white ">
            We are a gaming organization with an emphasis on community. We have
            a very diverse playerbase, with skill levels ranging from casual to
            competitive playstyles. Come enjoy weekly tournaments, inhouses,
            gaming disccusions and much more! Post and react to gaming clips as
            we highlight the top 5 submissions of each week!
            <FaDiscord className=" flex w-24 h-12 mx-auto mb-6 text-white"></FaDiscord>
            <div className="btnContainer mx-auto">
              <a
                href="https://discord.gg/mytourni"
                className="playButton p-3 pointer-events-auto w-[50%]  flex mx-auto  justify-center  font-medium text-[#f4f4f4] bg-transparent border-[4px] border-[#d85058] hover:scale-[1.05]  duration-300 "
              >
                <p className=" text-center text-sm flex">DISCORD</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="tournamentContainer lg:flex  bg-[url('/src/components/Landing/images/bg_2.png')] bg-cover">
        <div className="ezrealContainer overflow-x-hidden overflow-y-hidden lg:w-1/2 lg:flex   ">
          <img
            src={Ezreal}
            alt="ezreal "
            className=" text-center ml-4 lg:ml-0 "
          />
        </div>
        <div className="hidden lg:flex flex-col mt-40 mx-auto text-center  w-[50vw]">
          <h1 className="text-white flex-col font-BigShoulders font-bold pl-6 text-7xl text-left border-l-4 border-red-700">
            WEEKLY <br></br> TOURNAMENTS
          </h1>
          <p className=" flex-col text-left font-light w-[80%] mt-34 mb-7 text-2xl pl-8">
            {" "}
            Here at MyTourni, we host weekly sponsored e-sports tournaments with
            varying prize pools open to gamers of all skill levels. Compete
            amongst like minded gamers as battle towards victory and a large
            variety of prizes!
          </p>
          <div className="btnContainer flex justify-start mt-4 ">
            <NavLink
              to={"/tournaments"}
              className="playButton p-5  pointer-events-auto   flex ml-12     font-medium text-[#f4f4f4] bg-transparent border-[4px] border-[#d85058] hover:scale-[1.05]  duration-300 "
            >
              <p className=" text-center text-xl flex">REGISTER</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="communityContainer hidden lg:flex bg-slate-900 bg-cover">
        <div className="hidden lg:flex flex-col mt-40 mx-auto text-center  w-[50vw]">
          <h1 className="text-white flex-col font-BigShoulders font-bold pl-6 text-7xl ml-12 text-left border-l-4 border-red-700">
            STRONG <br></br> COMMUNITY
          </h1>
          <p className=" flex-col text-left font-light w-[80%] mt-34 ml-12  mb-7 text-2xl pl-8">
            {" "}
            Here at MyTourni, we host weekly sponsored e-sports tournaments with
            varying prize pools open to gamers of all skill levels. Compete
            amongst like minded gamers as battle towards victory and a large
            variety of prizes!
          </p>
          <div className="btnContainer flex justify-start mt-4 ">
            <a
              href="https://www.instagram.com/mytourni"
              className="playButton p-5  pointer-events-auto   flex ml-20     font-medium text-[#f4f4f4] bg-transparent border-[4px] border-[#d85058] hover:scale-[1.05]  duration-300 "
            >
              <p className=" text-center text-xl flex">SOCIAL MEDIA</p>
            </a>
          </div>
        </div>
        <div className="gamerContainer  overflow-x-hidden overflow-y-hidden mr-16 lg:w-1/2 xl:w-1/3 lg:flex   ">
          <img src={CommunityImage} alt="" className="   " />
        </div>
      </div>

      <div className="rewardContainer hidden lg:flex bg-slate-900 bg-[url('/src/components/Landing/images/bg_3.png')] bg-cover ">
        <div className="gamerContainer  overflow-x-hidden overflow-y-hidden mr-16 lg:w-1/2 xl:w-1/3 lg:flex   ">
          <img src={Mbappe} alt="" className="  " />
        </div>
        <div className="hidden lg:flex flex-col mt-40 mx-auto text-center  w-[50vw]">
          <h1 className="text-white flex-col font-BigShoulders font-bold pl-6 text-7xl  text-left border-l-4 border-red-700">
            REWARDS
          </h1>
          <p className=" flex-col text-left font-light w-[80%] mt-34   mb-7 text-2xl pl-8">
            {" "}
            Compete in sponsored tournaments, challenging the best players in
            the region for a chance to win prizes such as digital gift cards,
            cash, hampers from our partners and much more!
          </p>
          <div className="btnContainer flex justify-start mt-4 ">
            <a
              href="https://discord.gg/mytourni"
              className="playButton p-5  pointer-events-auto   flex ml-12     font-medium text-[#f4f4f4] bg-transparent border-[4px] border-[#d85058] hover:scale-[1.05]  duration-300 "
            >
              <p className=" text-center text-xl flex">LEARN MORE</p>
            </a>
          </div>
        </div>
      </div>
      <div className="carouselContainer h-[50vh] lg:hidden">
        {" "}
        <Carousel
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = {
              height: "15px",
              width: "15px",
              marginBottom: "-15vh",
              borderRadius: "50%",
              backgroundColor: "#f4f4f4",
              margin: "25vh 0 0vh 0",
              cursor: "pointer",
              pointerEvents: "none",
              display: "inline-block",
              marginLeft: "5px",
            };
            const style = isSelected
              ? { ...defStyle, backgroundColor: "#d85058" }
              : { ...defStyle };
            return (
              <span
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              ></span>
            );
          }}
          swipeable={true}
          emulateTouch={true}
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          interval={9000}
          showArrows={false}
          useKeyboardArrows={true}
          infiniteLoop={true}
          className="w-[99vw] h-[50vh] text-opacity-100 z-10"
        >
          <div className=" font-BigShoulders h-[50vh] text-3xl text-[#d85058]  font-bold">
            Weekly Tournaments
            <div className="mt-2 text-base text-white">
              Here at MyTourni, we host weekly sponsored e-sports tournaments
              with varying prize pools open to gamers of all skill levels.
              Compete amongst like minded gamers as battle towards victory and a
              large variety of prizes!
            </div>
            <div className="btnContainer mt-4 mx-auto">
              <a
                href="https://mytourni.com/tournaments"
                className="playButton p-3 pointer-events-auto w-[50%]  flex mx-auto  justify-center  font-medium text-[#f4f4f4] bg-transparent border-[4px] border-[#d85058] hover:scale-[1.05]  duration-300 "
              >
                <p className=" text-center text-sm flex">REGISTER</p>
              </a>
            </div>
          </div>
          <div className="font-BigShoulders h-[50vh] text-3xl text-[#d85058]  font-bold">
            Strong Community
            <div className="mt-2 text-base text-white">
              We are an active community where you can participate in weekly
              custom in-house lobbies, gaming discussions, watch parties and
              interactive game nights with a community of similar interests.
            </div>
            <div className="btnContainer mt-4 mx-auto">
              <a
                href="https://www.instagram.com/mytourni"
                className="playButton p-3 pointer-events-auto w-[50%]  flex mx-auto  justify-center  font-medium text-[#f4f4f4] bg-transparent border-[4px] border-[#d85058] hover:scale-[1.05]  duration-300 "
              >
                <p className=" text-center text-sm flex">SOCIAL MEDIA</p>
              </a>
            </div>
          </div>
          <div className="font-BigShoulders h-[50vh] text-3xl text-[#d85058]  font-bold">
            Rewards
            <div className="mt-2 text-base text-white">
              Compete in sponsored tournaments, challenging the best players in
              the region for a chance to win prizes such as digital gift cards,
              cash, hampers from our partners and much more!
            </div>
            <div className="btnContainer mt-4 mx-auto">
              <a
                href="https://discord.gg/mytourni"
                className="playButton p-3 pointer-events-auto w-[50%]  flex mx-auto  justify-center  font-medium text-[#f4f4f4] bg-transparent border-[4px] border-[#d85058] hover:scale-[1.05]  duration-300 "
              >
                <p className=" text-center text-sm flex">LEARN MORE</p>
              </a>
            </div>
          </div>
        </Carousel>
      </div>
      <h1 className="text-center text-3xl lg:text-9xl   flex-row font-BigShoulders   text-[#f4f4f4]">
        POWERED BY
      </h1>
      <div className="sponsors flex  justify-center  mt-4 lg:mt-0 bg-[#13131d]">
        <div className="sponsorsLogos justify-center  flex flex-row">
          <img src={AXE} alt="" className="  w-[24vw] " />
          <img src={Unilever} alt="" className=" w-[24vw] " />
          <img src={Holidaysnacks} alt="" className=" w-[24vw]" />
          <img src={Logo3} alt="" className=" w-[24vw]" />
        </div>
      </div>
    </div>
    //   <div className=" bg-gradient-to-r from-slate-900 via-black to-[#d85058] ">
    //     <div className="heroSection relative lg:h-[100vh]  overflow-hidden bg-[url('/src/components/Landing/images/bg_1.png')] bg-cover  lg:flex">
    //       <div className="w-full lg:p-12 text-center xl:w-1/2   xl:my-auto xl:text-left">
    //         <div className="asbolute top-[50%] left-[50%] max-w-3xl flex mx-auto xl:ml-0 ">
    //           <span className=" font-BigShoulders lg:absolute text-left lg:mt-[20vh] md:mt-[30vh] md:z-[90]  lg:pt-[15vh] lg:mx-auto  text-4xl ml-[10vw] text-extrabold xl:ml-80 xl:-mt-[1vh] text-[#d85058] xl:text-7xl pointer-events-none">
    //             WELCOME TO_
    //           </span>
    //           <span className="mytourniText lg:absolute  lg:mt-[40vh] mt-[20vh] xl:mt-[20vh] md:mt-[50vh] md:z-[100] lg:z-[0] flex  lg:mx-auto md:ml-20 lg:text-[12rem] md:text-9xl text-7xl -ml-[10vw] xl:ml-80   z-[0]   font-BigShoulders font-extrabold tracking-wider text-white xl:text-[15rem] xl:pointer-events-none">
    //             MYTOURNI
    //           </span>
    //           <span className="mytourniTextOutline hidden lg:flex lg:mt-[40vh]  xl:mt-[20vh] md:hidden md:z-[100]  lg:z-[100]    lg:mx-auto  md:ml-20 md:text-9xl lg:text-[12rem] text-7xl  -ml-[10vw] lg:absolute xl:ml-80  z-[100]   font-BigShoulders font-extrabold tracking-wider text-white xl:text-[15rem] xl:pointer-events-none">
    //             MYTOURNI
    //           </span>
    //           <a
    //             href="https://discord.gg/mytourni"
    //             className="playButton   px-1 z-[200] md:mt-[70vh] md:w-[40vw] sm:border-white lg:border-[#d85058] lg:mt-[65vh] xl:mt-[50vh] lg:mr-[50vw] xl:mr-auto  lg:mx-auto mx-auto py-6 pointer-events-auto w-full flex xl:ml-80 lg:w-1/2 justify-center  text-xl font-medium text-[#f4f4f4] bg-transparent border-[6px] border-white hover:scale-[1.05]  duration-300 "
    //           >
    //             <p className="text-left flex">PLAY NOW</p>
    //           </a>
    //         </div>
    //       </div>
    //       <div className="logoContainer flex bottom-0   top-1 z-[0] xl:right-[20%] lg:left-[50%]      xl:h-auto">
    //         {" "}
    //         <img
    //           src={Soldier}
    //           alt=""
    //           className="mx-auto  bottom-0 sm:mt-auto xs:max-h-[10%] md:max-h-[80%] md:ml-[20vw] max-h-[100%] sm:flex sm:-h[50%] sm:mr-[40vw] max-h-auto    lg:mt-auto w-full  lg:flex lg:h-[80%] lg:-ml-[5vw] xl:mr-0  lg:w-[100%]    z-[50] "
    //         />
    //       </div>
    //     </div>
    //     <div className="whoSection mx-auto w-[90%] bg-black bg-opacity-25  ">
    //       <span className="flex flex-row w-full justify-center  text-6xl text-[#d85058] pt-8 text-center font-BigShoulders">
    //         WHO WE ARE
    //       </span>
    //       <span className="flex  w-[60vw] mx-auto text-center text-2xl text-[#F4F4F4]  mb-8 font-BigShoulders">
    //         We are a gaming organization with an emphasis on community. We have a
    //         very diverse playerbase, with skill levels ranging from casual to
    //         competitive playstyles. Come enjoy weekly tournaments, inhouses,
    //         gaming disccusions and much more! Post and react to gaming clips as we
    //         highlight the top 5 submissions of each week!
    //       </span>
    //       <span>
    //         <a
    //           href="https://discord.gg/mytourni"
    //           className="playButton text-center  mx-auto  w-5/6 lg:w-1/4  px-1 py-3 pointer-events-auto flex justify-center  text-xl font-medium text-[#f4f4f4] bg-transparent border-[6px] border-[#d85058] hover:scale-[1.05]  duration-300 z-20 "
    //         >
    //           <span className="text-center my-auto flex font-BigShoulders text-3xl">
    //             <FaDiscord className=" flex w-24 h-24 mx-auto text-[#7289DA]"></FaDiscord>
    //             JOIN OUR<br></br> DISCORD
    //           </span>
    //         </a>
    //       </span>
    //     </div>
    //     <div className="arrow text-[#d85058] mx-auto text-center pt-24 pb-24">
    //       <img src={Arrow} alt="arrow" className="mx-auto hidden xl:flex" />
    //     </div>
    //     <div className="weeklyContainer relative overflow-hidden mx-auto flex justify-evenly  h-[95vh] xl:max-h-fit bg-[url('/src/components/Landing/images/bg_2.png')] bg-cover">
    //       <img
    //         src={Ezreal}
    //         alt=""
    //         className=" hidden lg:flex  left-0 lg:max-h-[70vh] lg:max-w-[70vw]   absolute bottom-0 flex-end max-w-[100vw] max-h-[100vh] xl:w-5/6 xl:h-full xl:max-h-[100vh] xl:max-w-[100vh] "
    //       />

    //       <h1 className=" mt-5  lg:ml-[50vw] xl:ml-[103vw] xl:-mr-[-7vw] xl:max-w-[30vw] w-[30vw] h-[15vh] border-l-4 px-4 border-[#d85058] font-BigShoulders  font-extralight      text-7xl overflow-x-visible  text-[#f4f4f4]">
    //         WEEKLY
    //         <br />
    //         TOURNAMENTS
    //         <br />
    //       </h1>
    //       <p className="text-3xl max-w-[100vw] lg:min-w-[30vw]   font-BigShoulders  font-extralight  mt-[25vh] text-left -ml-[25vw] lg:-ml-[25vw] xl:mr-[50rem]   mx-auto  mb-auto   overflow-x-visible  text-[#f4f4f4]">
    //         Here at MyTourni, we host weekly sponsored e-sports tournaments with
    //         varying prize pools open to gamers of all skill levels. Compete
    //         amongst like minded gamers as battle towards victory and a large
    //         variety of prizes!
    //         <a
    //           href=""
    //           className="playButton    z-20   pointer-events-auto  w-[15%] px-1 mt-3 mr-4 mb-[20vh]  py-6 pointer-events-auto flex w-1/2 justify-center  text-xl font-medium text-[#f4f4f4] bg-transparent border-[6px] border-[#d85058] hover:scale-[1.05]  duration-300 z-20 "
    //         >
    //           <p className="text-left flex">LEARN MORE</p>
    //         </a>
    //       </p>
    //     </div>
    //     <div className="communityContainer max-h-[100vh]  xl:bg-gradient-to-br bg-[url('/src/components/Landing/images/community_image.jpg')] bg-cover xl:from-[#13131d] xl:via-black xl:to-[#d85058] flex  xl:justify-evenly flex-row">
    //       <div className="textContainer">
    //         <h1 className="flex text-left max-w-[30vw] mt-4  border-l-4 ml-[15vw] px-4 border-[#d85058] font-BigShoulders  font-extralight   mx-auto xl:mt-64 xl:ml-32 xl:mb-8  text-7xl text-[#f4f4f4]">
    //           STRONG
    //           <br />
    //           COMMUNITY
    //           <br />
    //         </h1>
    //         <p className="text-3xl  ml-[16vw] mr-4    max-w-[90vw] xl:max-w-[30vw] font-BigShoulders pb-[30vh]  text-right  font-extralight   xl:mt-auto xl:mb-[30rem]  xl:ml-32      overflow-x-visible  text-[#f4f4f4]">
    //           We are an active community where you can participate in weekly
    //           custom in-house lobbies, gaming discussions, watch parties and
    //           interactive game nights with a community of similar interests.
    //         </p>
    //         <a
    //           href=""
    //           className="playButton   mx-auto   w-[15%] px-1 -mt-[22vh] mr-4 mb-[20vh]  py-6 pointer-events-auto flex w-1/2 justify-center  text-xl font-medium text-[#f4f4f4] bg-transparent border-[6px] border-[#d85058] hover:scale-[1.05]  duration-300 z-20 "
    //         >
    //           <p className="text-left flex">LEARN MORE</p>
    //         </a>
    //       </div>
    //       <img
    //         src={CommunityImage}
    //         alt=""
    //         className="xl:w-1/3 hidden xl:flex lg:flex  w-[50vw] float-right"
    //       />
    //     </div>
    //     <div className="rewardsContainer h-[100vh] relative max-w-[100vw] flex-row justify-start bg-[url('/src/components/Landing/images/bg_3.png')] bg-cover ">
    //       <h1 className="flex text-left flex-col mb-6  border-l-4  xl:ml-[60vw] px-4  border-[#d85058] font-BigShoulders  font-extralight    mt-auto xl:mb-[5vh]  text-7xl  xl:text-7xl overflow-x-visible  text-[#f4f4f4]">
    //         REWARDS
    //       </h1>

    //       <p className="text-3xl  flex mb-32   xl:max-w-[30vw]  xl:ml-[60vw]  mx-auto font-BigShoulders  font-extralight   xl:mt-auto xl:mb-[5vh]    overflow-x-visible  text-[#f4f4f4]">
    // Compete in sponsored tournaments, challenging the best players in the
    // region for a chance to win prizes such as digital gift cards, cash,
    // hampers from our partners and much more!
    //       </p>

    //       <a
    //         href="https://discord.gg/mytourni"
    //         className="playButton   mx-auto  px-1 xl:ml-[60vw]  py-6 xl:max-w-xl pointer-events-auto flex w-1/2 justify-center  text-xl font-medium text-[#f4f4f4] bg-transparent border-[6px] border-[#d85058] hover:scale-[1.05]  duration-300 z-20 "
    //       >
    //         <p className="text-left">LEARN MORE</p>
    //       </a>
    //       <img
    //         src={Mbappe}
    //         alt=""
    //         className=" hidden lg:flex    absolute bottom-0 flex-end max-w-[100vw] max-h-[50vh] xl:w-2/6 xl:h-full xl:max-h-[80vh] xl:max-w-[80vh]"
    //       />
    //   </div>
    //   <div className="sponsors flex justify-center bg-[#13131d]">
    //     <h1 className="text-center max-w-[100vw] flex-row font-BigShoulders  md:text-5xl  xl:text-7xl text-4xl font-extrabold p-16 text-[#f4f4f4]">
    //       POWERED BY
    //       <div className="sponsorsLogos max-w-[80vw] justify-center mt-10 flex flex-row">
    //         <img src={AXE} alt="" className="  w-[24vw] " />
    //         <img src={Unilever} alt="" className=" w-[24vw] " />
    //         <img src={Holidaysnacks} alt="" className=" w-[24vw]" />
    //         <img src={Logo3} alt="" className=" w-[24vw]" />
    //       </div>
    //     </h1>
    //   </div>
    // </div>
  );
};

export default Landing;
