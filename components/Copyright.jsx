import { FaCreativeCommons } from 'react-icons/fa';

export default function Copyright() {
    const currentPageLink = window.location.href;
    return (
        <div className="border border-gray-500 p-4 flex items-center rounded-md">
           <FaCreativeCommons className="text-3xl mr-2" /> 
           <span> This work is licensed under a <a href='https://creativecommons.org/licenses/by-nc-nd/4.0/'>CC BY-NC-ND 4.0 Deed</a> License. 
           Current Page Link: <a href={currentPageLink}>{currentPageLink}</a> </span>
        </div>
    );
}