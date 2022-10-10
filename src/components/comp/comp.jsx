import { Component } from "react";
import "./comp.css";
import com from "../../assets/images/com.jpg";

import react from "../../assets/images/logos/react-logo.png";
import html from "../../assets/images/logos/html.png";
import css from "../../assets/images/logos/css.png";
import boot from "../../assets/images/logos/bootstrap.png";
import js from "../../assets/images/logos/js.png";


class Comp extends Component {
 

  render() {
    return (
      <>
        <section id="comp">
          <h3 class="animate-carac" data-aos="fade-down">Compétences</h3>
          <div className="row">
            <div className="profile" data-aos="fade-right">

              {/* <img src={com} alt="compétences" width="100%" /> */}
              <div class="cube__section">
            <div class="cube">
                <div class="cube__container">
                    <div class="cube__face cube__face--front">
        
                        <img src={css} alt="React" width={"47px"}  class="technos"/>

                    </div>
                    <div class="cube__face cube__face--back">
                    <img src={react} alt="React" width={"47px"}  class="technos"/>
                    </div>
                    <div class="cube__face cube__face--left">
                    <img src={html} alt="React" width={"47px"}  class="technos"/>
                    </div>
                    <div class="cube__face cube__face--right">
                    <img src={boot} alt="React" width={"47px"}  class="technos"/>
                    </div>
                    <div class="cube__face cube__face--top">
                    <img src={js} alt="React" width={"47px"}  class="technos"/>
                    </div>
                    <div class="cube__face cube__face--bottom">
                    <img src={react} alt="React" width={"47px"}  class="technos"/>
                    </div>
                </div>
            </div>
        </div>

     
            </div>
            <div id="SkillBox" data-aos="fade-left">

                <div class="SkillBar">
                  
                  <div id="Skill-HTML" >
                    <img src={html} alt="React" width={"50px"} />
                  </div>
                </div>

                <div class="SkillBar">
                  <div id="Skill-CSS">
                    <img src={css} alt="React" width={"47px"} />

                  </div>
                </div>

                <div class="SkillBar">
                  <div id="Skill-Bootstrap">
                    <img src={boot} alt="React" width={"50px"} />
                  </div>
                </div>


                <div class="SkillBar">
                  <div id="Skill-JS">
                    <img src={js} alt="React" width={"50px"} />

                  </div>
                </div>

                <div class="SkillBar">
                  <div id="Skill-React">
                    <img src={react} alt="React" width={"50px"} />

                  </div>
                </div>

            </div>

          </div>
        </section>
      </>
    );
  }
}

export default Comp;
