import React from 'react';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar container-page">
            <h1>
                <Link to="/">Spore Hills</Link>
            </h1>
            <ul>
                <li>
                    <NavLink to="/categoria/Gourmet">Gourmet</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/Medicinal">Medicinal</NavLink>
                </li>
                <li>
                    <NavLink to="/nosotros">Nosotros</NavLink>
                </li>
            </ul>
            <
                <CartWidget />
            </>
        </nav>
    );
};

export default Navbar;
