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
                borderRadius: "50%",
              }}
              src="https://i.imgur.com/wCWoU0V.png
            "
              alt=""
              width={65}
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
          <Link to="book">
            <button type="button" className="btn btn-primary">
              BOOK
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
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            SHAMSHAD
          </h5>
        </div>
        <ReaNavbar />
      </div>
    </div>
  );
}

export default Navbar;
