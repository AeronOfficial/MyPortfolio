import React from 'react';
import homepic from '../img/aeron.jpg';
function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>I'm a BSIT student, 3rd year from Araullo University.</p>
        <img src ={homepic} className='homepic'></img>
    </div>
  );
}

export default About;
