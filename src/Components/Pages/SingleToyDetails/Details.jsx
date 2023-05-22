import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const singleData = useLoaderData()
    console.log(singleData)
    return (
        <div className='my-10'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={singleData.photo} className="max-w-md rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-orange-700">{singleData.carname}</h1>
                        <p className="py-6">{singleData.description}</p>
                        <div className='flex my-8 '>
                            <div>
                                <p className='font-bold text-orange-700'>Seller Name : <span className='font-normal text-black'>{singleData.sellername}</span> </p> 
                                <p className='font-bold text-orange-700'>Price : <span className='font-normal text-black'>{singleData.price} tk</span> </p> 
                               
                                <p className='font-bold text-orange-700'>Avilable Quantity : <span className='font-normal text-black'>{singleData.quantity} pis</span> </p> 
                               
                            </div>
                            <div className='ml-10'>
                               
                            <p className='font-bold text-orange-700'>Seller Email : <span className='font-normal text-black'>{singleData.selleremail}</span> </p> 
                            <p className='font-bold text-orange-700'>Ratings : <span className='font-normal text-black'>{singleData.rating}</span> </p> 
                            </div>
                        </div>
                       <Link to='/alltoys'> <button className="btn btn-primary"> <FaArrowLeft></FaArrowLeft>  All-toy</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;