import { Component } from "react";
import "./style.css";
export class NavBar extends Component {
  
  render() {
    
    return (
      <>
        <nav>
          <div class="container teal borderYtoX" >
            <a href="#about">Who am'i ?</a>
            <a href="#projects">Projects</a>
            <a href="#comp">Skills</a>
            <a href="#experiences">Experience</a>
            <a href="#contacts">Contact</a>
          </div>
        </nav>
      </>
    );
  }
}


export default NavBar;