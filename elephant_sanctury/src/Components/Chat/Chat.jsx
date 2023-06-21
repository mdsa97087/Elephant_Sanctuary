import React, { useState } from "react";
import "./Chat.css";
import ChatForm from "./ChatForm";

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
            ariaLabel="Close"
          ></button>
          <br />
          <ChatForm />
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
