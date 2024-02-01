import { FaInfoCircle, FaLink, FaTwitter, FaWeixin, FaQq } from 'react-icons/fa';

import { useState } from 'react';

export default function PostFooter() {
    const currentLink = "/"; // Replace with your current link
    const [showIcons, setShowIcons] = useState(false);

    const handleMouseEnter = () => {
        setShowIcons(true);
    };

    const handleMouseLeave = () => {
        setShowIcons(false);
    };

    return (
        <div className="border border-gray-500 p-4 flex items-center">
            {showIcons && (
                <>
                    <FaInfoCircle className="mr-2 hover:text-blue-500 dark:hover:text-blue-300" />
                    <FaWeixin className="mr-2 hover:text-blue-500 dark:hover:text-blue-300" />
                    <FaQq className="hover:text-blue-500 dark:hover:text-blue-300" />
                </>
            )}
            <FaLink
                className="mr-2 hover:text-blue-500 dark:hover:text-blue-300"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <span>Licence Related content: 'Under CC BY-NC-ND 4.0'</span>
            <div className="ml-auto">
                <a href={currentLink} target="_blank" rel="noopener noreferrer">
                    <FaLink className="mr-2 hover:text-blue-500 dark:hover:text-blue-300" />
                </a>
                <a href={`https://twitter.com/share?url=${currentLink}`} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="mr-2 hover:text-blue-500 dark:hover:text-blue-300" />
                </a>
                <a href={`https://example.com/wechat-share?url=${currentLink}`} target="_blank" rel="noopener noreferrer">
                    <FaWeixin className="mr-2 hover:text-blue-500 dark:hover:text-blue-300" />
                </a>
                <a href={`https://example.com/qq-share?url=${currentLink}`} target="_blank" rel="noopener noreferrer">
                    <FaQq className="hover:text-blue-500 dark:hover:text-blue-300" />
                </a>
            </div>
        </div>
    );
}