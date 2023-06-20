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
          margin: "50px 0px",
          justifyContent: "space-around",
          gap: "25px",
        }}
      >
        <div className="support">
          <a className="supportA" href="tel:+919024646308">
            <img
              src="https://i.gifer.com/Wc8C.gif
              "
              alt=""
              width={150}
              height={150}
            />
            <p className="supportA">+919024646308</p>
          </a>
        </div>
        <div className="support">
          <a className="supportA" href="mailto:elephantegy@gmail.com">
            <img
              src="https://i.gifer.com/Anm7.gif
              "
              alt=""
              width={150}
              height={150}

            />
            <p className="supportA">elephantegy@gmail.com</p>
          </a>
        </div>
        <div className="support">
          <a className="supportA" href="https://wa.me/+919024646308">
            <img
              src="https://media.tenor.com/-QZ6G1KAOcsAAAAM/whatsapp-logo-whatsapp.gif
              "
              alt=""
              width={150}
            />
            <p className="supportA">Whatsapp</p>
          </a>
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
              backgroundColor: "blue",
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
