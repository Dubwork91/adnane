import { Component } from "react";
import adn1 from "../../assets/images/adn.jpg";
import Aos from "aos";
import "aos/dist/aos.css";


import "./style.css";

class About extends Component {

  componentDidMount(){
    Aos.init({duration:2000});
}
  render() {
    return (
      <>
    
        <section id="about">
          {/* <h1>Qui suis-je?</h1> */}
          <h3  class="animate-carac" data-aos="fade-down"> Qui suis-je ?</h3>
          <h2 data-aos="fade-up">En quelques lignes ...</h2>
          <div className="row">
            <div className="profile"  data-aos="fade-right">
              <img src={adn1} alt="FENNIR Adnane" width="100%"  />
              <div className="technos">
            <a href="https://www.instagram.com/dubwork.prod" target="_blank"> <i class="bi bi-instagram"></i></a> 
             <a href="https://github.com/Dubwork91" target="_blank"><i class="bi bi-github"></i></a> 
             <a href="https://www.linkedin.com/in/adnane-fennir" target="_blank"><i class="bi bi-linkedin"></i></a> 
 
              </div>
            </div>
            <div className="description"  data-aos="fade-left">
              <div className="desc-header">
              <div class="snippet" data-title=".dot-floating">
          <div class="stage">
            <div class="dot-floating"></div>
          </div>
        </div>
              </div>
              <div className="desc-body">
                <h3>Salut :)</h3>
                <p>
                  Je suis Adnane , titulaire d'un diplôme d'ingénieur en automatisme et informatique industrielle.
                  En débutant par responsable maintenance , et en concluons avec ingénieur méthodes , j'ai décidé de switcher carrément vers le domaine qui me passionne le plus , qui n'est rien d'autre que le fameux Informatique .
                  Mes qualités humaines comme le relationnel , l’écoute, l’autonomie et la persévérance ont été des atouts qui m’ont aidé à atteindre plus facilement les objectifs. Mes expériences fut enrichissante sur le plan professionnel et surtout humain. Puisque je suis une personne actif qui apprécie toujours la création ainsi que le développement , j'ai décidé de faire une conversion professionnelle , pour devenir un développeur Full-Stack.

                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
