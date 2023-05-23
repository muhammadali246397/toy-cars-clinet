import React from 'react';
import background from '../../../assets/images/login/login.jpg'
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const Update = () => {
    const previusdata = useLoaderData()
    console.log(previusdata)

        const updateInfo = event => {
            event.preventDefault();
            const form = event.target;
            const price = form.price.value;
            const quantity = form.quantity.value;
            const description = form.description.value;
            const updateIfnformation={price,quantity,description}
            console.log(updateIfnformation)
            fetch(`https://assignment-eleven-server-opal.vercel.app/mytoys/${previusdata._id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
               body:JSON.stringify(updateIfnformation)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire(
                    'Good job!',
                    'Sign-Up successfull',
                    'success'
                  )
                  form.reset()
            })
        }

    return (
        <div>
              <div style={{ backgroundImage: `url(${background})` }} className=" hero mx-auto py-20 my-10 relative h-full opacity-70 ">

<div className="card w-full max-w-md shadow-2xl">
    <h1 className="text-4xl font-bold text-center mb-5">Update your toy Info</h1>
    <div className="card-body border-2">
        <form onSubmit={updateInfo}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Update Price</span>
                </label>
                <input name='price' type="text" required placeholder="Price" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Update Quantity</span>
                </label>
                <input name='quantity' type="text" required placeholder="Quantity" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Update Description</span>
                </label>
                <input name='description' type="text" required placeholder="Description" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
                <input type="submit" value='update' className='btn btn-primary' />
            </div>
        </form>

    </div>


</div>
</div>
        </div>
    );
};

export default Update;