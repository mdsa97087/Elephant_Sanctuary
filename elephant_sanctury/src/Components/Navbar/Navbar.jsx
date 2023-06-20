import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ReaNavbar from "./ReaNavbar";

function Navbar() {
  return (
    <div className="allnavbar">
      <nav>
        <div>
          <Link to="/" className="link">
            <img
              style={{
                borderRadius: "0%",
                backgroundColor: "#FCE9F1",
              }}
              src="https://i.imgur.com/jPom1X4.png
            "
              alt=""
              // width={250}
              height={65}
            />
          </Link>
        </div>
        <div className="nav2">
          <Link to="/" className="link">
            HOME
          </Link>
          <Link to="/sanctuary" className="link">
            SANCTUARY
          </Link>
          <Link to="/about" className="link">
            ABOUT
          </Link>
          <Link to="/contact" className="link">
            CONTACT
          </Link>
          <Link to="book" className="link">
            <button type="button" className="btn btn-primary">
              BOOK NOW
            </button>
          </Link>
        </div>

        <i
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          id="fa1"
          className="fa fa-bars fa-2x"
          aria-controls="offcanvasExample"
        ></i>
      </nav>
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <Link to="/" className="link">
          <div className="offcanvas-header">
            <h6 className="offcanvas-title" id="offcanvasExampleLabel">
              ELEPHANTEGY
            </h6>
          </div>
        </Link>
        <ReaNavbar />
      </div>
    </div>
  );
}

export default Navbar;
