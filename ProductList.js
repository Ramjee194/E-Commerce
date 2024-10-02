// src/ProductList.js

import React from 'react';
import './ProductList.css';
import Cart from './Cart';

const products = [
    { id: 1, name: "mixing griender", price: "$20", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/mixer-grinder-juicer/6/n/1/-original-imagryh3hh3xr2jk.jpeg?q=70" },
    { id: 2, name: "lakme lipistic", price: "$30", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/6/o/e/7-2-9to5-primer-matte-lip-color-lakme-original-imagt47jk6gejpgm.jpeg?q=70" },
    { id: 3, name: "safari trolly", price: "$40", image: "https://rukminim2.flixcart.com/image/612/612/kyj0vbk0/suitcase/t/t/f/-original-imagaqnvafuzrzvh.jpeg?q=70" },
    { id: 3, name: "motorola", price: "$40", image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/w/r/edge-50-fusion-pb300000in-motorola-original-imahywzztyktktpp.jpeg?q=70" },
    { id: 3, name: "realme buds", price: "$40", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/6/9/j/-original-imah388mvfzxm2u8.jpeg?q=70" },
    { id: 3, name: "iphone buds", price: "$40", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/e/a/f/-original-imagtc44nk4b3hfg.jpeg?q=70" },
    { id: 3, name: "revolt fs1 pro", price: "$40", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/d/u/k/-original-imagzzukgevbkh9w.jpeg?q=70" },
    { id: 3, name: "hd ultra pro", price: "$40", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/4/h/5/-original-imagxpgpcnpyqmyj.jpeg?q=70" },
    { id: 3, name: "BoAt speaker", price: "$40", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/1/g/b/-original-imagyjyehfhjgbyz.jpeg?q=70" },
    { id: 3, name: "trim shave treamer", price: "$40", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/trimmer/j/t/z/0-25-4-mm-oneblade-qp1424-10-stainless-steel-cordless-philips-original-imah52euqfdfpgg8.jpeg?q=70" },
    { id: 3, name: "ultra s24 pro", price: "$40", image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/q/v/-original-imah42m4r4akzhyn.jpeg?q=70"},
    { id: 3, name: "campus shoes blue", price: "$40", image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/d/o/e/9-5g-845-campus-mod-blu-wht-original-imag4g3xnanhz7zk-bb.jpeg?q=70"},
    { id: 3, name: "campus shoes black", price: "$40", image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/a/o/-original-imagsn6p2dzrc6zy.jpeg?q=70"},
    { id: 3, name: "electric shaver", price: "$40", image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shaver/u/g/f/-original-imagzv5fs8sg8ekk.jpeg?q=70"},
    { id: 3, name: "washing machine", price: "$40", image:"https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/c/3/0/-original-imahyg66wtgyj6t6.jpeg?q=70"},
];

const ProductList = () => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button className="cart-list">Add to Cart</button>
                    <button className="Buy-list">Buy now</button>
                </div>
            ))}
        </div>
    );
};
export default ProductList;