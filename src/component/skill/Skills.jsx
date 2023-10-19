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
        backgroundImage: `url("assets/fond1.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:"100vh",
        color:"white",
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
                        <p>{Hot[index].categorie}</p>
                        <h1 className='hot-titre'>{Hot[index].titre}</h1>
                        
                        <p className='hot-description'>{Hot[index].description}</p>

                        <div className="btn-plus">
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
               <div className="Technical">
                <h1>Technical skill</h1>
                <div className="T1">
                   <div className="progress-bar">
                    <div className="name">
                      <span>Html5</span>
                      <span>90%</span>
                    </div>
                    <div className="bar-container">
                      <div className="percentage-bar" style={{width:'90%'}}>

                      </div>

                    </div>
                   </div>
                   <div className="progress-bar">
                    <div className="name">
                      <span>Css3</span>
                      <span>80%</span>
                    </div>
                    <div className="bar-container">
                      <div className="percentage-bar" style={{width:'80%'}}>

                      </div>

                    </div>
                   </div>
                   <div className="progress-bar">
                    <div className="name">
                      <span>Java script</span>
                      <span>70%</span>
                    </div>
                    <div className="bar-container">
                      <div className="percentage-bar" style={{width:'70%'}}>

                      </div>

                    </div>
                   </div>
                   <div className="progress-bar">
                    <div className="name">
                      <span>React js</span>
                      <span>60%</span>
                    </div>
                    <div className="bar-container">
                      <div className="percentage-bar" style={{width:'60%'}}>

                      </div>

                    </div>
                   </div>

                   <div className="progress-bar">
                    <div className="name">
                      <span>ASP.net</span>
                      <span>60%</span>
                    </div>
                    <div className="bar-container">
                      <div className="percentage-bar" style={{width:'60%'}}>

                      </div>

                    </div>
                   </div>
                   <div className="progress-bar">
                    <div className="name">
                      <span>Wordpress</span>
                      <span>60%</span>
                    </div>
                    <div className="bar-container">
                      <div className="percentage-bar" style={{width:'60%'}}>

                      </div>

                    </div>
                   </div>
                </div>

                <div className="T1">
                   <div className="progress-bar">
                    <div className="name">
                      <span>Facebook ADS</span>
                      <span>80%</span>
                    </div>
                    <div className="bar-container">
                      <div className="percentage-bar" style={{width:'80%'}}>

                      </div>

                    </div>
                   </div>
                   <div className="progress-bar">
                    <div className="name">
                      <span>Photoshop</span>
                      <span>70%</span>
                    </div>
                    <div className="bar-container">
                      <div className="percentage-bar" style={{width:'70%'}}>

                      </div>

                    </div>
                   </div>
                   <div className="progress-bar">
                    <div className="name">
                      <span>c#</span>
                      <span>50%</span>
                    </div>
                    <div className="bar-container">
                      <div className="percentage-bar" style={{width:'50%'}}>

                      </div>

                    </div>
                   </div>
                   <div className="progress-bar">
                    <div className="name">
                      <span>React natif</span>
                      <span>50%</span>
                    </div>
                    <div className="bar-container">
                      <div className="percentage-bar" style={{width:'50%'}}>

                      </div>

                    </div>
                   </div>

                   <div className="progress-bar">
                    <div className="name">
                      <span>Kotlin</span>
                      <span>40%</span>
                    </div>
                    <div className="bar-container">
                      <div className="percentage-bar" style={{width:'40%'}}>

                      </div>

                    </div>
                   </div>
                   <div className="progress-bar">
                    <div className="name">
                      <span>Spring Boot</span>
                      <span>40%</span>
                    </div>
                    <div className="bar-container">
                      <div className="percentage-bar" style={{width:'40%'}}>

                      </div>

                    </div>
                   </div>
                </div>

               </div>
        </div>

        <div className="droite">
                <h1>Toools of work</h1>

                <div className="tools-cart-container">
                  <div className="tools-cart" >
                      <img src="../assets/vs_code.png" alt="" />
                      <span>Visual studio code</span>
                  </div>
                  <div className="tools-cart">
                     <img src="../assets/figma.png" alt="" />
                     <span>Figma</span>
                  </div>
                  <div className="tools-cart">
                     <img src="../assets/my_sql.png" alt="" />
                     <span>My sql</span>
                  </div>
                  <div className="tools-cart">
                    <img src="../assets/photoshop.png" alt="" />
                    <span>Photoshop</span>
                  </div>
                  <div className="tools-cart">
                    <img src="../assets/canva.png" alt="" />
                    <span>Canvas</span>
                  </div>
                  <div className="tools-cart">
                     <img src="../assets/postman.png" alt="" />
                     <span>postman</span>
                  </div>
                  <div className="tools-cart">
                  <img src="../assets/android_studio.png" alt="" />
                    <span>Android studio</span>
                  </div>
                  <div className="tools-cart">
                  <img src="../assets/wordpress.png" alt="" />
                      <span>Wordpress</span>
                  </div>
                  <div className="tools-cart">
                  <img src="../assets/vs.png" alt="" />
                     <span>Visual studio </span>
                  </div>
                  <div className="tools-cart">
                  <img src="../assets/git.png" alt="" />
                     <span>Git hub </span>
                  </div>
                  <div className="tools-cart">
                  <img src="../assets/meta.png" alt="" />
                     <span>Facebook ADS</span>
                  </div>
                  <div className="tools-cart">
                  <img src="../assets/chatgpt.png" alt="" />
                     <span>Chat GPT </span>
                  </div>
                </div>
        </div>
      </section>
  </>
  )
}

export default Skills
