import "./App.css";
import React from "react";
import Family_card from "./Family_card";
import Plceholder_json from "./Plceholder_json";
import Get_data from "./Get_data";
import Home from "./Home";
import Post from "./Post";
// import Post_data from "./Post_data";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postid" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
