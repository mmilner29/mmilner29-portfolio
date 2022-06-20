import React, { useState } from 'react';
import Nav from './components/Nav';
//import About from './components/About';
import Project from './components/Project';
import Social from './components/Social';
import './App.css';

function App() {

  const [navCategories] = useState([
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Contact'},
    { name: 'Resume'}
  ]);
  const [currentCategory, setCurrentCategory] = useState(navCategories[0]);


  return (
    <div >
      <Nav
        navCategories={navCategories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>

    <main>
      <Project currentCategory={ currentCategory}></Project>
    </main>
    <footer>
      <Social></Social>
    </footer>
    </div>
  );
}

export default App;
