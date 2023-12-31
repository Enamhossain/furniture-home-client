import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({allData}) => {
    const { _id,img,name}= allData
    return (
        <div className="group relative mx-auto container  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">{name}</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>
      <button className="rounded-full bg-white-900 py-2 px-3.5 font-com text-lg  capitalize text-white shadow shadow-black/60 hover:bg-blue-400 bg-black/60"> <Link to={`/category/${_id}`}> Details </Link> </button>
        </div>
        
      </div>
    );
};

export default CategoryCard;


                                                                                                                                          
   