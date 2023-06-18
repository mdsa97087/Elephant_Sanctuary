import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section
      style={{
        marginTop: "50px",
      }}
    >
      <div className="project2div">
        <div className="footer2div">
          <p align="justify">
            Elephantegy in Jaipur, India is a fantastic way for you to get
            hands-on experience and make a real difference in the lives of our
            elephants. Experience the most exciting, innovative, working
            elephant village in India, dedicated to conserving elephants. You
            can learn about their basic habits of food, life, and traditional
            decoration.
          </p>
        </div>
        <div
          className="footer2div"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
            }}
          >
            <Link className="FooterLink" to="/">
              <img
                src="https://i.imgur.com/HwQxkkD.png
             "
                alt=""
                width={"25px"}
              />
              Home
            </Link>
            <Link className="FooterLink" to="/sanctuary">
              <img
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/47/1a.jpg"
                alt=""
                width={"25px"}
              />
              Sanctuary
            </Link>
            <Link className="FooterLink" to="/about">
              <img
                src="https://cdn.iconscout.com/icon/free/png-128/about-help-info-information-details-ask-6003.png
                "
                alt=""
                width={"25px"}
              />
              About
            </Link>

            <Link className="FooterLink" to="/contact">
              <img
                src="https://cdn.iconscout.com/icon/free/png-128/contact-1817237-1538106.png
            "
                alt=""
                width={"25px"}
              />
              Contact
            </Link>
            <Link className="FooterLink" to="/feedback">
              <img
                src="https://thumbs.dreamstime.com/z/feedback-icon-writing-article-blog-logo-feedback-icon-writing-article-blog-logo-white-background-150648276.jpg
               "
                width={"25px"}
                alt=""
              />
              FeedBack
            </Link>
          </div>
        </div>
        <div className="footer2div">
          <div>
            <div className="footercontact3">
              <img
                src="https://i.imgur.com/IfgBhUu.png
                  "
                alt=""
                width={"25px"}
                height="25px"
              />
              <h6>Jaipur, Amer 302028</h6>
            </div>
            <div className="footercontact3">
              <a className="footercontact3" href="mailto:elephantegy@gmail.com">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-128/gmail-2981844-2476484.png
                  "
                  alt=""
                  width={"25px"}
                  height="25px"
                />
                <h6>elephantegy@gmail.com</h6>
              </a>
            </div>
            <div className="footercontact3">
              <a className="footercontact3" href="tel:+919024646308">
                <img
                  src="https://i.imgur.com/ti7H0Bd.png
          "
                  alt=""
                  width={"30px"}
                  height="30px"
                />
                <h6>+91 9024646308</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footerSocialMedia">
        <div className="aDivFooter">
        <a href="https://www.youtube.com/@nikasifgamer6146">
            <img
              src="https://i.imgur.com/nsG07I5.png
                  "
              alt=""
              width={"35px"}
            />
          </a>
          <a href="https://twitter.com/elephantegy">
            <img
              src="https://i.imgur.com/eYB5PbT.png
                  "
              alt=""
              width={"32px"}
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100093262869442">
            <img
              src="https://i.imgur.com/Vbd2Mz5.png
                  "
              alt=""
              width={"32px"}
            />
          </a>
          <a href="https://www.instagram.com/elephantegy/">
            <img
              src="https://i.imgur.com/85RbKaN.png
                  "
              alt=""
              width={"32px"}
            />
          </a>
          <a href="https://wa.me/+919024646308">
            <img
              src="https://i.imgur.com/C8MvhvI.png
                  "
              alt=""
              width={"35px"}
            />
          </a>
         
        </div>
      </div>
      <br />
      <section className="nameSection">
        <span
          style={{
            marginTop: "50px",
            color: "black",
            fontSize: "20px",
            background: "transparent",
          }}
        >
          created by --
          <a className="md" href="mailto:mdsa97087@gmail.com">
            {" "}
            Shamshad Shaikh
          </a>
        </span>
        <br />
        <div
          className="nameSection"
          style={{
            fontSize: "20px",
          }}
        >
          <span style={{ color: "black", background: "transparent" }}>
            Owner :-
          </span>{" "}
          <span
            style={{
              background: "transparent",
            }}
          >
            Asif Khan
          </span>
        </div>
      </section>

      <br />
    </section>
  );
}

export default Footer;
