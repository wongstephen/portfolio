import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="section-container">
      <div className="hero-container">
        <h1 className="hero-title">
          Hi, I'm Stephen.
          <br />
          Your Next
          <br />
          Software
          <br />
          Engineer
          <br />
        </h1>
        <div className="break"></div>
        <h2 className="hero-subtitle">
          As a developer, my priority is actively listening and understanding
          the stakeholder's needs and goals to achieve sucess.
        </h2>
        <img
          src="https://bl6pap003files.storage.live.com/y4mm_Z1qALGDMCNLI9-Vr9F_YIKqNqRPlrSeSgyca1DkN-fZ4GDqqCWNaetXEafeF86hiBb6GJQvSynGKgLSH1Kl7n-36cOf1f053GI-LWQv4iFmU-m_aCBaLWIW8lShwfCGNTryw0vvRnQ69uHC-3D0mBWj5K3NUYQu03H9SFBZ3St1yKevx0ZZCq2hyQc8GLk?width=640&height=427&cropmode=none"
          className="hero-image"
          alt="Whiteboard drawing"
        />
      </div>
    </div>
  );
}
