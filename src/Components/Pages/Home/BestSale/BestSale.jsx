import React from 'react';
import leftimg from '../../../../assets/images/best-sale/left-img.webp'
import img1 from '../../../../assets/images/best-sale/img1.jpg'
import img2 from '../../../../assets/images/best-sale/img2.jpg'
import img3 from '../../../../assets/images/best-sale/img3.jpg'
import AOSComponent from '../Bannar/Aosb';

const BestSale = () => {
    return (
    <div>
          <AOSComponent>
          <div className='grid md:grid-cols-2 p-4'>
            
            <img className='' src={leftimg} alt="" />
            <div className='my-20'>
                <h2 className='font-bold text-5xl text-orange-700 mt-10 '>Best Selling cars</h2>
                <p className='mt-5'>Invite clip connection style underline boolean device connection.</p>
                <div className='grid grid-cols-3 gap-4 mt-20'>
                    <div>
                        <img  src={img1} alt="" />
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </AOSComponent>
    </div>
    );
};

export default BestSale;