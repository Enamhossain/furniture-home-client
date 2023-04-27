import { Fragment,  } from "react";
import {
  
  Dialog,
  DialogHeader,
  Button
 
} from "@material-tailwind/react";

import React, { useContext } from 'react'
import { AuthContext } from '../../../Authentication/Context/AuthProvider';
import { toast } from "react-hot-toast";


const BookingModal = ({ Open, setOpen, product }) => {
  const { title, originalPrice } = product
  


  const { user } = useContext(AuthContext);

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const productName = form.product.value;
    const productPrice = form.price.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
          product: productName,
          price: productPrice,
          name,
          email,
          phone,
          location
    }



    fetch('https://furnitur-home-server.vercel.app/booking',{

     method:'POST',
     headers:{
      'content-type':'application/json'
     },
     body:JSON.stringify(booking)

    })
    .then(res => res.json())
    .then(data => {
     
      if (data.acknowledged) {
          setOpen(null)
          toast.success('Booking confirmed');
          
      }
      else{
         toast.error(data.message)
      }
     
  })

  }
  const handleOpen = () => setOpen(!Open);
  return (

    <>
      <Fragment>
        
        <Dialog open={Open} handler={handleOpen}>
          <DialogHeader>Product Booking details</DialogHeader>

          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10 p-10'>
                                    <input name='product' type="text" placeholder="Product Name" defaultValue={title} disabled className="input input-bordered w-full" />
                                    <input name='price' type="text" placeholder="Product Price" defaultValue={originalPrice} disabled className="input input-bordered w-full" />
                                    <input name='name' type="text" placeholder="Full Name" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
                                    <input name='email' type="email" placeholder="Email" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                                    <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                                    <input name='location' type="text" placeholder="Meeting Location" className="input input-bordered w-full" />
                                    <br />
                                    <Button color="green"  onSubmit={handleOpen}   >
                                    <input className=' w-full' type="submit" value="Submit" />


                                    </Button>
                              </form>

                              

        
        </Dialog>
      </Fragment>




    </>

  );
};

export default BookingModal;