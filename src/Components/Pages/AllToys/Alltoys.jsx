import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
                                        <div className=''>
                                            <div className="font-bold">{toy.carname}</div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td>
                                 {toy.sellername}
                                </td>
                                 <td>
                                  {toy.category}
                                </td>
                                <td>{toy.price} tk</td>
                                <td>{toy.quantity} pis</td>
                                <th>
                                    <Link to={`/details/${toy._id}`}><button className="btn btn-primary btn-xs">View details</button></Link>
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