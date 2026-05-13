import React from 'react';

const About = () => {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-3">About Us</h2>
            <p className="text-gray-700 mb-4">
                MyApp is a sample React + Vite project demonstrating routing and layout.
            </p>
            <ul className="list-disc list-inside text-gray-700">
                <li>Built with React and Vite</li>
                <li>Simple layout and routing</li>
                <li>Tailwind CSS for styling</li>
            </ul>
        </div>
    );
};

export default About;
