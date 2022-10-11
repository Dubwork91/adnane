import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/about/about";
import Header from "./components/header/header";
import Back from "./components/back/back";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import "./index.css";
import Scroll from "./components/scroll/scro";
import Comp from "./components/comp/comp";
import Contact from "./components/contact/contact";
import  NavBar from "./components/navbar/navbar";
import Experiences from "./components/experiences/experience";
import Chat from "./components/chat/chat";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    <Header />
    <NavBar/> 
    <Back/>
    <About />
    <Projects />
    <Comp/>
    <Experiences/>
    <Contact/>
    <Scroll/>
    <Chat/>
    <Footer/>
  </React.StrictMode>
);

