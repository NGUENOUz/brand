import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import Homes from './component/homes/homes';
import Skills from './component/skill/Skills';
import About from './component/about/about';
import Contact from './component/contact/contact';
import Blog from './component/blog/blog';
import Contacts from './component/contacts/contacts';
import Footer from './component/footer/footer';
import Experience from './component/experience/experience';
function App() {



  return (
    <div className='app'>
     <Homes/>
     <About/>
     <Skills/>
     <Experience/>
     <Contacts/>
     <Footer/>
        
    </div>
  );

}




export default App;
