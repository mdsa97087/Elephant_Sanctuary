import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import { homeImage } from "./HomeImage";
import Chat from "../Chat/Chat";

function Home() {
  return (
    <div className="Container">
      <div className="HomebcDiv">
        <h1 className="imageh1">
          “I have a memory like an <span className="elep">elephant</span>. I
          remember every
          <span className="elep">elephant</span> I’ve ever met.”
        </h1>
      </div>
      <div
        style={{
          width: "70vw",
          margin: "20px auto",
        }}
      >
        <h1>Services At Es</h1>
        <p>
          Es seeks to introduce inbound travellers to India showcasing its great
          hospitality, extreme geography, yummy food, kaleidoscopic culture,
          deep-rooted spirituality, charming souvenirs, photogenic chaos and
          love for animals. Let’s get you started!
        </p>
      </div>
      <div className="imgText">
        <div>
          <img
            className="imgDiv"
            src="https://www.elephantsanctuary.co.za/cache/widgetkit/gallery/1/africa-elephant3-ba95c5e42e.jpg
        "
            alt=""
          />
        </div>

        <div className="textDiv">
          <h1>Sanctuary</h1>
          <p
            style={{
              fontSize: "1.3rem",
              color: "#16FF00",
            }}
          >
            We have been recognised as #3 thing to do in India by Tripadvisor
            and proudly the only elephant night stay experience in India!
          </p>
          <p>
            Being up-close & personal with our elephants is a unique experience.
            We have created something special, unmatched, anywhere in the world.
            The effort we put into taking care of our gentle creatures makes our
            elephant home a must-visit for anyone travelling to India. The
            newest addition to our boutique of experiences, Elefantastic
            presents a first ever, night stay with elephants NEW! Enjoy camping
            with our permanent residents.
          </p>
          <button type="button" className="btn btn-primary">
            Know More
          </button>
        </div>
        <div className="textDiv">
          <h1>Tours</h1>
          <p>
            ‘Atithi devo bhava’, loosely translated in English ‘The guest is
            equivalent to God’. We’ve been blessed to have guests who swear by
            the experience we provide them. We at Elefantastic make a real
            effort to provide our guests an enjoyable travel experience without
            compromising on quality service at a good price. Our
            easy-to-customise itineraries and a consistent empathy towards guest
            requests makes Elefantastic’s Indian Tours different; giving
            visitors coming to India confidence they will have a fantastic time.
          </p>
          <button type="button" className="btn btn-primary">
            Know More
          </button>
        </div>
        <div>
          <img
            className="imgDiv"
            src="https://www.tripsavvy.com/thmb/HFHhckxaCusxo24ddBo47hTU23Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/181-5ac21deea18d9e003718ce05.jpg
          "
            alt=""
          />
        </div>
        <div>
          <img
            className="imgDiv"
            src="https://www.holidify.com/images/cmsuploads/compressed/pc-thailand-national-elephant-day-02_c8f437ad6b204f1ab74cc42e63c2ae5d_20180705211204.jpg
          "
            alt=""
          />
        </div>
        <div className="textDiv">
          <h1>I am ready for Elefantastic !</h1>
          <p>
            People travel to faraway places to watch, feel, taste and live in
            fascination, the kind of life they haven’t explored yet. In early
            2015, our founder – Rahul Sharma made it his personal mission to
            provide an enjoyable travel experience. Now that you’re here, we are
            excited to host you. Let’s help you plan your very own Elefantastic
            adventure! Magic awaits…
          </p>
          <button type="button" className="btn btn-primary">
            Contact Us
          </button>
        </div>
      </div>
      <br />
      <div>
        <h1>Elefantastic gallery</h1>
        <p>
          Enough said! Check out the photos of guests enjoying their
          Elefantastic experience. All the content below is sourced from real
          guests. The only thing missing here is YOU… For more awesomeness see
          our Happy Clients section.
        </p>
      </div>
      <div
        style={{
          gap: "30px",
        }}
      >
        {homeImage.map((e, src) => (
          <img
            style={{
              margin: "20px",
              borderRadius: "10px",
            }}
            src={e.src}
            alt=""
            width={300}
          />
        ))}
      </div>
      <Chat />
      <Footer />
    </div>
  );
}

export default Home;
