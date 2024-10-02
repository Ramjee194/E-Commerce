// src/Header.js

import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">shoptimeindia</div>
            <input type="text" placeholder="Search..." className="search-bar" />
            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/orders">Orders</a>
                <a href="/cart">Cart</a>
            </nav>
        </header>
    );
};

export default Header;
