import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import Homes from './component/homes/homes';
import Skills from './component/skill/Skills';
import About from './component/about/about';
import Contact from './component/contact/contact';
function App() {



  return (
    <div className='app'>
     <Homes/>
     <About/>
     <Skills/>
     <Contact/>
        
    </div>
  );

}




export default App;
