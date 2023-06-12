import React from "react";
import Footer from "../Footer/Footer";

function Book() {
  return (
    <div className="Container1">
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
          <input
            className="contactinput"
            type="text"
            name="number"
            placeholder="Country"
          />
          <input
            className="contactinput"
            type="date"
            name="number"
            placeholder="Date"
          />
          <textarea
            className="contactinput"
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
              backgroundColor:'blue'
            }}
          >
            Book Now
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Book;
