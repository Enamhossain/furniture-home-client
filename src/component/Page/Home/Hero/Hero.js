import React from 'react';
import img from '../../../../assest/img1.unsplash.jpg'
import img2 from '../../../../assest/img2-unsplash.jpg'
import img3 from '../../../../assest/img-3-unsplash.jpg'



const Hero = () => {
    return (
      <div>
             <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h3 className=" sm:text-5xl">
        You deserve a comfortable life
		</h3>
		<p className="px-8 mt-8 mb-12 text-lg">We have made quality our habit. It’s not something that we just strive for – we live by this principle every day. </p>
		<div className="flex flex-wrap justify-center">
        <button type="button" class="text-white bg-gradient-to-br from-pink-300 to-orange-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Get Started</button>
		
		</div>
	</div>
</section>
<section className='md:flex container mx-auto justify-around mt-5 pt-10 pb-10'>
    <img className='object-cover'  src={img} alt=""/>   
    <img className='w-96 relative bottom-24 ' src={img3} alt=""/>   
    <img  className='object-cover' src={img2} alt=""/>   
      
       
</section>
      </div>
    );
};

export default Hero;