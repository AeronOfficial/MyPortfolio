import React from 'react';
import './Project.css'; // Link to the CSS file

function Project() {
  return (
    <div className="project">
      <h2>My Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <img src="/alerthero.jpg" alt="Alert Hero Project Screenshot" />
          <h3>Alert Hero</h3>
          <p>
            Fast and effective communication can prevent panic,
            minimize damage, and save lives.
          </p>
          <a href="https://alerthero.south.it.com/" class="button-link" target="_blank">Visit AlertHero</a>
        </div>

        <div className="project-card">
          <img src="/codemasters.png" alt="CodeMasters Project Screenshot" />
          <h3>CodeMasters E-Learning Platform</h3>
          <p>
            A modern e-learning platform designed to enhance coding education through interactive
            modules and real-time feedback.
          </p>
          <a href="https://codemasters.guru/" class="button-link" target="_blank">Visit CodeMasters</a>


        </div>
      </div>
    </div>
  );
}

export default Project;
