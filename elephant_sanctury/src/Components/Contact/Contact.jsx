import React from "react";
import Footer from "../Footer/Footer";
import "./Contact.css";

function Contact() {
  return (
    <div className="Container1">
      <iframe
        className="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.09175137565!2d75.8806318253207!3d26.995647226597843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db06ceab2c0a3%3A0xbfb6317a148072b7!2sHathi%20Gaon%2C%20Rajasthan%20302028!5e0!3m2!1sen!2sin!4v1685212581048!5m2!1sen!2sin"
        width="1200"
        height="500"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "60px",
          margin: "50px 0px",
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
        <div
          style={{
            textAlign: "left",
          }}
        >
          <div>
            <h6>Asif Khan</h6>
          </div>

          <br />
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <h5>+919024646308</h5>

            <a href="tel:+919024646308">
              <button type="button" className="btn btn-primary">
                CALL
              </button>
            </a>
            <a href="https://wa.me/+919024646308">
              <button type="button" className="btn btn-success">
                WHATSAPP
              </button>
            </a>
          </div>
          <br />
          <div>
            <a href="mailto:elephantegy@gmail.com">
              <h5>elephantegy@gmail.com</h5>
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <form
          className="sendtext"
          // action="https://getform.io/f/24075b61-a48c-4ada-82b5-1effda7b893c"
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
            type="text"
            name="number"
            placeholder="Your Number"
          />
          <input
            className="contactinput"
            type="text"
            name="Country"
            placeholder="Country"
          />
          <input
            className="contactinput"
            type="date"
            name="Date"
            placeholder="Date"
          />
          <textarea
             className="contactinput"
            name="message"
            type="text"
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
              backgroundColor:'blue'
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
