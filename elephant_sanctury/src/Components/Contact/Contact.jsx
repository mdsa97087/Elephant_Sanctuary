import React from "react";
import Footer from "../Footer/Footer";
import "./Contact.css";
import ChatForm from "../Chat/ChatForm";

function Contact() {
  return (
    <div>
      <div className="Container1">
        <iframe
          className="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.09175137565!2d75.8806318253207!3d26.995647226597843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db06ceab2c0a3%3A0xbfb6317a148072b7!2sHathi%20Gaon%2C%20Rajasthan%20302028!5e0!3m2!1sen!2sin!4v1685212581048!5m2!1sen!2sin"
          width="1200"
          height="500"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
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
                width={120}
                height={120}
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
                width={120}
                height={120}
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
                width={120}
              />
              <p className="supportA">Whatsapp</p>
            </a>
          </div>
        </div>
        <div className="">
          <ChatForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
