import React from 'react';
import LanguageSelector from '../LanguageSelector';

const MainNavbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Brand</div>
                <div className="space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">Home</a>
                    <a href="#" className="text-gray-300 hover:text-white">About</a>
                    <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                </div>
                <LanguageSelector />
            </div>
        </nav>
    );
};

export default MainNavbar;