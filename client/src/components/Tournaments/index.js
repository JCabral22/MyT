import Widget from "../Widget";
import "./tournaments.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.css";
import RocketLeague from "./images/RocketLeagueBG.png";
import ClashRoyale from "./images/clash-royale-logo.jpg";
import COD from "./images/CODWarzoneBG2.jpg";
import Brawlhalla from "./images/BrawlhallaBG2.png";
import League from "./images/LeagueOfLegendsBG2.png";
import CODMW2 from "./images/CODMW2BG.png";
import Multiversus from "./images/RumbleverseBG.png";
import FIFA from "./images/FIFABG2.jpg";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import Nav from "../Nav";
import {
  FaDiscord,
  FaPlaystation,
  FaXbox,
  FaMobile,
  FaLaptop,
} from "react-icons/fa";
import Cookies from "js-cookie";
import Countdown from "react-countdown";
const Completionist = () => (
  <div className="countdownContainer flex space-x-3 justify-center">
    <div className=" p-4 w-[20vh] max-w-[4rem] bg-[#d85058]  text-white text-4xl font-BigShoulders h-[20vh] max-h-[4rem] ">
      <div className="font-extrabold">G</div>
      <div className="text-2xl mt-2">THE</div>
    </div>
    <div className=" p-4 w-[20vh] max-w-[4rem] bg-[#d85058]  text-white text-4xl  font-BigShoulders h-[20vh] max-h-[4rem] ">
      <div className="font-extrabold">L</div>
      <div className="text-2xl mt-2 mr-2">TOURNI</div>
    </div>{" "}
    <div className=" p-4 w-[20vh] max-w-[4rem] text-center  bg-[#d85058] text-white text-4xl font-BigShoulders h-[20vh] max-h-[4rem] ">
      <div className="font-extrabold">H</div>
      <div className="text-2xl mt-2 -ml-2">HAS</div>
    </div>{" "}
    <div className=" p-4 w-[20vh] max-w-[4rem] bg-[#d85058]   text-white text-4xl font-BigShoulders h-[20vh] max-h-[4rem] ">
      <div className="font-extrabold">F</div>
      <div className="text-2xl mt-2 -ml-3">STARTED</div>
    </div>
  </div>
);
const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  // Render a countdown

  if (completed) {
    return <Completionist />;
  } else
    return (
      <div className="countdownContainer flex space-x-3 justify-center">
        <div className=" p-4 w-[20vh] max-w-[4rem] bg-[#d85058] text-white text-4xl font-BigShoulders h-[20vh] max-h-[4rem] ">
          {days ? <div className="">{days}</div> : <div className="">0</div>}
          <div className="text-2xl mt-2">DAYS</div>
        </div>
        <div className=" p-4 w-[20vh] max-w-[4rem] bg-[#d85058] text-white text-4xl  font-BigShoulders h-[20vh] max-h-[4rem] ">
          {hours ? <div className="">{hours}</div> : <div className="">0</div>}
          <div className="text-2xl mt-2 mr-2">HOURS</div>
        </div>{" "}
        <div className=" p-4 w-[20vh] max-w-[4rem] text-center bg-[#d85058] text-white text-4xl font-BigShoulders h-[20vh] max-h-[4rem] ">
          {minutes ? (
            <div className="">{minutes}</div>
          ) : (
            <div className="">0</div>
          )}
          <div className="text-2xl mt-2 -ml-2">MINUTES</div>
        </div>{" "}
        <div className=" p-4 w-[20vh] max-w-[4rem] bg-[#d85058] text-white text-4xl font-BigShoulders h-[20vh] max-h-[4rem] ">
          {seconds ? (
            <div className="">{seconds}</div>
          ) : (
            <div className="">0</div>
          )}
          <div className="text-2xl mt-2 -ml-3">SECONDS</div>
        </div>
      </div>
    );
};

const style = {
  flexWrap: "wrap",
  justifyContent: "center",
  flexDirection: "column",
  position: "absolute",
  display: "flex",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85vw",
  bgcolor: "#1e1e1e",
  color: "white",
  borderRadius: "0.5rem",
  boxShadow: 24,

};

const Tournaments = () => {
  const [time, setTime] = React.useState([]);
  const [openError, setOpenError] = React.useState(false);
  const [openWarz, setOpenWarz] = React.useState(false);
  const [openFull, setOpenFull] = React.useState(false);
  const [openRocket, setOpenRocket] = React.useState(false);
  const [openLeague, setOpenLeague] = React.useState(false);
  const [openClash, setOpenClash] = React.useState(false);
  const [openFIFA, setOpenFIFA] = React.useState(false);
  const [openBrawl, setOpenBrawl] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openMW2, setOpenMW2] = React.useState(false);
  const [openMultiverse, setOpenMultiverse] = React.useState(false);
  const [openFortnite, setOpenFortnite] = React.useState(false);
  const handleOpenWarz = () =>
    Cookies.get("userID")
      ? setOpenWarz(true)
      : window.location.replace(
          "http://discord.com/api/oauth2/authorize?client_id=1000892629397024878&redirect_uri=https%3A%2F%2Fmytourni.com%2Fauth&response_type=code&scope=identify"
        );
  const handleOpenRocket = () =>
    Cookies.get("userID")
      ? setOpenRocket(true)
      : window.location.replace(
          "http://discord.com/api/oauth2/authorize?client_id=1000892629397024878&redirect_uri=https%3A%2F%2Fmytourni.com%2Fauth&response_type=code&scope=identify"
        );
  const handleOpenLeague = () =>
    Cookies.get("userID")
      ? setOpenLeague(true)
      : window.location.replace(
          "http://discord.com/api/oauth2/authorize?client_id=1000892629397024878&redirect_uri=https%3A%2F%2Fmytourni.com%2Fauth&response_type=code&scope=identify"
        );
  const handleOpenClash = () =>
    Cookies.get("userID")
      ? setOpenClash(true)
      : window.location.replace(
          "http://discord.com/api/oauth2/authorize?client_id=1000892629397024878&redirect_uri=https%3A%2F%2Fmytourni.com%2Fauth&response_type=code&scope=identify"
        );
  const handleOpenFIFA = () =>
    Cookies.get("userID")
      ? setOpenFIFA(true)
      : window.location.replace(
          "http://discord.com/api/oauth2/authorize?client_id=1000892629397024878&redirect_uri=https%3A%2F%2Fmytourni.com%2Fauth&response_type=code&scope=identify"
        );
  const handleOpenBrawl = () =>
    Cookies.get("userID")
      ? setOpenBrawl(true)
      : window.location.replace(
          "http://discord.com/api/oauth2/authorize?client_id=1000892629397024878&redirect_uri=https%3A%2F%2Fmytourni.com%2Fauth&response_type=code&scope=identify"
        );
  const handleopenMW2 = () =>
    Cookies.get("userID")
      ? setOpenMW2(true)
      : window.location.replace(
          "http://discord.com/api/oauth2/authorize?client_id=1000892629397024878&redirect_uri=https%3A%2F%2Fmytourni.com%2Fauth&response_type=code&scope=identify"
        );
  const handleOpenError = () => setOpenError(true);
  const handleOpenSuccess = () => setOpenSuccess(true);
  const handleOpenFull = () => setOpenFull(true);
  const handleOpenFortnite = () =>
    Cookies.get("userID")
      ? setOpenFortnite(true)
      : window.location.replace(
          "http://discord.com/api/oauth2/authorize?client_id=1000892629397024878&redirect_uri=https%3A%2F%2Fmytourni.com%2Fauth&response_type=code&scope=identify"
        );
  const handleOpenMultiverse = () =>
    Cookies.get("userID")
      ? setOpenMultiverse(true)
      : window.location.replace(
          "http://discord.com/api/oauth2/authorize?client_id=1000892629397024878&redirect_uri=https%3A%2F%2Fmytourni.com%2Fauth&response_type=code&scope=identify"
        );

  const handleClose = () => {
    setOpenWarz(false);
    setOpenMW2(false);
    setOpenFortnite(false);
    setOpenLeague(false);
    setOpenClash(false);
    setOpenFIFA(false);
    setOpenMultiverse(false);
    setOpenBrawl(false);
    setOpenRocket(false);
    setOpenError(false);
    setOpenSuccess(false);
    setOpenFull(false);
  };
  const [tournaments, setTournaments] = React.useState([]);
  const fetchData = async () => {
    await fetch("/get/tournaments")
      .then((response) => response.json())
      .then((data) => setTournaments(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (  
    <div className="">
      <Nav></Nav>
      {tournaments.length == 0 ?(<div className="tourneyWrapper min-h-[728px] w-auto bg-no-repeat bg-cover bg-center bg-fit bg-[url('/src/components/Landing/images/bg_1.png')]">
                  {" "}
                  <span className="flex  mb-8 mx-auto justify-center lg:hidden  opacity-0 text-2xl text-center text-[#d85058] font-BigShoulders ">
                    UPCOMING ONGOING COMMUNITY
                  </span>
                  <span className="flex  mx-auto justify-center text-6xl lg:pt-24 lg:text-8xl font-extrabold   text-center text-white font-BigShoulders ">
                    NO TOURNAMENTS 
                  </span>
                 
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl mt-12  text-center text-white font-BigShoulders ">
                      TOURNAMENTS COMING SOON
                    </span>

                </div>
            ) : 
      <div className="tournamentContainer flex">
        <div className="sidePanel hidden lg:block sm:text-3xl  lg:text-6xl absolute h-[702px] flex flex-col justify-center bg-opacity-70 z-50 bg-[#13131d] h-[702px] text-left mx-auto pt-[40vh]  text-7xl  w-[20vw] font-BigShoulders text-[#f4f4f4]">
          <h1>UPCOMING</h1>
          <h1>ONGOING</h1>
          <h1>COMMUNITY MADE</h1>
        </div>

        {/* <div className="sidePanel w-[20vw] text-5xl text-white absolute left-0">
          <h1>UPCOMING</h1>
          <h1>ONGOING</h1>
          <h1>COMMUNITY MADE</h1>
        </div> */}
        <Carousel
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = {
              height: "15px",
              width: "15px",
              borderRadius: "50%",
              backgroundColor: "transparent",
              border: "1px solid",
              borderColor: "#d85058",
              cursor: "pointer",
              pointerEvents: "auto",
              display: "inline-block",
              marginLeft: "10px",
              marginBottom: "38rem",
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
          interval={4000}
          useKeyboardArrows={true}
          infiniteLoop={true}
          className="h-full w-full text-opacity-100 z-10"
        >
        
          {tournaments.map((tournament, key) => (
            <div key={key} className="tournament flex">
              <Modal
                open={openError}
                onClose={handleClose}
                className=" "
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} className="lg:w-[30vw]">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ mx: "auto" }}
                    className=" text-center bg-[#d85058] rounded-md lg:w-[20vw]  lg:mx-auto"
                  >
                    ERROR
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    className="text-center "
                    sx={{ mx: 2 }}
                  >
                    You have already signed up for this tournament or are not
                    logged in.<br></br> If this is incorrect, please contact an
                    Admin in our discord server
                    <br></br>
                    <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          className=""
                          onClick={()=>{
                            openInNewTab("https://discord.gg/mytourni")
                          } }
                        >
                          MYTOURNI SERVER
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          color="error"
                          onClick={()=>{
                            handleClose()
                          }}
                          className="btn text-center   inline-block  contained pointer-events-auto z-[100000]"
                        >
                          <i className="fab fa-discord mr-2"></i> Tournament Page
                        </Button>
                  </Typography>
                </Box>
              </Modal>
              <Modal
                open={openSuccess}
                onClose={handleClose}
                className=" "
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} className="lg:w-[30vw]">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{mx:"auto"}}
                        className=" text-center bg-[#d85058] rounded-md lg:w-[20vw]  lg:mx-auto"
                  >
                    REGISTERED
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    className="text-center "
                    sx={{ mt: 2 }}
                  >
                    Successfully registered! <br></br> Please check your Discord
                    messages as our Mytourni Bot has sent you further
                    information regarding the tournament.
                    <br></br>                    <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          className=""
                          onClick={()=>{
                            openInNewTab("https://discord.gg/mytourni")
                          } }
                        >
                          MYTOURNI SERVER
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          color="error"
                          onClick={()=>{
                            handleClose()
                          }}
                          className="btn text-center   inline-block  contained pointer-events-auto z-[100000]"
                        >
                          <i className="fab fa-discord mr-2"></i> Tournament Page
                        </Button>
                  </Typography>
                </Box>
              </Modal>
              <Modal
                open={openFull}
                onClose={handleClose}
                className=" "
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} className="lg:w-[30vw]">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ mx: "auto" }}
                    className=" text-center bg-[#d85058] rounded-md lg:w-[20vw]  lg:mx-auto"
                  >
                    ERROR
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    className="text-center "
                    sx={{ mx: 2 , my:2 }}
                  >
                    The tournament you are trying to join is currently full.
                    <br></br>
                    <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          className=""
                          onClick={()=>{
                            openInNewTab("https://discord.gg/mytourni")
                          } }
                        >
                          MYTOURNI SERVER
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          color="error"
                          onClick={()=>{
                            handleClose()
                          }}
                          className="btn text-center   inline-block  contained pointer-events-auto z-[100000]"
                        >
                          <i className="fab fa-discord mr-2"></i> Tournament Page
                        </Button>
                  </Typography>
                </Box>
              </Modal>
              {/* <Modal
                open={openSuccess}
                onClose={handleClose}
                className=" "
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} className="lg:w-[30vw]">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                                            sx={{mx:"auto"}}
                        className=" text-center bg-[#d85058] rounded-md lg:w-[20vw]  lg:mx-auto"
                  >
                    REGISTERED
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    className="text-center "
                    sx={{ mt: 2 }}
                  >
                    Successfully registered! <br></br> Please check your Discord
                    messages as our Mytourni Bot has sent you further
                    information regarding the tournament.
                    <a
                      href="https://discord.gg/mytourni"
                      className="text-blue-800"
                    >
                      (https://discord.gg/mytourni)
                    </a>
                    <br></br>
                  </Typography>
                </Box>
              </Modal> */}
              {tournament.Game === "Call Of Duty" ? (
                <div className="tourneyWrapper text-center h-full w-full  bg-no-repeat bg-cover bg-center   bg-[url('/src/components/Tournaments/images/CODWarzoneBG2.jpg')]">
                  <span className="flex mt-20 mb-8 mx-auto justify-center lg:hidden text-2xl text-center opacity-0 text-[#d85058] font-BigShoulders ">
                    UPCOMING ONGOING COMMUNITY
                  </span>
                  <span className="flex  mx-auto justify-center text-6xl lg:text-8xl font-extrabold lg:mt-28 mt-20 text-center text-white font-BigShoulders ">
                    {tournament.Game}
                  </span>
                  {tournament.entry === 0 ? (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl mt-12 lg:mt-26 text-center text-white font-BigShoulders ">
                      FREE ENTRY
                    </span>
                  ) : (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl font-extrabold mt-20 lg:mt-20 text-center text-white font-BigShoulders ">
                      {tournament.entry}
                    </span>
                  )}
                  <span className="flex  mx-auto justify-center mb-4 text-4xl lg:text-6xl text-center text-white font-BigShoulders ">
                    {tournament.Prize}
                  </span>

                  
                                <Countdown date={tournament.RegEnd} renderer={renderer} />
                  <button
                    onClick={()=>{
                      if (tournament.Participants==null){
                        handleOpenWarz()
                      }
                      if(tournament.Participants.length >= tournament.Players){
                        handleOpenFull()
                      }
                      else
                      handleOpenWarz()}
                    }
                    className=" mt-32  bg-transparent border p-3 px-16 border-[#d85058]  "
                  >
                    <span className="  lg:text-3xl text-xl text-white font-BigShoulders">
                      REGISTER NOW!
                    </span>
                  </button>
                  <Modal
                    open={openWarz}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="text-3xl"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="div"
                        sx={{mx:"auto"}}

                        className=" text-center bg-[#d85058] rounded-md lg:w-[20vw]  lg:mx-auto"
                      >
                        {tournament.Game} Registration
                      </Typography>
                      <Typography
                        id="modal-modal-description"
                        className="text-center "
                        sx={{ mt: 2 }}
                      >
                        By signing up you agree to the rules of MyTourni and
                        understand that the tournament will take place on our
                        Discord server.<br></br> You <b>MUST</b> join our server{" "}
                        <b>PRIOR</b> to clicking "I Understand", Failure to do
                        so will prevent you from receiving tournament
                        information.
                        <br></br>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          className="bg-white"
                        >
                          JOIN SERVER
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          color="error"
                          onClick={() => {
                            
                            let data = {
                              tourneyID: tournament.tournament_ID,
                              Participants: tournament.Participants,
                              user: Cookies.get("userID"),
                            };
                            axios
                              .post("/admin/register", {
                                data,
                              })
                              .then((res) => {
                                console.log(res.data);
                                if (res.data === 1) {
                                  console.log(tournament.Participants);
                                  if (tournament.Participants === null) {
                                    tournament.Participants = [];
                                    tournament.Participants.push(data.user);
                                    console.log(tournament.Participants);
                                    handleClose();
                                    handleOpenSuccess();
                                  } else {
                                    tournament.Participants.push(data.user);
                                    handleOpenSuccess();
                                  }
                                } else if (res.data == 3) {
                                  handleOpenFull();
                                } else {
                                  handleOpenError();
                                }
                              });
                          }}
                          className="btn text-center   inline-block  contained pointer-events-auto z-[100000]"
                        >
                          <i className="fab fa-discord mr-2"></i> I Understand
                        </Button>
                      </Typography>
                    </Box>
                  </Modal>
                  <span className="flex  mx-auto justify-center  text-2xl mt-6  text-center text-white font-BigShoulders ">
                    POWERED BY {tournament.sponsor}
                  </span>
                </div>
              ) : (
                ""
              )}
              {tournament.Game === "Brawlhalla" ? (
                <div className="tourneyWrapper h-full w-full bg-no-repeat bg-cover bg-center  bg-[url('/src/components/Tournaments/images/BrawlhallaBG2.png')]">
                  <span className="flex mt-20 mb-8 mx-auto justify-center lg:hidden text-2xl text-center opacity-0 text-[#d85058] font-BigShoulders ">
                    UPCOMING ONGOING COMMUNITY
                  </span>
                  <span className="flex  mx-auto justify-center text-6xl lg:text-8xl font-extrabold lg:mt-28 mt-20 text-center text-white font-BigShoulders ">
                    {tournament.Game}
                  </span>
                  {tournament.entry === 0 ? (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl mt-12 lg:mt-26 text-center text-white font-BigShoulders ">
                      FREE ENTRY
                    </span>
                  ) : (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl font-extrabold mt-20 lg:mt-20 text-center text-white font-BigShoulders ">
                      {tournament.entry}
                    </span>
                  )}
                  <span className="flex  mx-auto justify-center mb-4 text-4xl lg:text-6xl text-center text-white font-BigShoulders ">
                    {tournament.Prize}
                  </span>
                  <Countdown date={tournament.RegEnd} renderer={renderer} />
                  {tournament.Participants === null ||
                  tournament.Participants.length >= tournament.Players ? (
                    <button
                      onClick={handleOpenBrawl}
                      className=" mt-32  bg-transparent border p-3 px-16 border-[#d85058]  "
                    >
                      <span className="  lg:text-3xl text-xl text-white font-BigShoulders">
                        REGISTER NOW!
                      </span>
                    </button>
                  ) : (
                    <button
                      onClick={handleOpenBrawl}
                      className=" mt-32  bg-transparent border p-3 px-16 border-[#d85058]  "
                    >
                      <span className="  lg:text-3xl text-xl text-white font-BigShoulders">
                        REGISTER NOW!
                      </span>
                    </button>
                  )}

                  <Modal
                    open={openBrawl}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="div"
                                                sx={{mx:"auto"}}
                        className=" text-center bg-[#d85058] rounded-md lg:w-[20vw]  lg:mx-auto"
                      >
                        {tournament.Game} Registration
                      </Typography>
                      <Typography
                        id="modal-modal-description"
                        className="text-center "
                        sx={{ mt: 2 }}
                      >
                        By signing up you agree to the rules of MyTourni and
                        understand that the tournament will take place on our
                        Discord server.<br></br> You <b>MUST</b> join our server{" "}
                        <b>PRIOR</b> to clicking "I Understand", Failure to do
                        so will prevent you from receiving tournament
                        information.
                        <br></br>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          className="bg-white"
                        >
                          JOIN SERVER
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          color="error"
                          onClick={() => {
                            let data = {
                              tourneyID: tournament.tournament_ID,
                              Participants: tournament.Participants,
                              user: Cookies.get("userID"),
                            };
                            axios
                              .post("/admin/register", {
                                data,
                              })
                              .then((res) => {
                                console.log(res.data);
                                if (res.data === 1) {
                                  console.log(tournament.Participants);
                                  if (tournament.Participants === null) {
                                    tournament.Participants = [];
                                    tournament.Participants.push(data.user);
                                    console.log(tournament.Participants);
                                    handleClose();
                                    handleOpenSuccess();
                                  } else {
                                    tournament.Participants.push(data.user);
                                    handleOpenSuccess();
                                  }
                                } else if (res.data == 3) {
                                  handleOpenFull();
                                } else {
                                  handleOpenError();
                                }
                              });
                          }}
                          className="btn text-center   inline-block  contained pointer-events-auto z-[100000]"
                        >
                          <i className="fab fa-discord mr-2"></i> I Understand
                        </Button>
                      </Typography>
                    </Box>
                  </Modal>
                  <span className="flex  mx-auto justify-center  text-2xl mt-6  text-center text-white font-BigShoulders ">
                    POWERED BY {tournament.sponsor}
                  </span>
                </div>
              ) : (
                ""
              )}
              {tournament.Game === "FIFA" ? (
                <div className="tourneyWrapper h-full w-full bg-no-repeat bg-cover bg-center bg-[url('/src/components/Tournaments/images/FIFABG2.jpg')]">
                  {" "}
                  <span className="flex mt-20 mb-8 mx-auto justify-center lg:hidden text-2xl text-center  opacity-0 text-[#d85058] font-BigShoulders ">
                    UPCOMING ONGOING COMMUNITY
                  </span>
                  <span className="flex  mx-auto justify-center text-6xl lg:text-8xl font-extrabold lg:mt-28 mt-20 text-center text-white font-BigShoulders ">
                    {tournament.Game}
                  </span>
                  {tournament.entry === 0 ? (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl mt-12 lg:mt-26 text-center text-white font-BigShoulders ">
                      FREE ENTRY
                    </span>
                  ) : (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl font-extrabold mt-20 lg:mt-20 text-center text-white font-BigShoulders ">
                      {tournament.entry}
                    </span>
                  )}
                  <span className="flex  mx-auto justify-center mb-4 text-4xl lg:text-6xl text-center text-white font-BigShoulders ">
                    {tournament.Prize}
                  </span>
                  <Countdown date={tournament.RegEnd} renderer={renderer} />
                  <button
                    onClick={()=>{


                      if (tournament.Participants==null){
                        handleOpenFIFA()
                      }
                      if(tournament.Participants.length >= tournament.Players){
                        handleOpenFull()
                      }
                      else
                      handleOpenFIFA()}
                    }
                    className=" mt-32  bg-transparent border p-3 px-16 border-[#d85058]  "
                  >
                    <span className="  lg:text-3xl text-xl text-white font-BigShoulders">
                      REGISTER NOW!
                    </span>
                  </button>
                  <Modal
                    open={openFIFA}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="div"
                                                sx={{mx:"auto"}}
                        className=" text-center bg-[#d85058] rounded-md lg:w-[20vw]  lg:mx-auto"
                      >
                        {tournament.Game} Registration
                      </Typography>
                      <Typography
                        id="modal-modal-description"
                        className="text-center "
                        sx={{ mt: 2 }}
                      >
                        By signing up you agree to the rules of MyTourni and
                        understand that the tournament will take place on our
                        Discord server.<br></br> You <b>MUST</b> join our server{" "}
                        <b>PRIOR</b> to clicking "I Understand", Failure to do
                        so will prevent you from receiving tournament
                        information.
                        <br></br>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          className="bg-white"
                        >
                          JOIN SERVER
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          color="error"
                          onClick={() => {
                            let data = {
                              tourneyID: tournament.tournament_ID,
                              Participants: tournament.Participants,
                              user: Cookies.get("userID"),
                            };
                            axios
                              .post("/admin/register", {
                                data,
                              })
                              .then((res) => {
                                console.log(res.data);
                                if (res.data === 1) {
                                  console.log(tournament.Participants);
                                  if (tournament.Participants === null) {
                                    tournament.Participants = [];
                                    tournament.Participants.push(data.user);
                                    console.log(tournament.Participants);
                                    handleClose();
                                    handleOpenSuccess();
                                  } else {
                                    tournament.Participants.push(data.user);
                                    handleOpenSuccess();
                                  }
                                } else if (res.data == 3) {
                                  handleOpenFull();
                                } else {
                                  handleOpenError();
                                }
                              });
                          }}
                          className="btn text-center   inline-block  contained pointer-events-auto z-[100000]"
                        >
                          <i className="fab fa-discord mr-2"></i> I Understand
                        </Button>
                      </Typography>
                    </Box>
                  </Modal>
                  <span className="flex  mx-auto justify-center  text-2xl mt-6  text-center text-white font-BigShoulders ">
                    POWERED BY {tournament.sponsor}
                  </span>
                </div>
              ) : (
                ""
              )}
              {tournament.Game === "Rocket League" ? (
                <div className="tourneyWrapper h-full w-full bg-no-repeat bg-cover bg-center bg-[url('/src/components/Tournaments/images/RocketLeagueBG.png')]">
                  {" "}
                  <span className="flex mt-20 mb-8 mx-auto justify-center lg:hidden text-2xl opacity-0 text-center text-[#d85058] font-BigShoulders ">
                    UPCOMING ONGOING COMMUNITY
                  </span>
                  <span className="flex  mx-auto justify-center text-6xl lg:text-8xl font-extrabold lg:mt-28 mt-20 text-center text-white font-BigShoulders ">
                    {tournament.Game}
                  </span>
                  {tournament.entry === 0 ? (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl mt-12 lg:mt-26 text-center text-white font-BigShoulders ">
                      FREE ENTRY
                    </span>
                  ) : (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl font-extrabold mt-20 lg:mt-20 text-center text-white font-BigShoulders ">
                      {tournament.entry}
                    </span>
                  )}
                  <span className="flex  mx-auto justify-center mb-4 text-4xl lg:text-6xl text-center text-white font-BigShoulders ">
                    {tournament.Prize}
                  </span>
                  <Countdown date={tournament.RegEnd} renderer={renderer} />
                  <button
                    onClick={()=>{
                      if (tournament.Participants==null){
                        handleOpenRocket()
                      }
                      if(tournament.Participants.length >= tournament.Players){
                        handleOpenFull()
                      }
                      else
                      handleOpenRocket()}
                    }
                    className=" mt-32  bg-transparent border p-3 px-16 border-[#d85058]  "
                  >
                    <span className="  lg:text-3xl text-xl text-white font-BigShoulders">
                      REGISTER NOW!
                    </span>
                  </button>
                  <Modal
                    open={openRocket}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="div"
                                                sx={{mx:"auto"}}
                        className=" text-center bg-[#d85058] rounded-md lg:w-[20vw]  lg:mx-auto"
                      >
                        {tournament.Game} Registration
                      </Typography>
                      <Typography
                        id="modal-modal-description"
                        className="text-center "
                        sx={{ mt: 2 }}
                      >
                        By signing up you agree to the rules of MyTourni and
                        understand that the tournament will take place on our
                        Discord server.<br></br> You <b>MUST</b> join our server{" "}
                        <b>PRIOR</b> to clicking "I Understand", Failure to do
                        so will prevent you from receiving tournament
                        information.
                        <br></br>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          className="bg-white"
                        >
                          JOIN SERVER
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          color="error"
                          onClick={() => {
                            let data = {
                              tourneyID: tournament.tournament_ID,
                              Participants: tournament.Participants,
                              user: Cookies.get("userID"),
                            };
                            axios
                              .post("/admin/register", {
                                data,
                              })
                              .then((res) => {
                                console.log(res.data);
                                if (res.data === 1) {
                                  console.log(tournament.Participants);
                                  if (tournament.Participants === null) {
                                    tournament.Participants = [];
                                    tournament.Participants.push(data.user);
                                    console.log(tournament.Participants);
                                    handleClose();
                                    handleOpenSuccess();
                                  } else {
                                    tournament.Participants.push(data.user);
                                    handleOpenSuccess();
                                  }
                                } else if (res.data == 3) {
                                  handleOpenFull();
                                } else {
                                  handleOpenError();
                                }
                              });
                          }}
                          className="btn text-center   inline-block  contained pointer-events-auto z-[100000]"
                        >
                          <i className="fab fa-discord mr-2"></i> I Understand
                        </Button>
                      </Typography>
                    </Box>
                  </Modal>
                  <span className="flex  mx-auto justify-center  text-2xl mt-6  text-center text-white font-BigShoulders ">
                    POWERED BY {tournament.sponsor}
                  </span>
                </div>
              ) : (
                ""
              )}
              {tournament.Game === "Clash Royale" ? (
                <div className="tourneyWrapper  h-full w-full bg-no-repeat bg-cover bg-center bg-[url('/src/components/Tournaments/images/ClashRoyaleBG.png')]">
                  {" "}
                  <span className="flex mt-20 mb-8 mx-auto justify-center lg:hidden opacity-0 text-2xl text-center text-[#d85058] font-BigShoulders ">
                    UPCOMING ONGOING COMMUNITY
                  </span>
                  <span className="flex  mx-auto justify-center text-6xl lg:text-8xl font-extrabold lg:mt-28 mt-20 text-center text-white font-BigShoulders ">
                    {tournament.Game}
                  </span>
                  {tournament.entry === 0 ? (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl mt-12 lg:mt-26 text-center text-white font-BigShoulders ">
                      FREE ENTRY
                    </span>
                  ) : (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl font-extrabold mt-20 lg:mt-20 text-center text-white font-BigShoulders ">
                      {tournament.entry}
                    </span>
                  )}
                  <span className="flex  mx-auto justify-center mb-4 text-4xl lg:text-6xl text-center text-white font-BigShoulders ">
                    {tournament.Prize}
                  </span>
                  <Countdown date={tournament.RegEnd} renderer={renderer} />
                  <button
                    onClick={()=>{
                      if (tournament.Participants==null){
                        handleOpenClash()
                      }
                      if(tournament.Participants.length >= tournament.Players){
                        handleOpenFull()
                      }
                      else
                      handleOpenClash()}
                    }
                    className=" mt-32  bg-transparent border p-3 px-16 border-[#d85058]  "
                  >
                    <span className="  lg:text-3xl text-xl text-white font-BigShoulders">
                      REGISTER NOW!
                    </span>
                  </button>
                  <Modal
                    open={openClash}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="div"
                                                sx={{mx:"auto"}}
                        className=" text-center bg-[#d85058] rounded-md lg:w-[20vw]  lg:mx-auto"
                      >
                        {tournament.Game} Registration
                      </Typography>
                      <Typography
                        id="modal-modal-description"
                        className="text-center "
                        sx={{ mt: 2 }}
                      >
                        By signing up you agree to the rules of MyTourni and
                        understand that the tournament will take place on our
                        Discord server.<br></br> You <b>MUST</b> join our server{" "}
                        <b>PRIOR</b> to clicking "I Understand", Failure to do
                        so will prevent you from receiving tournament
                        information.
                        <br></br>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          className="bg-white"
                        >
                          JOIN SERVER
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          color="error"
                          onClick={() => {
                            let data = {
                              tourneyID: tournament.tournament_ID,
                              Participants: tournament.Participants,
                              user: Cookies.get("userID"),
                            };
                            axios
                              .post("/admin/register", {
                                data,
                              })
                              .then((res) => {
                                console.log(res.data);
                                if (res.data === 1) {
                                  console.log(tournament.Participants);
                                  if (tournament.Participants === null) {
                                    tournament.Participants = [];
                                    tournament.Participants.push(data.user);
                                    console.log(tournament.Participants);
                                    handleClose();
                                    handleOpenSuccess();
                                  } else {
                                    tournament.Participants.push(data.user);
                                    handleOpenSuccess();
                                  }
                                } else if (res.data == 3) {
                                  handleOpenFull();
                                } else {
                                  handleOpenError();
                                }
                              });
                          }}
                          className="btn text-center   inline-block  contained pointer-events-auto z-[100000]"
                        >
                          <i className="fab fa-discord mr-2"></i> I Understand
                        </Button>
                      </Typography>
                    </Box>
                  </Modal>
                  <span className="flex  mx-auto justify-center  text-2xl mt-6  text-center text-white font-BigShoulders ">
                    POWERED BY {tournament.sponsor}
                  </span>
                </div>
              ) : (
                ""
              )}
              {tournament.Game === "League Of Legends" ? (
                <div className="tourneyWrapper h-full w-full bg-no-repeat bg-cover bg-center bg-fit bg-[url('/src/components/Tournaments/images/LeagueOfLegendsBG2.png')]">
                  {" "}
                  <span className="flex mt-20 mb-8 mx-auto justify-center lg:hidden  opacity-0 text-2xl text-center text-[#d85058] font-BigShoulders ">
                    UPCOMING ONGOING COMMUNITY
                  </span>
                  <span className="flex  mx-auto justify-center text-6xl lg:text-8xl font-extrabold lg:mt-28 mt-20 text-center text-white font-BigShoulders ">
                    {tournament.Game}
                  </span>
                  {tournament.entry === 0 ? (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl mt-12 lg:mt-26 text-center text-white font-BigShoulders ">
                      FREE ENTRY
                    </span>
                  ) : (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl font-extrabold mt-20 lg:mt-20 text-center text-white font-BigShoulders ">
                      {tournament.entry}
                    </span>
                  )}
                  <span className="flex  mx-auto justify-center mb-4 text-4xl lg:text-6xl text-center text-white font-BigShoulders ">
                    {tournament.Prize}
                  </span>
                  <Countdown date={tournament.RegEnd} renderer={renderer} />
                  <button
                    onClick={()=>{
                      if (tournament.Participants==null){
                        handleOpenLeague()
                      }
                      if(tournament.Participants.length >= tournament.Players){
                        handleOpenFull()
                      }
                      else
                      handleOpenLeague()}
                    }
                    className=" mt-32  bg-transparent border p-3 px-16 border-[#d85058]  "
                  >
                    <span className="  lg:text-3xl text-xl text-white font-BigShoulders">
                      REGISTER NOW!
                    </span>
                  </button>
                  <Modal
                    open={openLeague}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="div"
                                                sx={{mx:"auto"}}
                        className=" text-center bg-[#d85058] rounded-md lg:w-[20vw]  lg:mx-auto"
                      >
                        {tournament.Game} Registration
                      </Typography>
                      <Typography
                        id="modal-modal-description"
                        className="text-center "
                        sx={{ mt: 2 }}
                      >
                        By signing up you agree to the rules of MyTourni and
                        understand that the tournament will take place on our
                        Discord server.<br></br> You <b>MUST</b> join our server{" "}
                        <b>PRIOR</b> to clicking "I Understand", Failure to do
                        so will prevent you from receiving tournament
                        information.
                        <br></br>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          className="bg-white"
                        >
                          JOIN SERVER
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          color="error"
                          onClick={() => {
                            let data = {
                              tourneyID: tournament.tournament_ID,
                              Participants: tournament.Participants,
                              user: Cookies.get("userID"),
                            };
                            axios
                              .post("/admin/register", {
                                data,
                              })
                              .then((res) => {
                                console.log(res.data);
                                if (res.data === 1) {
                                  console.log(tournament.Participants);
                                  if (tournament.Participants === null) {
                                    tournament.Participants = [];
                                    tournament.Participants.push(data.user);
                                    console.log(tournament.Participants);
                                    handleClose();
                                    handleOpenSuccess();
                                  } else {
                                    tournament.Participants.push(data.user);
                                    handleOpenSuccess();
                                  }
                                } else if (res.data == 3) {
                                  handleOpenFull();
                                } else {
                                  handleOpenError();
                                }
                              });
                          }}
                          className="btn text-center   inline-block  contained pointer-events-auto z-[100000]"
                        >
                          <i className="fab fa-discord mr-2"></i> I Understand
                        </Button>
                      </Typography>
                    </Box>
                  </Modal>
                  <span className="flex  mx-auto justify-center  text-2xl mt-6  text-center text-white font-BigShoulders ">
                    POWERED BY {tournament.sponsor}
                  </span>
                </div>
              ) : (
                ""
              )}
              {tournament.Game === "Fortnite" ? (
                <div className="tourneyWrapper h-full w-full bg-no-repeat bg-cover bg-center bg-fit bg-[url('/src/components/Tournaments/images/FortniteBG.png')]">
                  {" "}
                  <span className="flex mt-20 mb-8 mx-auto justify-center lg:hidden  opacity-0 text-2xl text-center text-[#d85058] font-BigShoulders ">
                    UPCOMING ONGOING COMMUNITY
                  </span>
                  <span className="flex  mx-auto justify-center text-6xl lg:text-8xl font-extrabold lg:mt-28 mt-20 text-center text-white font-BigShoulders ">
                    {tournament.Game}
                  </span>
                  {tournament.entry === 0 ? (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl mt-12 lg:mt-26 text-center text-white font-BigShoulders ">
                      FREE ENTRY
                    </span>
                  ) : (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl font-extrabold mt-20 lg:mt-20 text-center text-white font-BigShoulders ">
                      {tournament.entry}
                    </span>
                  )}
                  <span className="flex  mx-auto justify-center mb-4 text-4xl lg:text-6xl text-center text-white font-BigShoulders ">
                    {tournament.Prize}
                  </span>
                  <Countdown date={tournament.RegEnd} renderer={renderer} />
                  <button
                    onClick={()=>{
                      if (tournament.Participants==null){
                        handleOpenFortnite()
                      }
                      if(tournament.Participants.length >= tournament.Players){
                        handleOpenFull()
                      }
                      else
                      handleOpenFortnite()}
                    }
                    className=" mt-32  bg-transparent border p-3 px-16 border-[#d85058]  "
                  >
                    <span className="  lg:text-3xl text-xl text-white font-BigShoulders">
                      REGISTER NOW!
                    </span>
                  </button>
                  <Modal
                    open={openFortnite}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="div"
                                                sx={{mx:"auto"}}
                        className=" text-center bg-[#d85058] rounded-md lg:w-[20vw]  lg:mx-auto"
                      >
                        {tournament.Game} Registration
                      </Typography>
                      <Typography
                        id="modal-modal-description"
                        className="text-center "
                        sx={{ mt: 2 }}
                      >
                        By signing up you agree to the rules of MyTourni and
                        understand that the tournament will take place on our
                        Discord server.<br></br> You <b>MUST</b> join our server{" "}
                        <b>PRIOR</b> to clicking "I Understand", Failure to do
                        so will prevent you from receiving tournament
                        information.
                        <br></br>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          className="bg-white"
                        >
                          JOIN SERVER
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          color="error"
                          onClick={() => {
                            let data = {
                              tourneyID: tournament.tournament_ID,
                              Participants: tournament.Participants,
                              user: Cookies.get("userID"),
                            };
                            axios
                              .post("/admin/register", {
                                data,
                              })
                              .then((res) => {
                                console.log(res.data);
                                if (res.data === 1) {
                                  console.log(tournament.Participants);
                                  if (tournament.Participants === null) {
                                    tournament.Participants = [];
                                    tournament.Participants.push(data.user);
                                    console.log(tournament.Participants);
                                    handleClose();
                                    handleOpenSuccess();
                                  } else {
                                    tournament.Participants.push(data.user);
                                    handleOpenSuccess();
                                  }
                                } else if (res.data == 3) {
                                  handleOpenFull();
                                } else {
                                  handleOpenError();
                                }
                              });
                          }}
                          className="btn text-center   inline-block  contained pointer-events-auto z-[100000]"
                        >
                          <i className="fab fa-discord mr-2"></i> I Understand
                        </Button>
                      </Typography>
                    </Box>
                  </Modal>
                  <span className="flex  mx-auto justify-center  text-2xl mt-6  text-center text-white font-BigShoulders ">
                    POWERED BY {tournament.sponsor}
                  </span>
                </div>
              ) : (
                ""
              )}
              {tournament.Game === "MW2" ? (
                <div className="tourneyWrapper h-full w-full bg-no-repeat bg-cover bg-center bg-fit bg-[url('/src/components/Tournaments/images/CODMW2BG.png')]">
                  {" "}
                  <span className="flex mt-20 mb-8 mx-auto justify-center lg:hidden  opacity-0 text-2xl text-center text-[#d85058] font-BigShoulders ">
                    UPCOMING ONGOING COMMUNITY
                  </span>
                  <span className="flex  mx-auto justify-center text-6xl lg:text-8xl font-extrabold lg:mt-28 mt-20 text-center text-white font-BigShoulders ">
                    {tournament.Game}
                  </span>
                  {tournament.entry === 0 ? (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl mt-12 lg:mt-26 text-center text-white font-BigShoulders ">
                      FREE ENTRY
                    </span>
                  ) : (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl font-extrabold mt-20 lg:mt-20 text-center text-white font-BigShoulders ">
                      {tournament.entry}
                    </span>
                  )}
                  <span className="flex  mx-auto justify-center mb-4 text-4xl lg:text-6xl text-center text-white font-BigShoulders ">
                    {tournament.Prize}
                  </span>
                  <Countdown date={tournament.RegEnd} renderer={renderer} />
                  <button
                    onClick={()=>{
                      if (tournament.Participants==null){
                        handleopenMW2()
                      }
                      if(tournament.Participants.length >= tournament.Players){
                        handleOpenFull()
                      }
                      else
                      handleopenMW2()}
                    }
                    className=" mt-32  bg-transparent border p-3 px-16 border-[#d85058]  "
                  >
                    <span className="  lg:text-3xl text-xl text-white font-BigShoulders">
                      REGISTER NOW!
                    </span>
                  </button>
                  <Modal
                    open={openMW2}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="div"
                                                sx={{mx:"auto"}}
                        className=" text-center bg-[#d85058] rounded-md lg:w-[20vw]  lg:mx-auto"
                      >
                        {tournament.Game} Registration
                      </Typography>
                      <Typography
                        id="modal-modal-description"
                        className="text-center "
                        sx={{ mt: 2 }}
                      >
                        By signing up you agree to the rules of MyTourni and
                        understand that the tournament will take place on our
                        Discord server.<br></br> You <b>MUST</b> join our server{" "}
                        <b>PRIOR</b> to clicking "I Understand", Failure to do
                        so will prevent you from receiving tournament
                        information.
                        <br></br>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          className="bg-white"
                        >
                          JOIN SERVER
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          color="error"
                          onClick={() => {
                            let data = {
                              tourneyID: tournament.tournament_ID,
                              Participants: tournament.Participants,
                              user: Cookies.get("userID"),
                            };
                            axios
                              .post("/admin/register", {
                                data,
                              })
                              .then((res) => {
                                console.log(res.data);
                                if (res.data === 1) {
                                  console.log(tournament.Participants);
                                  if (tournament.Participants === null) {
                                    tournament.Participants = [];
                                    tournament.Participants.push(data.user);
                                    console.log(tournament.Participants);
                                    handleClose();
                                    handleOpenSuccess();
                                  } else {
                                    tournament.Participants.push(data.user);
                                    handleOpenSuccess();
                                  }
                                } else if (res.data == 3) {
                                  handleOpenFull();
                                } else {
                                  handleOpenError();
                                }
                              });
                          }}
                          className="btn text-center   inline-block  contained pointer-events-auto z-[100000]"
                        >
                          <i className="fab fa-discord mr-2"></i> I Understand
                        </Button>
                      </Typography>
                    </Box>
                  </Modal>
                  <span className="flex  mx-auto justify-center  text-2xl mt-6  text-center text-white font-BigShoulders ">
                    POWERED BY {tournament.sponsor}
                  </span>
                </div>
              ) : (
                ""
              )}
              {tournament.Game === "Multiversus" ? (
                <div className="tourneyWrapper h-full w-full bg-no-repeat bg-cover bg-center bg-fit bg-[url('/src/components/Tournaments/images/RumbleverseBG.png')]">
                  {" "}
                  <span className="flex mt-20 mb-8 mx-auto justify-center lg:hidden  opacity-0 text-2xl text-center text-[#d85058] font-BigShoulders ">
                    UPCOMING ONGOING COMMUNITY
                  </span>
                  <span className="flex  mx-auto justify-center text-6xl lg:text-8xl font-extrabold lg:mt-28 mt-20 text-center text-white font-BigShoulders ">
                    {tournament.Game}
                  </span>
                  {tournament.entry === 0 ? (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl mt-12 lg:mt-26 text-center text-white font-BigShoulders ">
                      FREE ENTRY
                    </span>
                  ) : (
                    <span className="flex  mx-auto justify-center text-4xl lg:text-6xl font-extrabold mt-20 lg:mt-20 text-center text-white font-BigShoulders ">
                      {tournament.entry}
                    </span>
                  )}
                  <span className="flex  mx-auto justify-center mb-4 text-4xl lg:text-6xl text-center text-white font-BigShoulders ">
                    {tournament.Prize}
                  </span>
                  <Countdown date={tournament.RegEnd} renderer={renderer} />
                  <button
                    onClick={()=>{
                      console.log(tournament.Participants.length,tournament.Players)
                      if (tournament.Participants==null){
                        handleOpenMultiverse()
                      }
                      if(tournament.Participants.length >= tournament.Players){
                        handleOpenFull()
                      }
                      else
                      handleOpenMultiverse()}
                    }
                    className=" mt-32  bg-transparent border p-3 px-16 border-[#d85058]  "
                  >
                    <span className="  lg:text-3xl text-xl text-white font-BigShoulders">
                      REGISTER NOW!
                    </span>
                  </button>
                  <Modal
                    open={openMultiverse}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="div"
                                                sx={{mx:"auto"}}
                        className=" text-center bg-[#d85058] rounded-md lg:w-[20vw]  lg:mx-auto"
                      >
                        {tournament.Game} Registration
                      </Typography>
                      <Typography
                        id="modal-modal-description"
                        className="text-center "
                        sx={{ mt: 2 }}
                      >
                        By signing up you agree to the rules of MyTourni and
                        understand that the tournament will take place on our
                        Discord server.<br></br> You <b>MUST</b> join our server{" "}
                        <b>PRIOR</b> to clicking "I Understand", Failure to do
                        so will prevent you from receiving tournament
                        information.
                        <br></br>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          className="bg-white"
                        >
                          JOIN SERVER
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ ml: 2, mb: 2, mt: 2 }}
                          color="error"
                          onClick={() => {
                            let data = {
                              tourneyID: tournament.tournament_ID,
                              Participants: tournament.Participants,
                              user: Cookies.get("userID"),
                            };
                            axios
                              .post("/admin/register", {
                                data,
                              })
                              .then((res) => {
                                console.log(res.data);
                                if (res.data === 1) {
                                  console.log(tournament.Participants);
                                  if (tournament.Participants === null) {
                                    tournament.Participants = [];
                                    tournament.Participants.push(data.user);
                                    console.log(tournament.Participants);
                                    handleClose();
                                    handleOpenSuccess();
                                  } else {
                                    tournament.Participants.push(data.user);
                                    handleOpenSuccess();
                                  }
                                } else if (res.data == 3) {
                                  handleOpenFull();
                                } else {
                                  handleOpenError();
                                }
                              });
                          }}
                          className="btn text-center   inline-block  contained pointer-events-auto z-[100000]"
                        >
                          <i className="fab fa-discord mr-2"></i> I Understand
                        </Button>
                      </Typography>
                    </Box>
                  </Modal>
                  <span className="flex  mx-auto justify-center  text-2xl mt-6  text-center text-white font-BigShoulders ">
                    POWERED BY {tournament.sponsor}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </Carousel>
      </div>}
    </div>
  );
};

export default Tournaments;
