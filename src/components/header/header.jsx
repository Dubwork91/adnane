import React, { Component } from "react";
import "./style.css";
import logo from "../../assets/images/logos/adn.jpg";
import { TypeAnimation } from "react-type-animation";


class Header extends Component {

  render() {
    return (

      <header>
         {/* pour l'animation du cube! */}
         <div class="area" >
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
        <div class="stars"></div>
        <div class="clouds"></div>

        <div id="info">
          <img className="img" src={logo} alt="Adnane" width="300px" />
          <h2 id="name"> FENNIR Adnane  </h2>

          <TypeAnimation
            sequence={[
              "FULL-STACK Developer", // Types 'One'
              1000, // Waits 1s
              "Methods Engineer", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "Customer Relations Manager", // Types 'Three' without deleting 'Two'
              2000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
        </div>

      </header>
    );
  }
}

export default Header;






