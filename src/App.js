import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import Home from './component/home/home';
import Skills from './component/skill/Skills';
import About from './component/about/about';
import Contact from './component/contact/contact';
function App() {



  return (
    <div className='app'>
     <Home/>
     <About/>
     <Skills/>
     <Contact/>
        
    </div>
  );

}




export default App;
