import { Component } from "react";
import "./footer.css";



class Footer extends Component {

  render() {
    return (
      <>
        <footer>
          <div class="footer">
            <div class="row">
              <a href="https://www.instagram.com/dubwork.prod" target="_blank"> <i class="bi bi-instagram"></i></a>
              <a href="https://github.com/Dubwork91" target="_blank"><i class="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/adnane-fennir" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a href="https://www.facebook.com/Mamzkch" target="_blank"><i class="bi bi-facebook"></i></a> 
              <a href="https://soundcloud.com/adnane-fennir" target="_blank"><i class="bi bi-soundwave"></i></a> 

            </div>

            <div class="row">
              <ul>
                <li><a href="#contacts">Contact me</a></li>
                <li>  <a href="#about" >Qui suis-je ?</a></li>
                <li> <a href="#projects">Projets</a></li>
                <li>   <a href="#comp">Compétences</a></li>
                <li><a href="#experiences">Expérience</a></li>

              </ul>
            </div>

            <div class="row">
              Dubwork91 Copyright © 2022  - Tous les droits sont réservés || Créer Par :
            </div>
            <p class="start">
                <span class="end1">F</span><span class="middle1">ENNIR.ADNAN</span>
                <span class="middle2"><i class="bi bi-code-slash"></i></span><span class="end2">E</span>
              </p>

          </div>
        </footer>
      </>
    );
  }
}

export default Footer;




