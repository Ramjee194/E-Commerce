// src/CartContext.js

import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const loadCartFromLocalStorage = () => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    };

    const saveCartToLocalStorage = (newCart) => {
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    useEffect(() => {
        loadCartFromLocalStorage();
    }, []);

    useEffect(() => {
        saveCartToLocalStorage(cart);
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === productId);
            if (existingProduct && existingProduct.quantity > 1) {
                return prevCart.map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                return prevCart.filter(item => item.id !== productId);
            }
        });
    };

    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) => {
            return prevCart.map(item =>
                item.id === productId
                    ? { ...item, quantity: Math.max(1, quantity) }
                    : item
            );
        });
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
};
