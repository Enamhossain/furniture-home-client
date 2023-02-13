
import React from 'react';

const Question = () => {
    return (

     <div className=" grid md:grid-cols-2 items-center md:gap-6 rounded-md  shadow-sm  container mx-auto mt-20 mb-10 ">
         <div className=' mb-20  text-3xl'>
             <h1>Have a question?</h1>
             <span>Left your e-mail and we will contact you soon</span>
         </div>
         
<form className='p-20 '>
  <div class="relative z-0 w-full mb-6 group text-white-100 bg-gray-200">
  <input type="text" name="floating_first_name" id="floating_first_name" class="block p-5 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
  </div>
  <div class="relative z-0 w-full mb-6 group bg-gray-200">
  <input type="text" name="floating_last_name" id="floating_last_name" class="block p-5 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
  </div>
  <div class="relative z-0 w-full mb-6 group bg-gray-200">
  <input type="email" name="floating_email" id="floating_email" class="block py-2.5 p-5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
   <div>
	<span className="mb-1">Message</span>
		<textarea rows="3" className="block bg-gray-200 z-0 w-full mb-6  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" spellcheck="false"></textarea>
		</div>
 
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 bg-orange-400">Contact</button>
</form>

    </div>
       
    );
};

export default Question;