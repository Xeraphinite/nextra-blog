import React from 'react';
import { FaGithub, FaGoogle, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const YEAR = new Date().getFullYear();

    const socialLinks = {
        github: "https://github.com/Xeraphinite",
        googleScholar: "https://scholar.google.com",
        email: "saya.etude@outlook.com",
        username: "Xeraphinite"
    };

    const iconStyle = "w-4 h-4 fill-current text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition duration-300";

    return (
        <footer className="py-4">
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">{socialLinks.username} © { YEAR } </span>
                <div className="flex space-x-3">
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className={iconStyle} />
                    </a>
                    <a href={socialLinks.googleScholar} target="_blank" rel="noopener noreferrer">
                        <FaGoogle className={iconStyle} />
                    </a>
                    <a href={`mailto:${socialLinks.email}`}>
                        <FaEnvelope className={iconStyle} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
