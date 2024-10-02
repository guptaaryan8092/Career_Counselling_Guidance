import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faDiscord, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    
    return (
        <footer className="relative overflow-hidden">
            <div className="bg-gray-300 transition duration-300 ease-in-out relative z-10">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="" className="flex items-center transition duration-300 ease-in-out hover:scale-105">
                                <img src="/assets/img/logo.svg" className="h-16 me-3" alt="Pathfinder logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-black hover:text-green-500 transition duration-300 ease-in-out">PathFinder</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-black uppercase">Resources</h2>
                                <ul className="text-black font-medium">
                                    <li className="mb-4">
                                        <Link to="/test" className="hover:text-green-500 transition duration-300 ease-in-out no-underline">Test</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/roadmap" className="hover:text-green-500 transition duration-300 ease-in-out no-underline">Roadmap</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/mentorship" className="hover:text-green-500 transition duration-300 ease-in-out no-underline">Mentorship</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/contact" className="hover:text-green-500 transition duration-300 ease-in-out no-underline">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-black uppercase">Follow us</h2>
                                <ul className="text-black font-medium">
                                    <li className="mb-4">
                                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-300 ease-in-out no-underline">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-300 ease-in-out no-underline">Discord</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-black uppercase">Legal</h2>
                                <ul className="text-black font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:text-green-500 transition duration-300 ease-in-out no-underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-green-500 transition duration-300 ease-in-out no-underline">Terms & Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-black sm:text-center">
                            © 2024 <a href="/" className="hover:text-green-500 transition duration-300 ease-in-out no-underline">PathFinder™</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="#" className="text-black hover:text-green-500 transition duration-300 ease-in-out mx-3 no-underline">
                                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5 transition duration-300 ease-in-out transform hover:scale-110" />
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-black hover:text-green-500 transition duration-300 ease-in-out mx-3 no-underline">
                                <FontAwesomeIcon icon={faDiscord} className="w-5 h-5 transition duration-300 ease-in-out transform hover:scale-110" />
                                <span className="sr-only">Discord community</span>
                            </a>
                            <a href="#" className="text-black hover:text-green-500 transition duration-300 ease-in-out mx-3 no-underline">
                                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 transition duration-300 ease-in-out transform hover:scale-110" />
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="#" className="text-black hover:text-green-500 transition duration-300 ease-in-out mx-3 no-underline">
                                <FontAwesomeIcon icon={faGithub} className="w-5 h-5 transition duration-300 ease-in-out transform hover:scale-110" />
                                <span className="sr-only">GitHub page</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
