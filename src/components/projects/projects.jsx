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
          <h2  class="animcar" data-aos="fade-down">Projets</h2>
          <div className="row" data-aos="fade-up">
            <div className="item" >
              <div>
                <img src={insta} alt="insta" />
                <h3>Instagram Cloner</h3><br />
                <p>An interface that generates the dark/light mode, with the storage of like and dislike numbers</p>
              </div>
              <div className="item-links">
                <div>
                  <a
                    href="https://dubwork91.github.io/Instagram/"
                    target="_blank"
                  >
                Execution
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/Dubwork91/Instagram"
                    target="_blank"
                  >
                   Github Link
                  </a>
                </div>
              </div>
            </div>
            <div className="item" >
              <div>
                <img src={bmi} alt="bmi" />
                <h3>BMI-Calculator</h3><br />
                <p>An interface that generates a person’s BMI, to see if they are in good shape or not.</p>
              </div>
              <div className="item-links">
                <div>
                  <a href="https://dubwork91.github.io/BMI-Calculator/" target="_blank">
                  Execution
                  </a>
                </div>
                <div>
                  <a href="https://github.com/Dubwork91/BMI-Calculator" target="_blank">
                 Github Link
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div>
                <img src={todo} alt="todo" />
               <h3>Todo List</h3><br />
                <p>An interface under kind of personal calendar that gives the user the hand to set up notes.</p>
              </div>
              <div className="item-links">
                <div>
                  <a href="https://dubwork91.github.io/todolist/" target="_blank">
                  Execution
                  </a>
                </div>
                <div>
                  <a href="https://github.com/Dubwork91/todolist" target="_blank">
                 Github Link
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div className="row">
          <div className="item">
              <div>
                <img src={citation} alt="citation" />
                <h3>Citation generator</h3><br />
                <p>An interface that gives random quotes with the author’s name, with the color of the background that also changes randomly.</p>
              </div>
              <div className="item-links">
                <div>
                  <a
                    href="https://dubwork91.github.io/Citations/"
                    target="_blank"
                  >
                Execution
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/Dubwork91/Citations"
                    target="_blank"
                  >
                   Github Link
                  </a>
                </div>
              </div>
            </div>

            <div className="item">
              <div>
                <img src={somme} alt="somme" />
                <h3>Guessing games</h3><br />
                <p>An interface that gives a random number and allows the user to try his luck three times to see if he will succeed in discovering the number or not.</p>
       
              </div>
              <div className="item-links">
                <div>
                  <a
                    href="https://dubwork91.github.io/Devinette/"
                    target="_blank"
                  >
                Execution
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/Dubwork91/Devinette"
                    target="_blank"
                  >
                   Github Link
                  </a>
                </div>
              </div>
            </div>


            <div className="item">
              <div>
                <img src={devinette} alt="devinette" />
                <h3>Mathematical operations</h3><br />
                <p>A small calculation games that generate mathematical operations, in order to self evaluate its level. the user in hand to give the result.</p>
              </div>
              <div className="item-links">
                <div>
                  <a
                    href="https://dubwork91.github.io/Operateurs/"
                    target="_blank"
                  >
                Execution
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/Dubwork91/Operateurs"
                    target="_blank"
                  >
                   Github Link
                  </a>
                </div>
              </div>
            </div>

          </div>
        <a href="https://github.com/Dubwork91?tab=repositories" target="_blank" id="voirplus" >View more projects...</a>
        </section>
      </>
    );
  }
}

export default Projects;
