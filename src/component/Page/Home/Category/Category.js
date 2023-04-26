import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [ data,setFurnitureData ]= useState([])
        
    useEffect(() => {
       fetch('http://localhost:4000/categories')
       .then(res => res.json())
       .then(data => setFurnitureData(data))
    },[])

   

   


    return (
        <div>

        <h1 className='text-center text-2xl '>Furniture Category</h1>
              <div className="flex min-h-screen items-center justify-center "> 
                  
              <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                  {
                    data.map(allData => <CategoryCard
                    key={allData._id}
                    allData = {allData}
                    ></CategoryCard>)
                  }
             </div>
             </div>
             </div>
    );
};

export default Category;



  