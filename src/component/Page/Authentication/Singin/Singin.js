//import { GoogleAuthProvider } from 'firebase/auth';
//import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Singin = () => {
   
  const {register, formState: { errors } ,  handleSubmit}= useForm()
	const {  singIn,googleSingIn } = useContext(AuthContext)
  const [loginError,setloginError]=useState('')
  // const googleProvider = new GoogleAuthProvider();
  
  const handleLogin = data => {
    console.log(data)
 setloginError('')
singIn(data.email, data.password)
.then(result =>{
  const user = result.user 
  console.log(user)
})
 .catch(error => {
  console.log(error.message)
  setloginError(error.message)
                          
})



} 

const handleGoogleSingin = () =>{
googleSingIn()
.then(result => {
  const user = result.user
  console.log(user)
})
.catch(err => console.log(err))
}


  
    return (
        <div>
           
<div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
  <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <h1 className="font-bold text-center text-2xl mb-5">Log In</h1>  
    <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      <form onSubmit={handleSubmit (handleLogin) } >
      <div className="px-5 py-8">
        <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
        <input type="text" {...register("email", { required: "Email Address is required" })} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
        
        <div className="space-y-1 text-sm">
			<label for="password" className="font-semibold text-sm text-gray-600 pb-1 block"> Password</label>
			<input type="password" {...register('password' ,{ required: "Password is required",minLength:{value:8,message:'password must be 6 characters or longer'}, pattern:{ value: /^(?=.*[0-9])(?=.*[a-z]).{8}$/,message:'password must be Stong' }  })} 
            name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md " />
			{errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
			
			
		
			{ loginError && <p className='text-red-500'>{loginError}</p> }
		</div>
      
        <button type="button" className="transition mt-5 duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span className="inline-block mr-2">Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
         <span className='text-xl text-gray-600'>Didn't have account? Please <Link className='text-red-500' to="/singup"> Signup </Link>  </span>
      </div>
      </form>
      <div className="p-5">
          <div className="grid grid-cols-3 gap-1">
              <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Facebook</button>
              <button onClick={() => handleGoogleSingin()} type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Google</button>
              <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Twitter</button>
          </div>
      </div>
        <div className="py-5">
        <div className="grid grid-cols-2 gap-1">
          <div className="text-center sm:text-left whitespace-nowrap">
            <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                <span className="inline-block ml-1">Forgot Password</span>
            </button>
          </div>
          <div className="text-center sm:text-right whitespace-nowrap">
            <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-bottom	">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="inline-block ml-1">Help</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Singin;