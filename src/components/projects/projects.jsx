import { Component } from "react";
import "./style.css";
import insta from "../../assets/images/projet/p2.jpg";
import bmi from "../../assets/images/projet/p3.jpg";
import todo from "../../assets/images/projet/p6.jpg";
import citation from "../../assets/images/projet/p1.png";
import somme from "../../assets/images/projet/p4.jpg";
import devinette from "../../assets/images/projet/p5.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

class Projects extends Component {

  componentDidMount(){
    Aos.init({duration:2000});
}
  render() {
    return (
      <>
        <section id="projects" >
          <h2  class="animate-carac" data-aos="fade-down">Projets</h2>
          <div className="row" data-aos="fade-up">
            <div className="item" >
              <div>
                <img src={insta} alt="insta" />
                <h3>Instagram Cloner</h3><br />
                <p>Une interface qui génére le dark/light mode , avec le stockage des nombres de like et dislike</p>
              </div>
              <div className="item-links">
                <div>
                  <a
                    href="https://dubwork91.github.io/Instagram/"
                    target="_blank"
                  >
                Exécution
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/Dubwork91/Instagram"
                    target="_blank"
                  >
                    Lien Github
                  </a>
                </div>
              </div>
            </div>
            <div className="item" >
              <div>
                <img src={bmi} alt="bmi" />
                <h3>BMI-Calculator</h3><br />
                <p>Une interface qui génére le dark/light mode , avec le stockage des nombres de like et dislike</p>
              </div>
              <div className="item-links">
                <div>
                  <a href="https://dubwork91.github.io/BMI-Calculator/" target="_blank">
                  Exécution
                  </a>
                </div>
                <div>
                  <a href="https://github.com/Dubwork91/BMI-Calculator" target="_blank">
                  Lien Github
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div>
                <img src={todo} alt="todo" />
               <h3>Todo List</h3><br />
                <p>Une interface qui génére le dark/light mode , avec le stockage des nombres de like et dislike</p>
              </div>
              <div className="item-links">
                <div>
                  <a href="https://dubwork91.github.io/Devinette/" target="_blank">
                  Exécution
                  </a>
                </div>
                <div>
                  <a href="https://github.com/Dubwork91/Devinette" target="_blank">
                  Lien Github
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div className="row">
          <div className="item">
              <div>
                <img src={citation} alt="citation" />
                <h3>Générateur de citations</h3><br />
                <p>Une interface qui génére le dark/light mode , avec le stockage des nombres de like et dislike</p>
              </div>
              <div className="item-links">
                <div>
                  <a
                    href="https://dubwork91.github.io/Citations/"
                    target="_blank"
                  >
                Exécution
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/Dubwork91/Citations"
                    target="_blank"
                  >
                    Lien Github
                  </a>
                </div>
              </div>
            </div>

            <div className="item">
              <div>
                <img src={somme} alt="somme" />
                <h3>Jeux de devinette</h3><br />
                <p>Une interface qui génére le dark/light mode , avec le stockage des nombres de like et dislike</p>
       
              </div>
              <div className="item-links">
                <div>
                  <a
                    href="https://dubwork91.github.io/Citations/"
                    target="_blank"
                  >
                Exécution
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/Dubwork91/Citations"
                    target="_blank"
                  >
                    Lien Github
                  </a>
                </div>
              </div>
            </div>


            <div className="item">
              <div>
                <img src={devinette} alt="devinette" />
                <h3>Les opérations mathématiques</h3><br />
                <p>Une interface qui génére le dark/light mode , avec le stockage des nombres de like et dislike</p>
              </div>
              <div className="item-links">
                <div>
                  <a
                    href="https://dubwork91.github.io/Citations/"
                    target="_blank"
                  >
                Exécution
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/Dubwork91/Citations"
                    target="_blank"
                  >
                    Lien Github
                  </a>
                </div>
              </div>
            </div>

          </div>
          
        </section>
      </>
    );
  }
}

export default Projects;
