import React from "react";
import "./Skills.css";
import {
  IconBrandReactNative,
  IconBrandJavascript,
  IconBrandHtml5,
} from "@tabler/icons";

export default function Skills() {
  return (
    <div className="section-container">
      <h3 className="section-name">skills</h3>
      <img
        className="skills-img"
        alt="Futuristic Technology"
        src="https://bl6pap003files.storage.live.com/y4mn2VfjENtTuxR2BUx_hX4AD26b8Fv6fw0IGHwssN0HeqMGVDfAWkEMEsGoCtzkpWGRJGrL8EQFttuvEJ9-p7DKISiqaJk9O6Avpvyqvc8HGGORM_Jl308_GoIeZddASDmUnyk45IfBBp8gnEUTGas93yPt1YOwYHHmPgYKa17xpwt4-G8zoBJXBtFICWspWVO?width=640&height=427&cropmode=none"
      />
      <p class="skill-subtitle">
        I'm experienced with modern technologies to design and deploy
        applications to grow your business.
      </p>
      <ul className="skill-icon">
        <li>
          <span className="icon">
            <IconBrandReactNative size={28} stroke={1.5} />
          </span>
          <span> React JS</span>
        </li>
        <li>
          <span className="icon">
            <IconBrandJavascript size={28} stroke={1.5} />
          </span>
          <span> JavaScript</span>
        </li>
        <li>
          <span className="icon">
            <IconBrandHtml5 size={28} stroke={1.5} />
          </span>
          <span> HTML</span>
        </li>
        <li>
          <span className="icon">
            <i className="fa-brands fa-css3"></i>
          </span>
          <span> CSS</span>
        </li>
        <li>
          <span className="icon">
            <i className="fa-brands fa-node-js"></i>
          </span>
          <span> Node JS</span>
        </li>
        <li>
          <span className="icon">
            <i className="fa-brands fa-python"></i>
          </span>
          <span> Python</span>
        </li>
      </ul>
    </div>
  );
}
