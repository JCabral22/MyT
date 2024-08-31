import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer";
import React from "react";

import Landing from "../Landing";
import Loading from "../Loading";
import Admin from "../Admin";
import Nav from "../Nav";
import Tournaments from "../Tournaments";
import Contact from "../Contact";
import Widget from "../Widget";

const Skeleton = () => {
  return (
    <div className="body bg-[#13131d]">
      <Suspense fallback={<Loading />}>
        {/* <Nav /> */}

        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/tournaments" exact element={<Loading />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route
            path="/login"
            component={() => {
              window.location.href = "https://example.com/1234";
              return null;
            }}
          />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Skeleton;
