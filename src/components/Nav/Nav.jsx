import React, { useState } from "react";
import { IconMenu2 } from "@tabler/icons";
import { Link } from "react-router-dom";
import Links from "../Link/Links";

import "./Nav.css";

export default function Nav() {
  const [dropdown, setDropdown] = useState(false);
  function handleClick() {
    setDropdown(!dropdown);
  }
  return (
    <header>
      <div className="desktop-header">
        <Links cname="navigation" />
        <div className="nav-contact">
          <Link to="/contact" alt="Contact">
            <button type="link" className="contact-btn">
              Contact
            </button>
          </Link>
        </div>
      </div>

      <div className="mobile-header">
        <IconMenu2 onClick={handleClick} />
        {dropdown && <Links cname="mobile-nav" />}
      </div>
    </header>
  );
}
