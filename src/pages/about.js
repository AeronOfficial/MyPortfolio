import React from 'react';


function About() {
  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="about-img">
          <img src="/aeron.jpg" alt="Profile" />
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <h2>Welcome</h2>
          <p>I'm a student developer who loves building websites. I'm studying at PHINMA Araullo University.</p>
          <h3>What I Do</h3>
          <p>I like learning new things and building apps that help people.</p>
          <h3>My Skills</h3>
          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>Java</span>
            <span>PHP</span>
            <span>MySQL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
