import { useState, useEffect } from 'react';
import { FaCopy } from 'react-icons/fa';

const CopyLink = () => {
    const [copied, setCopied] = useState(false);
    const [link, setLink] = useState('');

    useEffect(() => {
        setLink(window.location.href);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <button
            className="p-2 rounded-md bg-gray-500 text-white hover:bg-gray-600"
            onClick={handleCopy}
        >
            <FaCopy size={24} />
            {copied ? 'Copied!' : 'Copy Link'}
        </button>
    );
};

export default CopyLink;
