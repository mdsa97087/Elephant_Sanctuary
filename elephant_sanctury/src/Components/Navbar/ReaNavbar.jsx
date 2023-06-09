import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function ReaNavbar() {
  return (
    <div>
      <div  className="responseNavbar">
        <Link id="FooterLink" className="FooterLink" to="/">
          <img
            src="https://i.imgur.com/HwQxkkD.png
             "
            alt=""
            width={"25px"}
          />
          HOME
        </Link>
        <Link id="FooterLink" className="FooterLink" to="/sanctuary">
          <img
            src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/47/1a.jpg"
            alt=""
            width={"25px"}
          />
          SANCTUARY
        </Link>
        <Link id="FooterLink" className="FooterLink" to="/about">
          <img
            src="https://cdn.iconscout.com/icon/free/png-128/about-help-info-information-details-ask-6003.png
                "
            alt=""
            width={"25px"}
          />
          ABOUT
        </Link>

        <Link id="FooterLink" className="FooterLink" to="/contact">
          <img
            src="https://cdn.iconscout.com/icon/free/png-128/contact-1817237-1538106.png
            "
            alt=""
            width={"25px"}
          />
          CONTACT
        </Link>
        <Link to="book" id="FooterLink">
            <button type="button" className="btn btn-primary">
              BOOK NOW
            </button>
          </Link>
      </div>
    </div>
  );
}

export default ReaNavbar;
