import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Mytoy = () => {
    const { users } = useContext(AuthContext)
    const [mytoy, setMytoy] = useState([])
    console.log(mytoy)
    const url = `https://assignment-eleven-server-opal.vercel.app/mytoys?selleremail=${users?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoy(data))
    }, [])
    const handleDelete = id => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to detele this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-eleven-server-opal.vercel.app/mytoy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Delete successfull',
                                'success'
                            )
                            const remaining = mytoy.filter(toy => toy._id !== id)
                            setMytoy(remaining)
                        }
                    })
            }
        })


    }

    return (
        <div className='my-20'>
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
                                    <button onClick={() => handleDelete(`${toy._id}`)} className="btn btn-circle btn-xs  bg-white text-orange-700 border-none mx-5">
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