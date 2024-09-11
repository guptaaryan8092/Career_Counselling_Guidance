import {Logo} from '../'
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [navbarOpacity, setNavbarOpacity] = useState(1);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const opacity = Math.max(1 - scrollY / 200, 0.5); // Adjust 200 for the fade effect distance
            setNavbarOpacity(opacity);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="shadow sticky z-50 top-0" style={{ transition: 'background-color 0.3s ease' }}>
            <nav className="border-gray-200 px-4 lg:px-6 py-0"
                style={{ backgroundColor: `rgba(0, 183, 255, ${navbarOpacity})` }}
            >
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="src/assets/img/logo.svg"
                            className="mr-3 h-16"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Login
                        </Link>
                        
                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-800 rounded-lg lg:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="mobile-menu-2"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${
                            isMobileMenuOpen ? "flex" : "hidden"
                        } flex-col items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                                            isActive ? "text-orange-700" : "text-gray-800"
                                        } text-base`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                                            isActive ? "text-orange-700" : "text-gray-800"
                                        } text-base`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/test"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                                            isActive ? "text-orange-700" : "text-gray-800"
                                        } text-base`
                                    }
                                >
                                    Test
                                </NavLink>
                            </li>
                            <li className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="flex items-center text-gray-800 hover:bg-gray-50 hover:rounded-lg focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                    style={{ textDecoration: 'none', backgroundColor: 'transparent' }}
                                >
                                    Resources
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        ></path>
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <ul className="absolute z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-lg">
                                        <li>
                                            <NavLink
                                                to="/aiguidance"
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:rounded-lg ${
                                                        isActive ? "text-orange-700" : "text-gray-800"
                                                    } text-base`
                                                }
                                                onClick={closeDropdown}
                                            >
                                                AI Guidance
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/mentorship"
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:rounded-lg ${
                                                        isActive ? "text-orange-700" : "text-gray-800"
                                                    } text-base`
                                                }
                                                onClick={closeDropdown}
                                            >
                                                Mentorship
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/roadmap"
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:rounded-lg ${
                                                        isActive ? "text-orange-700" : "text-gray-800"
                                                    } text-base`
                                                }
                                                onClick={closeDropdown}
                                            >
                                                Roadmap
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <NavLink
                                    to="/recreation"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                                            isActive ? "text-orange-700" : "text-gray-800"
                                        } text-base`
                                    }
                                >
                                    Recreation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                                            isActive ? "text-orange-700" : "text-gray-800"
                                        } text-base`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
