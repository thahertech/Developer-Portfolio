import React from "react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <NavBar />
    <AboutMe />
    <Skills />
    <Certificates />
    <Projects />
    <Contact />
  </main>
  );
}