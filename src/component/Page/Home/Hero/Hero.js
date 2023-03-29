import React from 'react';


import img from '../../../../assest/img-1.jpg'
import img2 from '../../../../assest/img-2.jpg'
import img3 from '../../../../assest/img-3.jpg'

import { Carousel } from 'antd';



const Hero = () => {

 
    return (
      <div class="container mx-auto">

  <Carousel autoplay>
    <div  >
      <img className="h-50 w-50 bg-cover object-cover" src={img} alt="" />
    </div>
    <div >
      <img className="h-50 w-50 bg-cover object-cover" src={img2} alt="" />
    </div>
    <div >
      <img className="h-50 w-50 bg-cover object-cover" src={img3} alt="" />
    </div>
   
  </Carousel>

</div>
    );
};

export default Hero;