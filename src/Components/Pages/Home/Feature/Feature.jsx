import React from 'react';
import img1 from '../../../../assets/images/feature/Free-shipping.svg'
import img2 from '../../../../assets/images/feature/Easy-payment.svg'
import img3 from '../../../../assets/images/feature/easy-return.svg'
import img4 from '../../../../assets/images/feature/support.svg'
import AOSComponent from '../Bannar/Aosb';

const Feature = () => {
    return (
       <AOSComponent>
         <div className='grid md:grid-cols-4 gap-5 my-20'>
            <div className='flex space-x-4 items-center p-4'>
                <img className='w-28' src={img1} alt="" />
                <div className=''>
                    <h2  className='font-bold text-xl text-orange-700 mb-2'>Free shipping</h2>
                    <p className='font-semibold '>On order over 3000 (tk)</p>
                </div>
            </div>
            <div  className='flex space-x-4 items-center p-4'>
                 <img className='w-20' src={img2} alt="" />
                 <div>
                    <h2  className='font-bold text-xl text-orange-700 mb-2'>Quick Payment </h2>
                    <p className='font-semibold '>Online Quick Payment</p>
                </div>
            </div>
            <div  className='flex space-x-4 items-center p-4'>
                <img className='w-20' src={img3} alt="" />
                <div>
                    <h2  className='font-bold text-xl text-orange-700 mb-2'>Easy Return</h2>
                    <p className='font-semibold '>Return within 24 hours</p>
                </div>
            </div>
            <div  className='flex space-x-4 items-center p-4'>
                <img className='w-16' src={img4} alt="" />
                <div>
                    <h2 className='font-bold text-xl text-orange-700 mb-2'>24/7 Support</h2>
                    <p className='font-semibold '>Customer Online Support</p>
                </div>
            
            </div>
        </div>
       </AOSComponent>
    );
};

export default Feature;