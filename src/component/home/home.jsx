import React from 'react'
import './home.css'
import Header from '../header/header'

function Home() {
  return (
    <div>
     <div className="home-container" style={{backgroundImage:'../assets/BG.jpg',backgroundSize:'cover',height:'100vh',paddingTop:'8%'}}>
      {/* <Header/> */}
       <div className="part-home">
        <div className="gauche">
            <span className="me">I'm</span>
            <h1 className="name">Wilfried NGUENOU DZOMEU</h1>
            <h2 className="pro"></h2>

            <div className="tel">
                <div className="space">
                    <img src="../assets/gmail.png" alt="Mon compte gmail" />
                    <p>ContactWD237@gmail.com</p>
                </div>
                <div className="space">
                    <img src="../assets/phone.png" alt="Mon numero de telephone" />
                    <p>678378976</p>
                </div>
                <div className="space">
                    <img src="../assets/location.png" alt="Mon compte gmail" />
                    <p>Douala, Cameroun</p>
                </div>
            </div>
            <div className="network">
                <li><a href=""><img src="../assets/facebook.png" alt="Ma page facebook" /></a></li>
                <li><a href=""><img src="../assets/youtube.png" alt="Ma chaine youtube" /></a></li>
                <li><a href=""><img src="../assets/linkedin.png" alt="Mon compte linkedlin" /></a></li>
            </div>
        </div>
        <div className="droite">
            <div className="fil-container">
              <img src="../assets/profil.png" alt="me" />
            </div>
           
        </div>
       </div>
     </div>
    </div>
  )
}

export default Home
