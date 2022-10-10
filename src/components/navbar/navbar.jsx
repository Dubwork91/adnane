import { Component } from "react";
import "./style.css";
export class NavBar extends Component {
  
  render() {
    
    return (
      <>
        <nav>
          <div class="container teal borderYtoX" >
            <a href="#about">Qui suis-je ?</a>
            <a href="#projects">Projets</a>
            <a href="#comp">Compétences</a>
            <a href="#experiences">Expérience</a>
            <a href="#contacts">Contact</a>
          </div>
         
        </nav>

        
      </>
    );
  }
}


export default NavBar;