"use client"

import {useState, useEffect} from "react";
import ProductsNewCard from "../components/ProductsNewCard";

export default function ProductsPage(){
    const [products, setProducts] = useState()

    useEffect(()=>{
        async function fetchProducts(){
            const res = await fetch("http://localhost:5300/api/getproducts")
            const data = await res.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts();

    },[])





    return (
  <>
    {products?.length === 0 && <h2>No Products Available</h2>}

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        padding: "20px"
      }}
    >
      {products?.map((product) => (
        <ProductsNewCard key={product._id} product={product} />
      ))}
    </div>
  </>
);
}