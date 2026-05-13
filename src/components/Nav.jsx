import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
    const linkClass = ({ isActive }) =>
        isActive ? 'text-white font-semibold' : 'hover:underline text-white'

    return (
        <header className="bg-blue-600 text-white">
            <div className="container mx-auto flex items-center justify-between p-4">
                <Link to="/" className="text-2xl font-bold">
                    MyApp
                </Link>
                <nav className="space-x-4">
                    <NavLink to="/" className={linkClass} end>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={linkClass}>
                        About
                    </NavLink>
                    <NavLink to="/profile" className={linkClass}>
                        Profile
                    </NavLink>
                    <NavLink to="/signin" className={linkClass}>
                        Signin
                    </NavLink>
                    <NavLink to="/signup" className={linkClass}>
                        Signup
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Nav
