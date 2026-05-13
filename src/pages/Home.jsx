import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="md:flex md:items-center md:justify-between">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Welcome to MyApp</h1>
                    <p className="text-gray-600 mb-4">This is the home page. Explore about and profile pages.</p>
                    <div className="space-x-3">
                        <Link to="/about" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">About</Link>
                        <Link to="/profile" className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Profile</Link>
                    </div>
                </div>
                <div className="mt-6 md:mt-0">
                    <img src="/src/assets/hero.png" alt="hero" className="w-48 h-48 object-contain" />
                </div>
            </div>
        </section>
    );
};

export default Home;