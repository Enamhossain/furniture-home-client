import React from 'react';
import img from '../../../../assest/pexels-visually-us-1648839.jpg'
import '../Middle-section/middle.css'

const Middle = () => {
    return (
        <div className='mt-10 mx-auto container'>

            <div className='flex  justify-between items-center content-center'>
                <section className=' '>
                    <h4 className='text'>OUR CREDO</h4>
                    <h2 className='text-4xl w-28'>Comfort  Beauty Versatility</h2>
                    <p className='text-2xl text-left w-55'>We have made quality our habit.It’s not something that <br/>  we just strivefor– we live by this principle every day.</p>
                </section>
                <section>
                    <img className='object-cover img  ' src={img} alt="" />
                </section>
            </div>

        </div>
    );
};

export default Middle;