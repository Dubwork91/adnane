import { Component } from "react";
import "./experience.css";
import Aos from "aos";
import "aos/dist/aos.css";
class Experiences extends Component {
	componentDidMount() {
		Aos.init({ duration: 2000 });
	}

	render() {
		return (
			<>

				<section id="experiences">
					<h3 class="animcar" id="ex" data-aos="fade-down">Experiences</h3>
				</section>

				<ul class="timeline" data-aos="fade-up">

					<li>
						<div class="direction-r" data-aos="fade-left">
							<div class="flag-wrapper" >
								<span class="flag">Full-Stack Boot-Camp</span>
								<span class="time-wrapper" ><span class="time" 	>2022-Now</span></span>
							</div>
							<div class="desc">Advanced and accelerated training in Full-Stack development</div>
						</div>
					</li>

					<li>
						<div class="direction-l" data-aos="fade-right">
							<div class="flag-wrapper">
								<span class="flag">Methods Engineer</span>
								<span class="time-wrapper"><span class="time">2019-2022</span></span>
							</div>
							<div class="desc">Engineer in maintenance and production methods.</div>
						</div>
					</li>

					<li>
						<div class="direction-r" data-aos="fade-left">
							<div class="flag-wrapper">
								<span class="flag">Customer Relations Manager</span>
								<span class="time-wrapper"><span class="time">2014 - 2019</span></span>
							</div>
							<div class="desc">
							Starting my career as a Customer Relations Manager, then moving on to a Stage Assistant role.</div>
						</div>
					</li>

				</ul>

			</>
		);
	}
}

export default Experiences;




