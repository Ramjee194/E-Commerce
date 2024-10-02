// src/Cart.js

import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, calculateTotal } = useContext(CartContext);

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is currently empty.</p>
            ) : (
                <ul>
                    {cart.map(product => (
                        <li key={product.id}>
                            {product.name} - ${product.price} x 
                            <input 
                                type="number" 
                                value={product.quantity} 
                                onChange={(e) => updateQuantity(product.id, Number(e.target.value))} 
                            />
                            <button onClick={() => removeFromCart(product.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${calculateTotal()}</h3>
        </div>
    );
};

export default Cart;
