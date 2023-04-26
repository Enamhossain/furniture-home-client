
import React from 'react';
import img from '../../../../assest/Furniture -Home -2.png'
const Section = () => {
    return (

    <div>
        <section class="text-gray-600 body-font   ">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col flex-col-1 items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      You deserve a comfortable life
      </h1>
      <p class="mb-8 leading-relaxed">We have made quality our habit. It’s not something that we just strive for – we live by this principle every day..</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Sell</button>
      </div>
    </div>
    <div class="    lg:max-w-lg lg:w-full md:w-1/2 w-1/4">

      <img class="object-cover object-center rounded" alt="hero" src={img} />
    </div>
  </div>
</section>
    </div>
       
    );
};

export default Section;