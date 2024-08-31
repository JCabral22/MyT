import React, { useEffect } from "react";
import axios from "axios";
import { ReactComponent as MyTourniLogo } from "./images/myTourniLogoFull.svg";
import "./widget.css";

const Widget = () => {
  const [members, setMembers] = React.useState([{}]);
  const [online, setOnline] = React.useState("");
  async function loadMembers() {
    axios
      .get("https://discordapp.com/api/guilds/832468186422837278/widget.json")
      .then((response) => {
        setMembers(response.data.members);
        setOnline(response.data.presence_count);
        console.log(response.data);
      });
  }
  useEffect(() => {
    loadMembers();
  }, []);

  return (
    <div className=" bg-gray-800 w-[60vw] mx-auto mb-5 lg:w-[75%]  rounded-3xl  ">
      <div className="flex justify-between  bg-myTourniBlack  rounded-t-3xl items-center ">
        <MyTourniLogo className=" h-[100px] ml-8 p-2 w-[100px]" />
        <h1 className=" text-xl text-right   lg:text-3xl   font-Maven text-white mr-8">
          Join {online} gamers currently online!
        </h1>
      </div>

      <div className="memberGrid grid grid-cols-1 px-3 min-w-full mr-32 h-[25vh] overflow-y-scroll overflow-x-hidden text-white ">
        {members.map((member, key) => (
          <div
            key={key}
            className=" member   flex  items-center   lg:text-md xl:text-2xl font-medium  "
          >
            <img
              className="flex  h-12   rounded-full"
              alt="memberAvatar"
              src={member.avatar_url}
            ></img>
            <h1 className="text-md mx-auto">{member.username}</h1>
            <p className="text-sm ">
              {member.status === "dnd" ? "🔴" : " "}
              {member.status === "idle" ? "🟡" : ""}
              {member.status === "online" ? "🟢" : ""}
            </p>

            {/* {member.game ? `"Playing ${member.game.name}"` : " "} */}
          </div>
        ))}
      </div>
      <div className="bottomText border-gray-800 rounded-full bg-gray-800  text-white text-center">
        <h1 className="p-5 ">
          We hope to have you as part of our community ❤️
        </h1>
      </div>
    </div>
  );
};

export default Widget;
