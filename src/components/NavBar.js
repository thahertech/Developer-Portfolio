import React from "react";

export default function Navbar() {
    const scrollToSection = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {

            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition + window.scrollY,
                behavior: "smooth",
            });
        }
    };

    return (
        <header className="bg-gray-800 md:sticky top-0 z-50 relative">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-8 md:mb-0">
                    <a onClick={() => scrollToSection("about")} className="ml-3 text-xl cursor-pointer">
                        My Developer Portfolio
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a onClick={() => scrollToSection("aboutme")} className="mr-5 hover:text-white cursor-pointer">
                        About Me
                    </a>
                    <a onClick={() => scrollToSection("skills")} className="mr-5 hover:text-white cursor-pointer">
                        Skills
                    </a>
                    <a onClick={() => scrollToSection("certificates")} className="mr-5 hover:text-white cursor-pointer">
                        Certificates
                    </a>
                    <a onClick={() => scrollToSection("projects")} className="mr-5 hover:text-white cursor-pointer">
                        Past Projects
                    </a>

                </nav>
                <button
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 cursor-pointer">
                    Contact Me
                </button>
            </div>
        </header>
    );
}
