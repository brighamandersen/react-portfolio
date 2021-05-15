import React from "react";
import myBanner from "./assets/my-banner.png";
import profilePic from "./assets/profile-pic.jpg";

const Home = () => (
  <div class="content home-page">
    <h1>Home</h1>
    <p>
      Hi, my name is <strong>Brigham Andersen</strong>. I'm a student at Brigham
      Young University getting a Bachelor's of Science in Computer Science:
      Software Engineering and minoring in Business.
      <br />
      <br />
      I love solving the problem we hate most -- wasting time and money.
      <br />
      This passion drives my career, centered on using technology to boost
      business productivity.
      <br />
      I'm addicted to giving my all and am looking forward to combining that passion with my skills in software engineering and business to
      help you!
    </p>
    <img class="banner-pic" src={myBanner} alt="Personal Banner"/>
    <img class="profile-pic" src={profilePic} alt="Profile Picture"/>
  </div>
);

export default Home;
