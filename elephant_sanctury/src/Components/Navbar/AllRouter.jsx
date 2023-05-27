import React from "react";
import Home from "../Home/Home";
import Sanctuary from "../sanctuary/Sanctuary";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Book from "../Book/Book";
import { Route, Routes } from "react-router-dom";
import Feedback from "../Feedback/Feedback";

function AllRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sanctuary" element={<Sanctuary />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/book" element={<Book />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>

      </Routes>
    </div>
  );
}

export default AllRouter;
