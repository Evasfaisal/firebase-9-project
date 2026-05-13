import Footer from 'pages/Footer';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">

            <Nav></Nav>
            <main className="flex-1 container mx-auto p-6">
                <Outlet></Outlet>
            </main>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;