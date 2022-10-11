import { Component } from "react";
import "./contact.css";
import cont from "../../assets/images/logos/contactme.png";
import Aos from "aos";
import "aos/dist/aos.css";
import validator from 'validator'

class Contact extends Component {
  componentDidMount(){
    Aos.init({duration:2000});
}
  render() {
    
    return (
      <>


    <section id="contacts">
    <h3 class="animcar" data-aos="fade-down">Contact</h3>
          <section id="contme">
      <div className="row">
        <div className="description"  data-aos="fade-right">
          <div className="desc-header">
          <div class="snippet" data-title=".dot-floating">
      <div class="stage">
        <div class="dot-floating"></div>
      </div>
    </div>
          </div>
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="Votre Nom" />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="Adresse mail de contact"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="Numéro de contact"/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="Message"/>
            </div>
            <div class="app-form-group buttons">
              <a href="https://dubwork91.github.io/adnane/"  ><button type="submit" class="app-form-button">Envoyer</button></a>
              
            </div>
          </div>
          
        </div>
        <div className="profile" data-aos="fade-left">
        <div className="technos">
            <a href="https://www.instagram.com/dubwork.prod" target="_blank"> <i class="bi bi-instagram"></i></a> 
             <a href="https://github.com/Dubwork91" target="_blank"><i class="bi bi-github"></i></a> 
             <a href="https://www.linkedin.com/in/adnane-fennir" target="_blank"><i class="bi bi-linkedin"></i></a> 
             <a href="https://www.facebook.com/Mamzkch" target="_blank"><i class="bi bi-facebook"></i></a> 
              </div>
          <img src={cont} alt="Cont" width="100%"  />
        </div>
      </div>
    </section>
    </section>


      </>
    );
  }
}

export default Contact;
