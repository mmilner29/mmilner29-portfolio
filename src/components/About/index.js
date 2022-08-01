import React from 'react';

function About() {
  return (
    <section className="bio-section">
      <div className="bio-img">
        <img src={require("../../assets/pic-of-madi.jpg")} alt="Madi by some flowers"></img>
      </div>
      <div className="bio-text">
      <h2 id="about">Nice to Meet You!</h2><br></br>
      <p>
          My name is Madi and I'm a full-stack web developer with chemistry and education background and a passion for life-long learning. 
          Recently earned a certificate in full stack development from the University of Arizona, with skills in JavaScript, 
          CSS, MERN stack, and responsive web design. I'm known for being adaptable, communicative, and motivated to learn new 
          approaches and cutting-edge technologies. 
        </p>
        <br></br>
        <span id="why">Most recently...</span>
        <br></br>
        <br></br>
        <p>
          I've been working on a team of three for a MERN app that 
          allows users to create an account, post their lost pet on a map with pins, and connect with other users to find 
          their pet. I'm excited to utilize my unique background and skills to collaborate on a team to develop and improve 
          web applications.
        </p>
        </div>
    </section>
  );
}

export default About;