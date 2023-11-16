import React from 'react'
import './headers.css'
function Headers() {

  const logo= "../assets/LOGO.png";


  return (
   <header>
    <nav>
      <ul>
        <li><a href="" >Acceuil</a></li>
        <li><a href="">A propos</a></li>
        <li><a href="">Compétences</a></li>
        <li><a href="">Projets</a></li>
        <li><a href=""className='Logo'>WD</a></li>
        <li><a href="">Expérience</a></li>
        <li><a href="">Temoignage</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
   </header>
  )
}

export default Headers
