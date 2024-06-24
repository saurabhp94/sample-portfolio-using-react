import React, { useState, useEffect } from "react";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import Switch from "../theme/Switch";

const NavBar = () => {
    const [data, setData] = useState(null);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [activeLink, setActiveLink] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoints.navbar, { method: "GET" });
                const res = await response.json();
                setData(res);
            } catch (err) {
                console.error("Navbar fetch Error", err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const navbar = document.querySelector(".navbar");
            
            if (navbar) {
                if (prevScrollPos > currentScrollPos) {
                    navbar.style.transform = "translateY(0%)";
                    
                } else {
                    navbar.style.transform = "translateY(-200%)";
                }
                setPrevScrollPos(currentScrollPos);
            }
            const sections = document.querySelectorAll('div[id^="/"]');
            let activeSection = '';
            for (const section of sections) {
                if (section && section.getBoundingClientRect) {
                    const sectionTop = section.getBoundingClientRect().top + window.scrollY - 100;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    const isInViewport = currentScrollPos >= sectionTop && currentScrollPos <= sectionBottom;
                    if (isInViewport) {
                        activeSection = section.id;
                        break;
                    }
                }
            }
            setActiveLink(activeSection);
            // console.log(`Current section in viewport: ${activeSection}`);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, data, setActiveLink]);

    const scrollTo = (e, sectionID) => {
        e.preventDefault();
        const section = document.getElementById(sectionID);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: 'start' });
            setActiveLink(sectionID);
        }
    };

    return data ? (
        <div className="navbar">
            <div className="hamburger" onClick={toggleMenu}>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </div>
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                {data.sections.map((link, index) => (
                    <div key={index} className="nav_items">
                        <ul key={link.title}>
                            <li>
                                <a
                                    href={link.href}
                                    className={activeLink === link.href ? "active" : ""}
                                    onClick={(e) => {
                                        scrollTo(e, link.href);
                                        // Close the menu on small screens
                                        if (window.innerWidth <= 768) {
                                            toggleMenu();
                                        }
                                    }}
                                >
                                    {link.title}
                                </a>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
            <div className="ThemeSwitch">
            <Switch />
            </div>
        </div>
    ) : (
        <FallbackSpinner />
    );
};

export default NavBar; 