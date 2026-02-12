'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
        });

        // Initialize Bootstrap collapse functionality
        if (typeof window !== 'undefined') {
            require('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
    }, []);

    return (
        <>
            <Navbar />
            <div id="content-wrapper">
                <Hero />
                <About />
                <Services />
                <Skills />
                <Projects />
                <Blogs />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
