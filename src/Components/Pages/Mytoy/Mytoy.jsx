import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Mytoy = () => {
    const { users } = useContext(AuthContext)
    const [mytoy, setMytoy] = useState([])
    console.log(mytoy)
    const url = `http://localhost:3000/mytoys?selleremail=${users?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoy(data))
    }, [])
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
                            mytoy.map((toy, ind) => <tr key={ind}>
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
                                    
                                    <Link to={`/update/${toy._id}`}><button className="btn btn-circle btn-xs bg-white text-orange-700 border-none ">
                                       <FaEdit></FaEdit>
                                    </button></Link>
                                    <button className="btn btn-circle btn-xs  bg-white text-orange-700 border-none mx-5">
                                        <FaTrash></FaTrash>
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Mytoy;