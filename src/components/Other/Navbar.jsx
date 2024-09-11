import React, { useState } from "react";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top min-h-[70px] transition-all ease-in-out duration-300">
      <div className="container mx-auto flex items-center justify-between">
        <a className="navbar-brand flex items-center font-bold text-xl" href="index.html">
          <img src="src/assets/img/logo.svg" alt="Logo" className="logo max-h-[70px] w-auto rounded-[20px] " />
          PathFinder.ai
        </a>
        <button
          className="navbar-toggler border-none bg-transparent focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
          aria-controls="navbarNav"
          aria-expanded={navbarOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ${navbarOpen ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto`} id="navbarNav">
          <ul className="navbar-nav flex flex-col lg:flex-row text-center lg:space-x-4">
            <li className="nav-item py-2 lg:py-0"><a className="nav-link flex items-center h-[70px]" href="index.html">Home</a></li>
            <li className="nav-item py-2 lg:py-0"><a className="nav-link flex items-center h-[70px]" href="about.html">About</a></li>
            <li className="nav-item py-2 lg:py-0"><a className="nav-link flex items-center h-[70px]" href="test.html">Test</a></li>
            <li className="nav-item py-2 lg:py-0"><a className="nav-link flex items-center h-[70px]" href="aimentor.html">AI Guidance</a></li>
            <li className="nav-item py-2 lg:py-0"><a className="nav-link flex items-center h-[70px]" href="mentorship.html">Mentorship</a></li>
            <li className="nav-item py-2 lg:py-0"><a className="nav-link flex items-center h-[70px]" href="roadmap.html">Roadmap</a></li>
            <li className="nav-item py-2 lg:py-0"><a className="nav-link flex items-center h-[70px]" href="resources.html">Recreation</a></li>
            <li className="nav-item py-2 lg:py-0"><a className="nav-link flex items-center h-[70px]" href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div className="flex items-center space-x-3 ml-auto">
          <a className="nav-item btn btn-primary px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white" href="/login.html">Log in</a>
          <a className="nav-item btn btn-primary px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white" href="/signup.html">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};
