import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';


const Product = () => {

    const [ data,setFurnitureData ]= useState([])
        console.log(data)
    useEffect(() => {
       fetch('data.json')
       .then(res => res.json())
       .then(data => setFurnitureData(data))
    },[])
  
    
    

    return (
              <div>

<h1 className='text-center text-2xl '>Furniture Category</h1>
      <div className="flex min-h-screen items-center justify-center bg-neutral-800"> 
          
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {
            data.map(allData => <ProductCard
            key={allData.id}
            allData = {allData}
            ></ProductCard>)
          }
     </div>
     </div>
     </div>
  );
};

export default Product;