import React from 'react';
// import BookingModal from './BookingModal/BookingModal';


const FurnitureCard = ({ allProducts,setOpen,setProduct }) => {
  const { picture, title, resalePrice, originalPrice, location, yearsOfUse, time, seller } = allProducts
  
  const showModal = () => {
    setProduct(allProducts)
    setOpen(true);
    
  };
  return (
    <div>
      < div className="group relative block overflow-hidden">
        <button
          className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        >
          <h3 className="sr-only">Wishlist</h3>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src={picture}
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <span
            className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
          >
            New
          </span>

          <h3 className="mt-4 text-lg font-small text-gray-500">{title}</h3>

          <p className="mt-2">
            <h3 className=""> Regular Price:${resalePrice} </h3>
            <h3 className="tracking-wider text-gray-500"> original_price:${originalPrice} </h3>
          </p>
          <p>

            <h3 className="">Location:{location} </h3>
            <h3 className="">Time:{time} </h3>
            <h3>Use Year: {yearsOfUse}</h3>
          </p>

          <h2 className='text-xl font-medium'>{seller}</h2>

          <form className="mt-4">
            <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105" onClick={showModal} type="button" >
              Buy Now
            </button>
           

          </form>

        </div>
      </div>


    </div>



  );
};

export default FurnitureCard;