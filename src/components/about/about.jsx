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
          <h3 class="animcar" data-aos="fade-down">Get to know me?</h3>
          <h2 data-aos="fade-up"> In a few lines ...</h2>
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
                <h3>Hello :)</h3>
                <p>
                  My name is Adnane and I have a degree in automation and industrial computing.
                  I started my career as a maintenance manager, then as a method engineer, and I decided to move on to a field that I’ve always been passionate about.
                  My interpersonal skills, my ability to listen, my sense of autonomy and my perseverance were the assets that enabled me to achieve my goals. My past experiences have been personally and professionally rewarding, they have stimulated my thirst for challenge and innovation that I anticipate, as a kind of proof, through my target conversion to the fullstack developer profession.

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
