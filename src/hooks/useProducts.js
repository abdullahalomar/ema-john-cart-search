import { useEffect, useState } from "react"

const useProducts = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(json => setProduct(json))
    }, []);
    
    return [product, setProduct];
}

export default useProducts;