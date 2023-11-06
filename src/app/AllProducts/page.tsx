'use client'
import { client } from '@/lib/sanity'
import React, { useEffect, useState } from 'react'
import product from '../../../sanity/schemas/product';

const page = () => {
    const[products, setProducts] = useState();

    useEffect(()=>{
        const fetchAllProducts = async() =>{
            const allProducts = await client.fetch(`*[_type == "product"]`);
            setProducts(allProducts);
           
        }

        fetchAllProducts();

        // Listen for changes to the data in Sanity Studio**
        client.listen(`*[_type == "product"]`,()=>{
            fetchAllProducts();
        });

    },[])
    
  return (
    <div>
      <h3 className=""></h3>
    </div>
  )
}

export default page
