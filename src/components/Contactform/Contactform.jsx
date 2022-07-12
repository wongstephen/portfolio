import React from "react";
import "./Contactform.css";

export default function Contactform() {
  return (
    <form
      className="contact-form"
      action="https://formspree.io/f/moqroyky"
      method="POST"
    >
      <label for="contact-first">First Name *</label>
      <input
        type="text"
        placeholder=""
        id="contact-first"
        name="fname"
        required
      />

      <label for="contact-last">Last Name *</label>
      <input
        type="text"
        placeholder=""
        id="contact-last"
        name="lname"
        required
      />

      <label for="contact-email">Email *</label>
      <input
        type="email"
        placeholder=""
        id="contact-email"
        name="email"
        required
      />

      <label for="contact-phone">Phone</label>
      <input type="tel" placeholder="" id="contact-phone" name="phone" />

      <label for="contact-message">Message *</label>
      <textarea
        rows="4"
        cols="50"
        placeholder=""
        id="contact-message"
        name="text"
        required
      />
      <br />
      <button
        type="submit"
        className="contact-submit contact-btn"
        name="submit"
      >
        Send
      </button>
    </form>
  );
}
