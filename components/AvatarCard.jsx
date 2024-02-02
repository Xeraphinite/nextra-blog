import React from 'react';
import { FaGithub, FaGoogle, FaMastodon } from 'react-icons/fa';

const AvatarCard = ({ avatar, username, bio, description }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={avatar} alt="Avatar" className="w-32 h-32 rounded-full mb-4" />
            <span className="text-xl font-bold">{username}</span>
            <p className="text-gray-500 dark:text-gray-400">{bio}</p>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
            <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:dark:text-gray-300" />
                </a>
                <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
                    <FaGoogle className="text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:dark:text-gray-300" />
                </a>
                <a href="https://mastodon.social" target="_blank" rel="noopener noreferrer">
                    <FaMastodon className="text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:dark:text-gray-300" />
                </a>
            </div>
        </div>
    );
};

export default AvatarCard;
