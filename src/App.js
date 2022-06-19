import React, { useState } from 'react';
import Nav from './components/Nav';
//import About from './components/About';
import Project from './components/Project';
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
    </div>
  );
}

export default App;
