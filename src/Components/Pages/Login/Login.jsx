import React from 'react';
import background from '../../../assets/images/login/login.jpg'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const logIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    return (
        <div style={{ backgroundImage: `url(${background})` }} className="hero mx-auto py-20 my-10 relative h-full opacity-70 ">

            <div className="card w-full max-w-md shadow-2xl">

                <div className="card-body border-2">
                    <form onSubmit={logIn}>
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
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <p className='text-xs'>New to toy cars? <Link className='font-bold text-white' to="/signup">Sign-Up</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value='Login' className='btn btn-primary' />
                        </div>
                    </form>

                </div>
                <div className=' border-2 rounded-full absolute text-7xl right-48 -top-11'>
                    <FaUserCircle></FaUserCircle>
                </div>

            </div>
        </div>
    );
};

export default Login;