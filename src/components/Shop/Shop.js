import React, { useEffect, useState } from 'react';
import {addToDb, getStoredCart} from '../../utilities/fakedb';
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

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
                const addedProduct = products.find(product => product.id === id);
                if (addedProduct) {
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    savedCart.push(addedProduct);
                }
        }
        setcart(savedCart);
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        // console.log(product);
        //do not do this cart.push(product);
        let newCart = [];
        const exists = cart.find(product=> product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else
        {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity= exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setcart(newCart);
        addToDb(selectedProduct.id)
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