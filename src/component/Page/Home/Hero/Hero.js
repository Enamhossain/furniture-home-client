import React from 'react';

import img2 from '../../../../assest/img-2.jpg'






const Hero = () => {

 
    return (
      <section>
	<div className="dark:bg-violet-400">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">Revamp Your Home with Sustainable Style: Shop our Resale Furniture Collection</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">Discover an exciting collection of pre-owned and vintage furniture at unbeatable prices. Browse our selection of gently-used furniture pieces that have been given a new lease of life. From retro couches to chic accent chairs, our inventory is constantly updated with unique and stylish finds. Shop with us and give your home the upgrade it deserves while also contributing to a sustainable future</p>
			<div className="flex flex-wrap justify-center">
				<button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button>
				<button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 text-gray-900">Learn more</button>
			</div>
		</div>
	</div>
	<img src={img2} alt="" className="w-1/2 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
</section>
    );
};

export default Hero;