import React from "react";

const title = "This is Thaher."
const bio = "Discovering Details Hidden In Aesthetics."

export default function AboutMe() {

    return(
        <section id="aboutme">
            <div className="container mx-auto flex px-10 py-20 md: flex-row flex-col items-center">
                <h1 className="title-font sm: text-4xl text-3xl mb-4 font-medium text-white text-center">
                    {title}
                    <br className="hidden-lg:incline-block" /> {bio}
                </h1>

                <p className="mn-8 leading-relaxed sm:text-center">
    Architecting Code, Unleashing Aesthetics: Where Innovation Meets Style. <br/><br/>
    <strong>Software Designer & Engineer</strong>
                </p>
          
            
            <div className="flex mt-6 justify-center">
            <a
                href="#contact"
                className="incline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg text-center">
                    Work With Me
                </a>
                <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg text-center">
              My Past Work
            </a>
          </div>
        </div>

        <div className="flex mt-2 mb-10 justify-center md:mr-auto md:py-1 md:pl-4  md:border-gray-700 border-t border-gray-700">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./ThaherCoding.svg"
          />
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-right"
            alt="hero2"
            src="./CircuitFace.svg"
            />
        </div>
        </div>
    </section>
  );
}
