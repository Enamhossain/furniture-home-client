import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../Authentication/Context/AuthProvider";


const AddaProduct = () => {

      const { user } = useContext(AuthContext);
      const { register, handleSubmit, formState: { errors } } = useForm();
      const time = new Date();
      const navigate = useNavigate();

      const [categories, setCategories] = useState([])
      console.log(categories)
      useEffect(() => {
            axios.get('https://furnitur-home-server.vercel.app/categories')
                  .then(res => setCategories(res.data));
      }, [])

      const handleAddProduct = data => {
            console.log(data)

            const product = {
                  product: data.name,
                  img: data.photo,
                  category: data.category,
                  categoryId: data.categoryId,
                  location: data.location,
                  price: data.resale,
                  originalprice: data.original,
                  condition: data.condition,
                  yearofuse: data.used,
                  yearofpurchase: data.purchase,
                  seller: data.seller,
                  email: data.email,
                  sellerId: data.sellerId,
                  phone: data.phone,
                  time: data.time,
                  description: data.description



            }

            fetch('https://furnitur-home-server.vercel.app/products', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json',
                  },
                  body: JSON.stringify(product)
            })
                  .then(res => res.json())
                  .then(result => {
                        console.log(result)
                        toast.success('Product added successfully');
                        navigate('/dashboard/myproduct')
                  })

      }

      return (
            <div className="">
                  <h2 className='text-3xl text-center underline underline-offset-8 font-bold'>Add a Product</h2>
                  <div className='mt-3 rounded-lg   '>
                        <form className="p-8" onSubmit={handleSubmit(handleAddProduct)}>
                              <div className="form-control w-full ">
                                    <label className="label "><span className="label-text ">Product Name</span></label>
                                    <input type='text' {...register("name", {
                                          required: 'Product name is required'
                                    })} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400border-gray-700 text-gray-900" />
                                    {errors.name && <p className='text-error'>{errors.name.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text ">Product Image URL</span></label>
                                    <input type='text' {...register("photo", {
                                          required: 'Product Photo URL is required'
                                    })} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400border-gray-700 text-gray-900" />
                                    {errors.photo && <p className='text-error'>{errors.photo.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label"><span className="label-text ">Product Category</span></label>
                                    <select className="select select-bordered w-full" {...register("category", {
                                          required: 'Category URL is required'
                                    })}>

                                          {
                                                categories.map(category => <option key={category._id} title={category._id}>{category.name}</option>)
                                          }
                                    </select>
                              </div>
                              <div className="form-control w-full">
                                    <label className="label"><span className="label-text ">Please select categoryID(Please hove on the id)</span></label>
                                    <select className="select select-bordered w-full" {...register("categoryId", {
                                          required: 'Category ID is required'
                                    })}>

                                          {
                                                categories.map(category => <option key={category._id} title={category.title}>{category._id}</option>)
                                          }
                                    </select>
                              </div>
                              <div className="form-control w-full">
                                    <label className="label"><span className="label-text ">Product Condition</span></label>
                                    <select className="select select-bordered w-full" {...register("condition", {
                                          required: 'Product condition data is required'
                                    })}>

                                          <option value="excellent">Excellent</option>
                                          <option value="good">Good</option>
                                          <option value="fair">Fair</option>
                                    </select>
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text ">Location</span></label>
                                    <input type='text' {...register("location", {
                                          required: 'Location is required'
                                    })} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400border-gray-700 text-gray-900" />
                                    {errors.location && <p className='text-error'>{errors.location.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text ">Resale Price</span></label>
                                    <input type='text' {...register("resale", {
                                          required: 'Resale price is required'
                                    })} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400border-gray-700 text-gray-900" />
                                    {errors.resale && <p className='text-error'>{errors.resale.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text ">Original Price</span></label>
                                    <input type='text' {...register("original", {
                                          required: 'Original price is required'
                                    })} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400border-gray-700 text-gray-900" />
                                    {errors.original && <p className='text-error'>{errors.original.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text ">User For</span></label>
                                    <input type='text' {...register("used", {
                                          required: 'Product used data required'
                                    })} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400border-gray-700 text-gray-900" />
                                    {errors.used && <p className='text-error'>{errors.used.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text ">Year of Purchase</span></label>
                                    <input type='text' {...register("purchase", {
                                          required: 'Product purchased year data required'
                                    })} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400border-gray-700 text-gray-900" />
                                    {errors.purchase && <p className='text-error'>{errors.purchase.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text ">Your Name</span></label>
                                    <input type='text' {...register("seller", {
                                          required: 'Seller name is required'
                                    })} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400border-gray-700 text-gray-900" />
                                    {errors.seller && <p className='text-error'>{errors.seller.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text">Your Email</span></label>
                                    <input defaultValue={user?.email} type='text' {...register("email", {
                                          required: 'Seller email is required'
                                    })} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                    {errors.email && <p className='text-error'>{errors.email.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text ">Contact Number</span></label>
                                    <input type='text' {...register("phone", {
                                          required: 'Seller phone number is required'
                                    })} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                    {errors.phone && <p className='text-error'>{errors.phone.message}</p>}
                              </div>

                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text ">Description</span></label>
                                    <textarea type='text' {...register("description", {
                                          required: 'Description is required'
                                    })} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 h-32 p-6" />
                                    {errors.description && <p className='text-error'>{errors.description.message}</p>}
                              </div>
                              <div className="form-control w-full">
                                    <label className="label "><span className="label-text ">Time</span></label>
                                    <input type='text' defaultValue={time} {...register("time", {
                                          required: 'Time is required'
                                    })} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                    {errors.time && <p className='text-error'>{errors.time.message}</p>}
                              </div>





                                    <input className="inline-block rounded bg-info mx-auto px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]" value="Add Product" type="submit" />
                              {/* <button
                                    type="button"
                                    
                              </button> */}
                        </form>
                  </div >

            </div>
      );
};

export default AddaProduct;