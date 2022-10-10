import React, { Component } from "react";
import "../back/back.css";

class Back extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
<div class="bg-animation">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div id="stars4"></div>
</div>
    );
  }
}

export default Back;
