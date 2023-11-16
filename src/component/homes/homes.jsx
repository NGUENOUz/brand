import React, { useState } from 'react'
import Headers from '../headers/headers'
import './homes.css'
import {useTypewriter , Cursor} from 'react-simple-typewriter';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function Homes() {
    const [typeEffect] = useTypewriter({
        words: ['Developpeur web','blogeur','Marketteur','UI/UX Designer','freelancer'],
        loop:{},
        typeSpeed:70,
        deleteSpeed:70
      })

    const [counterOn , setConterOn]=useState(false)  


  return (
<section className='homes'>
    <Headers/>
   <div className="homes-container">
   <div className="left">
    <p><span className='crochet'>"</span><br />Il y'a rien de plus beua que de <br /> travailler avec passion </p>
   </div>
    <div className="center">
    <div className="part1">
        <h1>je m'appele <span>Wilfried NGUENOU DZOMEU</span></h1>
        <h1>{typeEffect} <Cursor/></h1>
    </div>
    <div className="part2">
        <div className="semi-cercle">
            <img src="../assets/v1.png" alt="" />
        </div>
    </div>
    <div className="part3">
        <button>En savoir plus</button>
    </div>
    </div>

    <div className="right">
        <div className="first">
        <div className="star">
            <img src="../assets/etoile.png" alt="note" />
            <img src="../assets/etoile.png" alt="note" />
            <img src="../assets/etoile.png" alt="note" />
            <img src="../assets/etoile.png" alt="note" />
            <img src="../assets/etoile.png" alt="note" />
        </div>
         <ScrollTrigger onEnter={()=>setConterOn(true)} onExit={()=>setConterOn(false)}>
         <h2>+{counterOn && <CountUp start={0} end={50} delay={0} duration={4}></CountUp>}k Followers</h2>
         </ScrollTrigger>
        </div>


        <div className="segond">
            <button>Play</button>
        </div>
    </div>
   </div>
</section>
  )
}

export default Homes
