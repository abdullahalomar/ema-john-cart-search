import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setcart] =useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(json => setproducts(json))
    },[])

    const handleAddToCart = (product) => {
        console.log(product);
        //do not do this cart.push(product);
        const newCart = [...cart, product];
        setcart(newCart);
    } 

    return (
        <div className='shop-conatiner'>
            <div className="produtcs-container">
               {
                   products.map(product=> <Product key={product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                   ></Product>)
               }
            </div>
            <div className="cart-container">
            <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;