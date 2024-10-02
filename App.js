// src/App.js
import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Footer from './Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <ProductList />
            <Footer />
        </div>
    );
}

export default App;
