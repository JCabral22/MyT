import Nav from "../Nav";
import React from "react";

const Contact = () => {
  return (
    <div className="">
      <Nav></Nav>
      <div className="contactContainer  h-screen font-BigShoulders pt-44 px-4 bg-[url('/src/components/Landing/images/bg_2.png')] bg-cover">
        <h1 className="text-[#d85058] text-5xl lg:text-7xl font-bold">
          {" "}
          CONTACT INFO
        </h1>
        <div className="contact text-[#f4f4f4] text-xl lg:text-2xl w-3/4">
          For tournament related questions please contact any server Admin or
          Moderator in the Community Section of our
          <a href="https://discord.gg/mytourni" className="text-[#d85058]">
            {" "}
            Discord Server
          </a>
          <br></br> <br></br>
          For Business enquiries please contact:<br></br>
          mytourniofficial@gmail.com
          <div className="btnContainer mt-4 mx-auto">
            <a
              href="https://www.mytourni.com/"
              className="playButton p-3 pointer-events-auto w-[50%] lg:w-[15%]   flex   justify-center  font-medium text-[#f4f4f4] bg-transparent border-[4px] border-[#d85058] hover:scale-[1.05]  duration-300 "
            >
              <p className=" text-center  text-sm lg:text-2xl flex">
                RETURN TO HOME PAGE
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
