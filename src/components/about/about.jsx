import { Component } from "react";
import adn1 from "../../assets/images/adn.jpg";
import Aos from "aos";
import "aos/dist/aos.css";


import "./style.css";

class About extends Component {

  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  render() {
    return (
      <>

        <section id="about">
          <h3 class="animate-carac" data-aos="fade-down"> Qui suis-je ?</h3>
          <h2 data-aos="fade-up">En quelques lignes ...</h2>
          <div className="row">
            <div className="profile" data-aos="fade-right">
              <img src={adn1} alt="FENNIR Adnane" width="100%" />
              <div className="technos">
                <a href="https://www.instagram.com/dubwork.prod" target="_blank"> <i class="bi bi-instagram"></i></a>
                <a href="https://github.com/Dubwork91" target="_blank"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/adnane-fennir" target="_blank"><i class="bi bi-linkedin"></i></a>

              </div>
            </div>
            <div className="description" data-aos="fade-left">
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
                  Je m'appelle Adnane , titulaire d'un diplôme d'ingénieur en automatisme et informatique industrielle.
                  En débutant ma carrière dans un rôle de responsable maintenance , et en enchaînant par la suite dans un rôle d'ingénieur méthodes, J'ai décidé de me reconvertir vers un domaine qui me passionne depuis toujours.
                  Mon aisance relationnelle, ma capacité d'écoute, mon sens de l'autonomie et de persévérance ont été les atouts qui m'ont permis d'atteindre mes objectifs. Mes expériences passées ont été enrichissante sur le plan personnelle et professionnelle, elle ont stimulées ma soif de challenge et d'innovation que je projette, comme une sorte d'évidence, à travers ma reconversion cible vers le métier de développeur fullstack.

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
