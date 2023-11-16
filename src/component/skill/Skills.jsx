import React, { Component } from 'react'
import { useState } from 'react'
import Hot from '../data/hot_projet.jsx'
import './skill.css'
import './slide.css'


function Skills() {
   

  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    

    if (index >= (Hot.length-1)) {
      setIndex(0);
     
    }
    else{
      setIndex(index + 1);
    console.log("index"+index)
    
    }
  };

  const handlePreviewClick = () => {
    

    if (index <=0) {
      setIndex((Hot.length-1));
    }
    else{
      setIndex(index - 1);
    }
  };

  return (
    <> 
      <section className="feature-projet" id='Project'
          style={{
        
      }}
      
      >
        <h1>Featured Project</h1>

        <div className="hot-project">
          <div className="preview" onClick={handlePreviewClick}>
            <span> <img src="../assets/btn_preview.png" alt="" /> </span>
          </div>

               <div className="hot-container">

                      <div className="hot">
                      <div className="hot-gauche">
                      <img src={Hot[index].image} alt="image du projet en hot" />
                     </div> 

                     <div className="hot-droite">
                        <p className='categorie'>{Hot[index].categorie}</p>
                        <h2 className='hot-titre'>{Hot[index].titre}</h2>
                        
                        <p className='hot-description'>{Hot[index].description}</p>

                        <div className=" custom-btn btn-cv">
                          <span>Plus de Détails</span>
                        </div>
              </div>
                      </div>
                    
                    </div>

            
          <div className="Next" onClick={handleNextClick}>
            <span> <img src="../assets/btn_next.png" alt="" /> </span>
          </div>        
                

                 
               </div>


        </section>

      <section className="skills" id='Skill'>
         
       
          <div className="gauche">
            <h1>Mes compétences </h1>
            <h3>professionel</h3>
            <p className="">
                  J’utilise facebook ads pour creer des publiciter et gerer des communauter facebook
                </p>
          </div>


          <div className="droite">
          <h3>Technique</h3>
          <div className="box">
      <div className="group">
        <div className="overlap">
          <div className="overlap-group">
            <div className="ellipse" />
            <img className="img" alt="Ellipse" src="./assets/meta.png" />
            <img className="ellipse-2" alt="Ellipse" src="./assets/css3.png" />
            <img className="ellipse-3" alt="Ellipse" src="./assets/figma.png" />
            <div className="overlap-group-wrapper">
              <div className="div">
                <img className="ellipse-4" alt="Ellipse" src="image.png" />
                <p className="text-wrapper">
                  J’utilise facebook ads pour creer des publiciter et gerer des communauter facebook
                </p>
              </div>
            </div>
          </div>
          <img className="ellipse-5" alt="Ellipse" src="./assets/git.png"/>
          <img className="ellipse-6" alt="Ellipse" src="./assets/chatgpt.png"/>
        </div>
        <img className="ellipse-7" alt="Ellipse" src="./assets/wordpress.png" />
        <img className="ellipse-8" alt="Ellipse" src="./assets/postman.png"/>
        <img className="ellipse-9" alt="Ellipse" src="./assets/photoshop.png"/>
        <div className="ellipse-wrapper">
          <img className="ellipse-10" alt="Ellipse" src="./assets/React.png" />
        </div>
      </div>
    </div>
          </div>
      
      </section>
  </>
  )
}

export default Skills
