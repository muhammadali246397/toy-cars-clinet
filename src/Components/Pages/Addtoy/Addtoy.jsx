import React, { useContext } from 'react';
import background from '../../../assets/images/login/login.jpg'
import Swal from 'sweetalert2'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Addtoy = () => {
    const {users} = useContext(AuthContext)

    const addtoyInfo = event =>{
        
        event.preventDefault();
        const form = event.target;
        const sellername = form.sellername.value;
        const selleremail = form.selleremail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const carname = form.carname.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const toyInfo = {
            selleremail, sellername, price, rating, carname, quantity,category, description, photo
        }
        console.log(toyInfo)
        fetch('https://assignment-eleven-server-opal.vercel.app/alltoys',{
            method:'POST',
            headers:{
                "content-type":'application/json'
            },
            body:JSON.stringify(toyInfo)
            
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                  )
                  form.reset()
            }
        })

    }

    return (
        <div>
            <div style={{ backgroundImage: `url(${background})` }} className=" hero mx-auto py-20 my-10 relative h-full opacity-70 ">

                <div className="card w-full max-w-4xl shadow-2xl">
                    <h1 className="text-5xl font-bold text-center mb-5">Add Toy</h1>
                    <div className="card-body border-2">
                        <form onSubmit={addtoyInfo} >
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input name='sellername' defaultValue={users?.displayName} type="text" required placeholder="Seller Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input name='price' type="text" required placeholder="Price" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Car Name</span>
                                        </label>
                                        <input name='carname' type="text" required placeholder="Car Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Sub-Category</span>
                                        </label>
                                        <input type="text" placeholder="Category" required name='category' className="input input-bordered" />

                                    </div>
                                </div>
                                <div>
                                   
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input name='selleremail' defaultValue={users?.email} type="email" required placeholder="Seller Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input name='rating' type="text" required placeholder="Rating" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available quantity</span>
                                        </label>
                                        <input name='quantity' type="text" required placeholder="Available quantity" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input type="text" placeholder="Photo Url" required name='photo' className="input input-bordered" />

                                    </div>

                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" placeholder="Description" required name='description' className="input h-10 input-bordered" />

                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" value='Add-Toy' className='btn btn-primary' />
                            </div>
                        </form>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Addtoy;