import React from 'react';
import { useLoaderData } from 'react-router-dom';
import cover from '../../../../Furniturepicture/Cover pic.png'
import FurnitureCard from './FurnitureCard';



const Furniture = () => {

  const products = useLoaderData();
  return (

    <div className="text-gray-600 body-font mx-auto">
      <img className='mx-auto' src={cover} alt="" />
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">

            </h2>

            <p class="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
              natus?
            </p>
          </header>

          <div class="mt-8">
            <p class="text-right text-sm text-gray-500">
              Showing <span> 4 </span> of 40
            </p>
          </div>

          <ul class="mt-4 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">

            {
              products.map(product => <FurnitureCard
                key={product._id}
                allProducts={product}

              ></FurnitureCard>


              )}

          </ul>


        </div>
      </section>


    </div>


  );
};

export default Furniture;