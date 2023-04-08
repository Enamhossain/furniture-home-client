//import { Input } from "@material-tailwind/react";
import { Modal } from "antd";
import React, { useContext } from 'react'
import { AuthContext } from '../../../Authentication/Context/AuthProvider';

import Input from "../BookingModal/Input"
const BookingModal = ({setIsModalOpen,isModalOpen}) => {
  const {title}=isModalOpen


  const { user } = useContext(AuthContext);
  
  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const productName = form.name.value;
    const productPrice = form.price.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
          title: productName,
          price: productPrice,
          name,
          email,
          phone,
          location
    }
 
  }
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
    return (
     
<>
     
      <Modal className="p-7" title="Product Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
       {/* <div className="p-5">
       <Input size="lg" label="Product-Name"  />
       <br/>
      <Input size="lg" label="Product-Price" defaultValue={originalPrice} />
      <br/>
      <Input size="lg" label="Input Large" />
      <br/>
      <Input size="lg" label="Phone Number" />
      <br/>
      <Input size="lg" label="Metting Location" />

       </div> */}
{       
       <input name='product' type="text" placeholder="Product Name" defaultValue={title} disabled className="input input-bordered w-full" /> }

       </form>
      </Modal>
    </>
       
    );
};

export default BookingModal;