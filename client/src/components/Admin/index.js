import Box from "@mui/material/Box";
import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import dayjs, { Dayjs } from "dayjs";
import axios from "axios";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { spacing } from "@mui/system";
import Cookies from "js-cookie";
import Nav from "../Nav";
var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
const todayDate = new Date();
dayjs.extend(timezone);
dayjs.tz.setDefault("America/La_Paz");
const Admin = () => {
  const [IDMap, setIDMap] = React.useState({});
  const [auth, setAuth] = React.useState(false);
  const [game, setGame] = React.useState("");
  const [sponsor, setSponsor] = React.useState("");
  const [entry, setEntry] = React.useState("");
  const [prize, setPrize] = React.useState("");
  const [date, setDate] = React.useState("");
  const [reg, setReg] = React.useState("");
  const [time, setTime] = React.useState("");
  const [players, setPlayers] = React.useState("");
  const [roles, setRoles] = React.useState([]);
  const [matches, setMatches] = React.useState([]);
  const [score, setScore] = React.useState("");
  const [tournamentId, setTournamentId] = React.useState("");
  const [tournaments, setTournaments] = React.useState([]);

  const fetchData = async () => {
    await fetch("/get/tournaments")
      .then((response) => response.json())
      .then((data) => setTournaments(data));
  };

  const ReleaseTournament = () => {
    if (tournaments.tournament_ID === tournamentData.tournament_ID) {
      tournaments.Released = true;
    }
  };

  const deleteTournament = () => {
    if (tournaments.tournament_ID === tournamentData.tournament_ID) {
      tournaments.filter(
        (tournaments) =>
          tournaments.tournament_ID !== tournamentData.tournament_ID
      );
    }
  };

  React.useEffect(() => {
    console.table(IDMap);
  }, [IDMap]);

  React.useEffect(() => {
    const checkAuth = async () => {
      await axios
        .get(
          "https://discord.com/api//users/@me/guilds/832468186422837278/member",
          {
            headers: {
              authorization: `Bearer ${Cookies.get("authToken")}`,
            },
          }
        )
        .then((res) => {
          setRoles(res.data.roles);
          if (res.data.roles.includes("832641674030219264")) {
            setAuth(true);
          }
        });
    };
    checkAuth();
    fetchData();
  }, []);
  const handleGame = (event) => {
    setGame(event.target.value);
    console.log(auth);
  };

  const handlePlayers = (event) => {
    setPlayers(event.target.value);
  };

  const handleSponsor = (event) => {
    setSponsor(event.target.value);
  };
  const handleEntry = (event) => {
    setEntry(event.target.value);
  };

  const handlePrize = (event) => {
    setPrize(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleReg = (event) => {
    setReg(event.target.value);
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  let tournamentData = {
    game: game,
    players: players,
    sponsor: sponsor,
    prize: prize,
    regend: reg,
    entry: entry,
    time: time,
    day: date,
  };

  return (
    <div className="">
      <Nav></Nav>
      <div
        className="adminPanel  pt-32  bg-cover bg-slate-300 flex justify-center space-y-20 min-h-[100vh]
    "
      >
        {auth === true ? (
          <React.Fragment>
            <div className="">
              <Box
                sx={{
                  spacing: 3,
                  text: "white",
                  mx: "auto",
                  width: "auto",
                  pt: 5,
                  pl: 5,
                }}
              >
                <FormControl fullWidth>
                  <LocalizationProvider
                    dateLibInstance={dayjs.tz}
                    dateAdapter={AdapterDayjs}
                  >
                    <InputLabel id="demo-simple-select-label">Game</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={game}
                      sx={{ width: 250, marginBottom: 2 }}
                      label="Game"
                      onChange={(e) => handleGame(e)}
                    >
                      <MenuItem value={"Call Of Duty"}>
                        Call of Duty:Warzone
                      </MenuItem>
                      <MenuItem value={"Brawlhalla"}>Brawlhalla</MenuItem>
                      <MenuItem value={"FIFA"}>FIFA</MenuItem>
                      <MenuItem value={"Clash Royale"}>Clash Royale</MenuItem>
                      <MenuItem value={"Rocket League"}>Rocket League</MenuItem>
                      <MenuItem value={"League Of Legends"}>
                        League Of Legends
                      </MenuItem>
                      <MenuItem value={"Multiversus"}>Multiversus</MenuItem>
                      <MenuItem value={"MW2"}>MW2</MenuItem>
                      <MenuItem value={"Fortnite"}>Fornite</MenuItem>
                    </Select>
                    <TextField
                      pt={2}
                      id="sponsor"
                      label="Sponsor"
                      variant="outlined"
                      value={sponsor}
                      sx={{ width: 250, marginBottom: 2 }}
                      onChange={(e) => handleSponsor(e)}
                    />
                    <TextField
                      pt={2}
                      id="entry"
                      type="number"
                      label="Entry Fee"
                      variant="outlined"
                      value={entry}
                      sx={{ width: 250, marginBottom: 2 }}
                      onChange={(e) => handleEntry(e)}
                    />
                    <TextField
                      pt={2}
                      id="prize"
                      label="Prize"
                      variant="outlined"
                      value={prize}
                      sx={{ width: 250, marginBottom: 2 }}
                      onChange={(e) => handlePrize(e)}
                    />
                    <TextField
                      pt={2}
                      id="Date"
                      label="Date(e.g Mon 8th Aug)"
                      variant="outlined"
                      value={date}
                      sx={{ width: 250, marginBottom: 2 }}
                      onChange={(e) => handleDate(e)}
                    />
                    <TextField
                      pt={2}
                      id="Players"
                      type="number"
                      label="# of players"
                      variant="outlined"
                      value={players}
                      sx={{ width: 250, marginBottom: 2 }}
                      onChange={(e) => handlePlayers(e)}
                    />
                    <TextField
                      pt={2}
                      id="Time"
                      label="Time(e.g 7PM)"
                      variant="outlined"
                      value={time}
                      sx={{ width: 250, marginBottom: 2 }}
                      onChange={(e) => handleTime(e)}
                    />

                    <TextField
                      id="datetime-local"
                      label="Registration cutoff"
                      type="datetime-local"
                      defaultValue={todayDate}
                      sx={{ width: 250 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(e) => handleReg(e)}
                    />
                  </LocalizationProvider>
                </FormControl>
                <Button
                  variant="contained"
                  onClick={async () => {
                    await axios
                      .post("/admin/create", {
                        tournamentData,
                      })
                      .then((res) => {
                        if (res.data.tournament_ID) {
                          const tocopy = [...tournaments];
                          tocopy.push(res.data);
                          setTournaments(tocopy);
                        }
                      });
                  }}
                  className="btn   h-20  contained"
                >
                  Submit
                </Button>
              </Box>
            </div>
            <Box sx={{ spacing: 3, mx: "auto", width: 500, marginBottom: 5 }}>
              {console.log(tournaments)}
              <div className="PendingTournaments ">
                <h1 className="mb-7">Currently Pending Tournaments</h1>
                {tournaments.map((tourney) =>
                  tourney.released === false || tourney.released === null ? (
                    <div className="pendingTournaments bg-black text-white text-center rounded-xl  mb-7">
                      Mytourni {tourney.Game}
                      <br></br> {tourney.Day} <br></br>Entry fee:{" "}
                      {tourney.entry}
                      <br></br> Prize:{tourney.Prize}
                      <br></br> Max Players: {tourney.Players} <br></br>
                      <Button
                        variant="contained"
                        onClick={async () => {
                          let data = {
                            id: tourney.tournament_ID,
                          };

                          await axios
                            .post("/admin/launch", {
                              data,
                            })
                            .then((tourney.released = true));
                        }}
                        className="btn   h-10  contained"
                      >
                        Launch
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={async () => {
                          let data = {
                            id: tourney.tournament_ID,
                          };
                          await axios
                            .post("/admin/delete", {
                              data,
                            })
                            .then((res) => {
                              let tocopy = [...tournaments];
                              tocopy = tocopy.filter(
                                (t) => t.tournament_ID !== data.id
                              );
                              setTournaments(tocopy);
                            });
                        }}
                        className="btn   h-10  error"
                      >
                        DELETE
                      </Button>
                    </div>
                  ) : (
                    ""
                  )
                )}
              </div>
            </Box>{" "}
            <Box sx={{ spacing: 3, mx: "auto", width: 500, marginBottom: 5 }}>
              <div className="beginTournamentsPanel ">
                <h1 className="mb-7">Start/Remove Tournaments</h1>
                {tournaments.map((tourni, index) =>
                  tourni.released === true ? (
                    <div className="startTournaments bg-black text-white text-center rounded-x mb-7">
                      Mytourni {tourni.Game} <br></br> {tourni.Day}
                      <br></br> Entry fee:
                      {tourni.entry}
                      <br></br> Prize:{tourni.Prize} <br></br>Max Players:{" "}
                      {tourni.Players}
                      <br></br>{" "}
                      <Button
                        variant="contained"
                        onClick={async () => {
                          let data = {
                            id: tourni.tournament_ID,
                            participants: tourni.Participants,
                            Day: tourni.Day,
                            Players: tourni.Players,
                            Game: tourni.Game,
                          };
                          await axios
                            .post("/admin/begin", {
                              data,
                            })
                            .then((tourni.started = true));
                        }}
                        className="btn   h-10  contained"
                      >
                        Begin!
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={async () => {
                          let data = { id: tourni.tournament_ID };
                          await axios
                            .post("/admin/delete", {
                              data,
                            })
                            .then();
                        }}
                        className="btn   h-10  error"
                      >
                        DELETE
                      </Button>
                    </div>
                  ) : (
                    ""
                  )
                )}
              </div>
            </Box>{" "}
          </React.Fragment>
        ) : (
          "Access Denied. Please log in to an admin account."
        )}
      </div>
      {auth === true ? (
        <div className="">
          <h1 className="flex-col bg-slate-300 text-center">
            Currently Running Tournaments
          </h1>
          <div className="moderationPanel text-center overflow-x-auto  flex bg-slate-300">
            {tournaments.map((t, index) =>
              t.started ? (
                <div className=" mx-auto text-center p-2   rounded-xl text-white w-auto bg-black">
                  {t.Game} <br></br>
                  {t.Day} <br></br>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={async () => {
                      let data = t;
                      const list = await axios.post("/admin/list", { data });
                      setMatches(list.data);
                      const players = await axios.post("/admin/players", {
                        data,
                      });
                      let tempmap = {};
                      for (let participant of players.data) {
                        tempmap[participant.participant.id] =
                          participant.participant.name;
                      }
                      console.log(tempmap);
                      setIDMap(tempmap);
                    }}
                    className="btn   h-10  contained"
                  >
                    Moderate
                  </Button>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="displayPanel bg-slate-300 text-center pt-7">
        Moderation Panel:
        <div className="flex">
          {matches.map((match, index) => (
            <div className="div  bg-black text-white mx-auto rounded-lg  p-5 ">
              Round:{match.match.round}
              <div className="players">
                {IDMap[match.match.player1_id]} VS{" "}
                {IDMap[match.match.player2_id]}
              </div>
              <div className="scores">
                {match.match.scores_csv === ""
                  ? "No scores submitted"
                  : IDMap[match.match.player1_id] +
                    " " +
                    match.match.scores_csv +
                    " " +
                    IDMap[match.match.player2_id]}
              </div>
              <div className="disputeText flex-row text-white">
                {match.match.scores_csv === "" ? (
                  ""
                ) : (
                  <Box display="flex" justifyContent="center">
                    <TextField
                      onChange={(e) => setScore(e.target.value)}
                      hiddenLabel
                      sx={{
                        width: "5vw",
                        textAlign: "center",
                        input: { color: "White" },
                        "& .MuiInput-underline:before": {
                          borderBottomColor: "white",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "red",
                        },
                      }}
                      id="filled-hidden-label-small"
                      defaultValue={match.match.scores_csv}
                      variant="standard"
                      text="white"
                      size="small"
                    />
                  </Box>
                )}
              </div>
              <div className="mt-4">
                <Button
                  variant="contained"
                  color="success"
                  onClick={async () => {
                    let data = {
                      matchid: match.match.id,
                      score: score,
                      tournamentId: match.match.tournament_id,
                    };
                    await axios.post("/admin/dispute", { data });
                  }}
                  className="btn    h-10  contained"
                >
                  Dispute
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={async () => {
                    let data = {
                      matchid: match.match.id,
                      score: score,
                      tournamentId: match.match.tournament_id,
                    };
                    await axios.post("/admin/rollback", { data });
                  }}
                  className="btn    h-10  contained"
                >
                  Rollback
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={async () => {
                    let data = {
                      tournamentId: match.match.tournament_id,
                    };
                    await axios.post("/admin/end", { data });
                  }}
                  className="btn    h-10  contained"
                >
                  End Tournament
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
