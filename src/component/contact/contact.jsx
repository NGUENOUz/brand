import React, { useState } from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

function Contact() {

  const [mailError,setMailError]=useState(false);
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
       
    let User_email= document.forms["form"]["User_first_name"].value;
    if(User_email==""){
      setMailError(!mailError)
    }
    else{
      alert(User_email)
    }

    emailjs.sendForm('service_0nip0ds',
     'template_3lczlhh',
      form.current,
       'qlkcyCJt1wVMZOuPF')


      .then((result) => {
          console.log(result.text);
          console.log("message envoyer")
      }, (error) => {
          console.log(error.text);
      });
  };

  const Error=() => {
    return(
      <div className="error" 
      style={{padding:"1%",color:"white",
      borderRadius:"4%",boxShadow:"2px 2px 9px Red",
      width:"30%",
      transition:"ease-in-out  12s",
      textAlign:"center"
     

      
      }}>
        Tout les champs sont obligatoire
      </div>
    )
  }


  return (
    <div>
      <section className="contact" id='Contact'
      
      style={{
        backgroundImage: `url("assets/fond1.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:"auto",
        color:"white",
      }}
      > <h1>Contact me</h1>   {mailError && <Error/>}
        <div className="container">
        <div className="gauche">
            <div className="adresse">
                <div className="icon">
                  <img src="../assets/ville.png" alt="location" />
                </div>
                <div className="info">
                    <h3>Douala , Cameroun</h3>
                </div>
            </div>
            <div className="adresse">
                <div className="icon">
                  <img src="../assets/mail.png" alt="location" />
                </div>
                <div className="info">
                    <h3> <span>ContactWD237@gmail.com</span></h3>
                </div>
            </div>

            <div className="adresse">
                <div className="icon">
                  <img src="../assets/tel.png" alt="location" />
                </div>
                <div className="info">
                    <h3> <span>678-37-89-76</span></h3>
                </div>
            </div>
            <div className="more-info">
                <p>You can follow me on my social network</p>
                <div className="social-link">
                    <a href="https://www.facebook.com/monnouveauguide/"><img src="../assets/facebook.png" alt="" /></a>
                    <a href="https://www.youtube.com/channel/UCBg4mnLqcqHk_zaeEKi6ctg"><img src="../assets/youtube.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/wilfried-dzomeu-b060771b9/"><img src="../assets/linkedin.png" alt="" /></a>
                </div>
            </div>
         </div>

         <div className="droite">
            <form ref={form} onSubmit={sendEmail} name='form'>
                <input type="text" name="User_first_name" id="first_name" placeholder='Enter your first name' />
                <input type="text" name="User_last_name" id="Last_name" placeholder='Enter your Last Name' />
                <input type="text" name="User_email" id="Email" placeholder='Enter your Email' />

                <textarea name="message" id="message" cols="30" rows="10" placeholder='message : '></textarea>

                <button type="submit">Send Message</button>
            </form>
         </div>
        </div>
        <footer>
        <p>Wilfried Dzomeu All right reserved </p>
      </footer>
      </section>
     
    </div>
  )
}

export default Contact
