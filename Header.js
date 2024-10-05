

import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">shoptimeindia</div>
            <div className="search-container">
                <input type="text" placeholder="Search for products, brands, and more" className="search-input" />
                <button className="search-button">Search</button>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="#deals">Deals</a>
                </li>
                <li>
                    <a href="#orders">Orders</a>
                </li>
                <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <a href="#categories">Categories</a>
                    {isDropdownOpen && (
                        <ul className="dropdown">
                            <li><a href="#electronics">Electronics</a></li>
                            <li><a href="#fashion">Fashion</a></li>
                            <li><a href="#home-appliances">Home Appliances</a></li>
                            <li><a href="#books">Books</a></li>
                        </ul>
                    )}
                </li>
                <li>
                    <a href="#cart">Cart</a>
                </li>
            </ul>
            <div className="user-actions">
                <Link to='/login' className="login">Login</Link>
                <Link to="#signup" className="signup">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;
