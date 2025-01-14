import React from "react";
import "./Contact.css";

const Contact = () => (
  <div className="contact-container">
    <a
      href="https://ipfs.io/ipfs/QmeySH9R9wDHfNfVGhVYNJTqBLBC3eJQENLuwx2UdApW6J"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`${process.env.PUBLIC_URL}/img/contact/exchange.png`}
        alt="Exchange"
        className="contact-icon"
      />
    </a>
    <a
      href="https://ipfs.io/ipfs/QmYpqRZeGFLUTrrNzjW5LdUjHgFWonvmjjhaxyWxLd6CKF"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`${process.env.PUBLIC_URL}/img/contact/neoxa.png`}
        alt="Neoxa"
        className="contact-icon"
      />
    </a>
    <a
      href="https://ipfs.io/ipfs/QmS3W2FwFPv444ftyEp6xJUjAXRNuzELtcGPz2UzZe7Zpe"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`${process.env.PUBLIC_URL}/img/contact/pcg.png`}
        alt="Premier Card Grading"
        className="contact-icon"
      />
    </a>
    <a
      href="https://ipfs.io/ipfs/QmZMwUZka3ssmU3BgFBvB257SEjAR37qD8oCRGgMfPGsJk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`${process.env.PUBLIC_URL}/img/contact/trader.png`}
        alt="Trader"
        className="contact-icon"
      />
    </a>
  </div>
);

export default Contact;
