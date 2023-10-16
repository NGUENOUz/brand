import React from 'react';
import Header from './component/header/header';
import './App.css'
import Home from './component/home/home';
import About from './component/about/about';
import Skills from './component/skill/skill.jsx';
import Portfolio from './component/portfolio/portfolio';
import Contact from './component/contact/contact';
function App() {

  class Car extends React.Component {
    constructor(props){
      super(props)



    }

    allCar(){
    return(
      <>
      <div>
       <h1>Voici une bref presentation de nos voitures :</h1>
       <p>Nom :{this.props}</p>
       <p>marque :{this.props}</p>
       <p>auteur :{this.props}</p>
      </div>
     </>
    )
    }
  }


  return (
    <div className='app'>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Contact/>
        
    </div>
  );
}

export default App;
