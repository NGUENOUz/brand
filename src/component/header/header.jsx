import React from "react";
import { useEffect,useState } from "react";
import './header.css'

function Header() {


    
  const logo= "../assets/LOGO.png";

  const [menuOPen, setMenuOPen] = useState(false);

  const toggleMenu = () => {
    setMenuOPen(!menuOPen);
    
  };

  const OptionMenu = () => {

    return(
      <div className="options-menus">
      <div className="part-gauche">
          <ul>
          <li ><a href="" className='color1'>Home</a></li>
          <li><a href="" className='color1'>About</a></li>
          <li><a href="" className='color1'> projects</a></li>
          <li><a href="" className='color1'>skills</a></li>
          <li><a href="" className='color1'>Contact</a></li>
          <li><a href=""className='color1' >Contact</a></li>
          </ul>
      </div>
      <div className="part-droite">
          <div className="close" >X</div>
      </div>
     </div>
    )
  };


  return (
  <div className="header" id="header" >
    <div className="header-container">
      <div className="logo">
          <img src={logo} alt="Logo de WD" />
      </div>
      <div className="list">
          <ul className='options'>
              <li ><a href="" className='color1'>Home</a></li>
              <li><a href="" className='color1'>About</a></li>
              <li><a href="" className='color1'> projects</a></li>
              <li><a href="" className='color1'>Skills</a></li>
              <li><a href=""className='color1' >Contact</a></li>
          </ul>
      </div>
      <div className="whatsapp">
          <a href="">
              <img src="../assets/whatsapp.png" alt="" />
          </a>
      </div>
    </div>

    <div className="mobile-header">
      <div className="menus-gauche" onClick={toggleMenu}>
         <div className="trait" >
          <span className='trait1'></span>
          <span className='trait2'></span>
          <span className='trait3'></span>
         </div>
         {menuOPen && <OptionMenu />}
      </div>
      <div className="logo">
          <img src="../assets/LOGO.png" alt="Mon logo" />
      </div>
    </div>
  </div>
)

}

export default Header