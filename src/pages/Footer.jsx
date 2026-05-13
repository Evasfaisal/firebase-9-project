import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 p-4">
            <div className="container mx-auto text-center">
                <small>© {new Date().getFullYear()} MyApp. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;