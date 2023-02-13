import React from 'react';

import hero from '../../../../Furniturepicture/Furniture -Home -2.png'
const Banner = () => {
    return (
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" src={hero} alt="" />
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Create your space with our furniture</h1>
        <p class="mb-8 leading-relaxed">We have made quality our habit. It’s not something that we just strive for – we live by this principle every day. While most of the things about the creative process will be forgotten, the excellence of our products and services will be remembered. </p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy</button>
          <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Sell</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;