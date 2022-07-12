import React from "react";
import "./Link.css";
import { Link } from "react-router-dom";
export default function Links(props) {
  return (
    <nav>
      <ul className={`${props.cname}`}>
        <li>
          <Link className="link" to="/" alt="Home">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/" alt="About">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/" alt="Portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact" alt="Contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
