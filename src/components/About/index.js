import React from 'react';

function About() {
  return (
    <section class="bio-section">
      <div class="bio-img">
        <img src={require("../../assets/pic-of-madi.jpg")} alt="Madi by some flowers"></img>
      </div>
      <div>
      <h1 id="about">Nice to Meet You!</h1><br></br>
      <p>
        My name is Madi and I'm a graduate from the University of South Dakota with a B.S. degree in Chemistry 
        and minors in Math and Education. A couple years have passed since then, and now I'm a new graduate from the University 
        of Arizona's coding bootcamp for Full-Stack Web Development! 
        <br></br> 
        <br></br>
        You might be wondering... why web development? 
        <br></br> 
        <br></br>
        I've always loved learning and taking on new challenges-but it has taken me a little longer to find a career 
        path that fulfills that love while simultaneously being something I'm passionate about. I'm excited to share after
         weeks upon weeks of arguably the busiest and best time of my life, I've learned so much, connected with so many 
         new and seasoned developers, and it's safe to say I found what I've been looking for.
        </p>
        </div>
    </section>
  );
}

export default About;