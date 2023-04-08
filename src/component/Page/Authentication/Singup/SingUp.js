
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';
import useToken from '../../../hooks/useToken';

const SingUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser, updateUser,googleSingIn } = useContext(AuthContext);
  const [signUpError, setSignupError] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [token] = useToken(userEmail);
  const googleProvider = new GoogleAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  if (token) {
        navigate(from, { replace: true });
  }



      

      const handleGoogleSignUp = () => {
      googleSingIn(googleProvider)
                  .then(result => {
                        const user = result.user;
                        toast.success('User created successfully');
                        const userInfo = {
                              displayName: user.displayName,
                              email: user.email,
                              photoURL: user.photoURL,
                        }
                        updateUser(userInfo)
                              .then(() => {
                                    saveUser(user.displayName, user.email, user.photoURL);
                              })

                  })
                  .catch(err => {
                        setSignupError(err.message);
                        toast.error(err.message)
                  })
      }

  const handleSignUp = data => {
    setSignupError('');
    createUser(data.email, data.password)
          .then(result => {
                const user = result.user;
                toast.success('User created successfully');
                const userInfo = {
                      displayName: data.name,
                      photoURL: data.photo,
                      role: data.role
                }
                updateUser(userInfo)
                              .then(() => {
                                    saveUser(data.name, data.email, data.photo, data.role);
                              })
                      .catch(err => console.error(err))
          })
          .catch(err => {
                setSignupError(err.message)
                toast.error(err.message)
          })
}

const saveUser = (name, email, photo, role) => {
    const user = { name, email, photo, role };
    fetch('http://localhost:4000/users', {
          method: 'POST',
          headers: {
                'content-type': 'application/json'
          },
          body: JSON.stringify(user)
    })
          .then(res => res.json())
          .then(data => {
                setUserEmail(email)
          })
}



  
  return (


    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">SING UP</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form onSubmit={handleSubmit(handleSignUp)} className="px-5 py-7">
            <div>
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
              <input  {...register("name", { required: 'Name is Required' })} type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
              {errors.name && <p className='text-error'>{errors.name?.message}</p>}
            </div>
            <div>

              <label className="font-semibold text-sm text-gray-600 pb-1 block">Photo Url</label>
              <input {...register("photo", { required: 'PhotoURL is Required' })} type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
              {errors.photo && <p className='text-error'>{errors.photo?.message}</p>}
            </div>
            <div>
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Email</label>
              <input {...register("email", { required: 'Email Address is Required' })} type="email" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
              {errors.email && <p className='text-error'>{errors.email?.message}</p>}
            </div>
            <div>

              <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
              <input {...register("password", {
                required: 'Password is Required',
                minLength: { value: 8, message: 'Password must be 8 characters or longer' }
              })} type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
              {errors.password && <p className='text-error'>{errors.password?.message}</p>}
            </div>
            <div>
              {signUpError && <p className='text-error'>{signUpError}</p>}
            </div>

            <div>
              <label className="label"><span className="label-text text-white">Who are you?</span></label>
              <select className="select select-bordered w-full text-black"
                {...register("role", {
                  required: '=Select your role.',
                })}
              >
                <option selected>Buyer</option>
                <option>Seller</option>
              </select>
            </div>

            <input className='btn btn-accent w-full mt-5  className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white  py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"' value="Signup" type="submit" />
            
          </form>
          <span className='text-xl text-gray-600 mx-8'>Already  have account? Please <Link className='text-red-500' to="/singin"> Sign in </Link>  </span>
          <button onClick={() => handleGoogleSignUp()} type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Google</button>
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


  );
};

export default SingUp;