import React from 'react';
import background from '../../../assets/images/login/login.jpg'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const signUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)
    }
    return (
        <div>
            <div style={{ backgroundImage: `url(${background})` }} className=" hero mx-auto py-20 my-10 relative h-full opacity-70 ">
            
                <div className="card w-full max-w-md shadow-2xl">
                <h1 className="text-5xl font-bold text-center mb-5">Sign-Up</h1>
                    <div className="card-body border-2">
                        <form onSubmit={signUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="Password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo Url" name='photo' className="input input-bordered" />
                                <label className="label">
                                    <p className='text-xs'>Allready have an account ? <Link className='font-bold text-white' to="/login">Log-In</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value='SignUp' className='btn btn-primary' />
                            </div>
                        </form>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default SignUp;