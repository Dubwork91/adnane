import { Component } from "react";
import "./experience.css";
import Aos from "aos";
import "aos/dist/aos.css";
class Experiences extends Component {
    componentDidMount(){
        Aos.init({duration:2000});
    }
    
  render() {
    return (
      <>

   <section id="experiences">
   <h3 class="animate-carac" id="ex" data-aos="fade-down">Expériences</h3>
   </section>

  
  


<ul class="timeline" data-aos="fade-up">

	<li>
		<div class="direction-r" data-aos="fade-left">
			<div class="flag-wrapper" >
				<span class="flag">Full-Stack Boot-Camp</span>
				<span class="time-wrapper" ><span class="time" 	>2022-Présent</span></span>
			</div>
			<div class="desc">Une formation avancée et accélérée en développement Full-Stack</div>
		</div>
	</li>
  
	<li>
		<div class="direction-l" data-aos="fade-right">
			<div class="flag-wrapper">
				<span class="flag">Ingénieur Méthodes</span>
				<span class="time-wrapper"><span class="time">2019-2022</span></span>
			</div>
			<div class="desc">Ingénieur en méthodes de maintenance ainsi que de production.</div>
		</div>
	</li>

	<li>
		<div class="direction-r" data-aos="fade-left">
			<div class="flag-wrapper">
				<span class="flag">Chargé Clientèle</span>
				<span class="time-wrapper"><span class="time">2014 - 2019</span></span>
			</div>
			<div class="desc">En débutant par le poste de chargé clientèle et en finalisant par Assistant plateau.</div>
		</div>
	</li>
  
</ul>

      </>
    );
  }
}

export default Experiences;




