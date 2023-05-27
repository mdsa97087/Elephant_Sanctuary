import React from "react";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <div
      style={{
        position: "relative",
        top: "100px",
        width: "80vw",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        <div
          style={{
            width: "500px",
            textAlign: "justify",
          }}
        >
          <p>
            Dear Guests, ​ This has come to our notice that Travel Agents,
            Tourist Guides and Drivers are misguiding naive tourists and getting
            the commission from there under the guise of Elefun and taking them
            to other elephant barns or homes. Kindly note, The Agents, Guides &
            Drivers are given a hefty commission from other elephant companies
            for this trickery. They are conning Tourists in the name of Elefun,
            and naturally not living up to the expectation and experience. If
            you are a tourist visiting Jaipur & want to enjoy the authentic
            Elefun experience, we urge you to be vigilant and BOOK ONLY through
            AFTAB (info@elefun.in) and no other middle man. Also note that
            walk-ins without prior bookings are not possible at Elefun. We hope
            to make your trip to India best one.
          </p>
        </div>
        <div>
          <div>
            <h6>Asif Khan</h6>
          </div>

          <div style={{
            display:'flex',
            gap:'20px'
          }}>
            <a href="tel:+919024646308">
              <button type="button" className="btn btn-primary">
                CALL
              </button>
            </a>
            <a href="https://wa.me/+919024646308">
              <button type="button" className="btn btn-primary">
                WHATSAPP
              </button>
            </a>
            <h5>+919024646308</h5>
          </div>
        </div>
      </div>
      <div className="">
        <form
          className="sendtext"
          action="https://getform.io/f/0f604800-34ab-4d25-b278-56f5b4399c53"
          method="POST"
        >
          <input
            className="contactinput"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="contactinput"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <input
            className="contactinput"
            type="number"
            name="number"
            placeholder="Your Number"
          />
          <textarea
            style={{
              border: "2px solid",
              borderRadius: "8px",
              padding: "15px",
              fontSize: "1.2rem",
            }}
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            style={{
              border: "2px solid",
              height: "50px",
              fontSize: "1.5rem",
              fontWeight: "700",
              borderRadius: "10px",
            }}
          >
            Book
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
