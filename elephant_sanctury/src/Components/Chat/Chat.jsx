// import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import "./Chat.css";

function Chat() {
  const [state, setstate] = useState(false);

  function click() {
    setstate(true);
  }

  return (
    <>
      {state ? (
        <div className="chatDiv">
          <button
            onClick={() => setstate(false)}
            type="button"
            className="btn-close text-reset"
            aria-label="Close"
          ></button>
          <br />
          <form
            className="sendtext"
            action="https://getform.io/f/0f604800-34ab-4d25-b278-56f5b4399c53"
            method="POST"
          >
            <input
              style={{
                height: "50px",
              }}
              className="contactinput"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              style={{
                height: "50px",
              }}
              className="contactinput"
              type="email"
              name="email"
              placeholder="Your Email"
              required
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
                backgroundColor: "blue",
              }}
            >
              Book
            </button>
          </form>
        </div>
      ) : (
        <img
          onClick={click}
          className="chat"
          src="https://media2.giphy.com/media/v1.Y2lkPTQyMzA0NmQwZjlkNDIzMzQ4MzQ4YzY0NjQ2YmJiMzQyMTU5MTkxOTVlM2YzM2VhNSZlcD12MV9naWZzX2dpZklkJmN0PXM/bBL2coaW4ji25dpBdN/200.gif
            "
          alt=""
          width={"120px"}
        />
      )}
    </>
  );
}

export default Chat;
