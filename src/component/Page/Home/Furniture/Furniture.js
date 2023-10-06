import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import cover from '../../../../Furniturepicture/Cover pic.png'
import BookingModal from './BookingModal/BookingModal';
import FurnitureCard from './FurnitureCard';
import Loader from '../../../Shared/Loading/Loader';



const Furniture = () => {
  const [Open, setOpen] = useState(null);
  const [product,setProduct]=useState({})
  const [isLoading, setIsLoading] = useState(true);
  
  
  const products = useLoaderData();



  useEffect(() => {
    // Simulate data loading with a setTimeout for demonstration
    setTimeout(() => {
      // Fetch your data here (e.g., from an API)
      // Once the data is loaded, set isLoading to false
      // and update the data state
      setIsLoading(false);
    }, 1000); // Simulated 2 seconds of loading
  }, [products]);
  return (

    <div className="text-gray-600 body-font mx-auto">
      <img className='mx-auto' src={cover} alt="" />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">

            </h2>

            <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
              natus?
            </p>
          </header>

          <div className="mt-8">
            <p className="text-right text-sm text-gray-500">
              Showing <span> 4 </span> of 40
            </p>
          </div>
          {isLoading ? (
        <Loader />
      ) : (

          <ul className="mt-4 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
  
            {
              products.map(product => <FurnitureCard
                key={product._id}
                allProducts={product}
                setOpen={setOpen}
                setProduct={setProduct}

              ></FurnitureCard>


              )}


          </ul>
      )}
          {
            Open &&
            <BookingModal
              Open={Open}
              setOpen={setOpen}
              product={product}
              
            >
            </BookingModal>
          }





        </div>
      </section>


    </div>


  );
};

export default Furniture;