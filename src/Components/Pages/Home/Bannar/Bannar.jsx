import React from 'react';
import bannar from '../../../../assets/images/bannar/bannr.avif'
import logo from '../../../../assets/images/logo/logo.jfif'
import AOSComponent from './Aosb';


const Bannar = () => {
  return (
    <AOSComponent animationDuration={500} >
      <div className="hero min-h-screen bg-white mt-10">
        <div className='md:flex justify-around items-center'>
          <img className='md:w-1/2' src={bannar} alt="" />
          <div>
            <div className="flex items-center space-x-4 sm:ms-4">
              <img className='w-20' src={logo} alt="" />
              <span className='font-bold text-orange-600 inline'>Toy <span className='text-black'>Cars</span> </span>
            </div>
            <h1 className='font-bold text-8xl text-center'><span className='text-orange-700 border-b-4'>BABY TOYS</span></h1>
            <p className='text-5xl mt-4 text-center'>CHILDREN'S ACTIVITIES</p>
          </div>
        </div>


      </div>
    </AOSComponent>
  );
};

export default Bannar;

