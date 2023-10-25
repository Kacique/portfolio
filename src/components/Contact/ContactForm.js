import React, { useState, useEffect } from "react";

import NavBar from "../Desktop/NavBar";
import MobileNavBar from "../Mobile/MobileNavBar";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to the backend here
  };

  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    // Add a listener to update the isMobile state when the window is resized.
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <MobileNavBar /> : <NavBar />}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="input-field"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <textarea
          className="textarea-field"
          placeholder="Your message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
