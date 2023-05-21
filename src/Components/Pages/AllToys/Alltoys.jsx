import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AOSComponent from '../Home/Bannar/Aosb';

const Alltoys = () => {
    const toys = useLoaderData()
    console.log(toys)
   
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy,ind) => <tr key={ind}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={toy.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div className='w-20'>
                                            <div className="font-bold">{toy.carname}</div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-primary btn-xs">View details</button>
                                </th>
                            </tr>)
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Alltoys;