import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import '../App.css';

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />

          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Embarking on the journey of turning ideas into tangible solutions,
            I've had the privilege of contributing to diverse projects.
          </p>
        </div>
        <div className="flex flex-wrap w-full">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full p-4"
            >
              <div className="relative group">
                <div className="project-image-container">
                  <img
                    alt="gallery"
                    src={project.image}
                    className="project-image"
                  />
                  <div className="overlay">
                    <div className="overlay-content">
                      <h2 className="tracking-widest">{project.subtitle}</h2>
                      <h1 className="title-font font-medium">{project.title}</h1>
                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
