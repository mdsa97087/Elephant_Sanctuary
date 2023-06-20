import React from "react";

function ChatForm() {
  return (
    <div>
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
        <div>
          <label htmlFor="">Date</label>
          <input
            className="contactinput"
            type="date"
            name="Date"
            placeholder="Date"
          />
        </div>

        <select name="plan Your Trip" id="" className="contactinput">
          <option value="">Select Your Tour</option>
          <option value="">Heritage Walk Jaipur</option>
          <option value="">Jaipur Day Tour</option>
        </select>
        <textarea
          className="contactinput"
          name="message"
          type="text"
          id=""
          cols="20"
          rows="3"
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
          Book Now
        </button>
      </form>
    </div>
  );
}

export default ChatForm;
