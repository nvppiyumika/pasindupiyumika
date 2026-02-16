'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getAssetPath } from '@/utils/paths';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'skills', 'projects', 'blogs', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, target) => {
        e.preventDefault();
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container flex-lg-column">
                <a className="navbar-brand mx-lg-auto mb-lg-4" href="#">
                    <span className="h3 fw-bold d-block d-lg-none">Pasindu.</span>
                    <Image
                        src={getAssetPath('/assets/images/profile.jpg')}
                        className="d-none d-lg-block rounded-circle"
                        alt="Profile"
                        width={200}
                        height={200}
                        priority
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                                href="#home"
                                onClick={(e) => handleClick(e, 'home')}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                                href="#about"
                                onClick={(e) => handleClick(e, 'about')}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                                href="#services"
                                onClick={(e) => handleClick(e, 'services')}
                            >
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                                href="#skills"
                                onClick={(e) => handleClick(e, 'skills')}
                            >
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                                href="#projects"
                                onClick={(e) => handleClick(e, 'projects')}
                            >
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeSection === 'blogs' ? 'active' : ''}`}
                                href="#blogs"
                                onClick={(e) => handleClick(e, 'blogs')}
                            >
                                Blogs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                                href="#contact"
                                onClick={(e) => handleClick(e, 'contact')}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
