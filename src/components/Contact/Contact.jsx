import React from "react";
import "./Contact.css";
import { IconBrandLinkedin, IconMail, IconBrandGithub } from "@tabler/icons";
import Contactform from "../Contactform/Contactform";

export default function Contact() {
  return (
    <div className="contact-container section-container">
      <h2 className="contact-title">Let's get in touch</h2>
      <p className="contact-subtitle">
        Reach out and let's start a conversation!
      </p>
      <ul className="contact-links">
        <li>
          <IconMail color="white" stroke={1} size={30} />
          <a
            href="mailto:contact@wongstephenk.com"
            target="_blank"
            rel="noreferrer"
          >
            contact@wongstephenk.com
          </a>
        </li>
        <li>
          <IconBrandLinkedin color="white" stroke={1} size={30} />
          <a
            href="https://www.linkedin.com/in/wongs/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/wongs/
          </a>
        </li>
        <li>
          <IconBrandGithub color="white" stroke={1} size={30} />
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            github.com/wongstephen
          </a>
        </li>
      </ul>
      <Contactform />
    </div>
  );
}
