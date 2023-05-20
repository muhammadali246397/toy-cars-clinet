import React, { useContext, useState } from 'react';
import background from '../../../assets/images/login/login.jpg'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {logInGoogle,logInEmailPass} = useContext(AuthContext)
    const [error,setError] = useState(null)

    const googlesignin = () => {
        logInGoogle()
        .then(result => {
            alert('loged in successfylly')
        })
        .catch(error => {
            const err = error.message;
            setError(err)
        })
    }

    const logIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError(null)
        console.log(email, password)
        logInEmailPass(email,password)
        .then(result => {
            alert('login successfully')
            form.reset();
        })
        .catch(error => {
            const err = error.message;
            setError(err)
        })
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
                            <input name='email' type="email" required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" required name='password' className="input input-bordered" />
                            <label className="label">
                                <p className='text-xs'>New to toy cars? <Link className='font-bold text-white' to="/signup">Sign-Up</Link></p>
                                {
                                    error ? <p className='text-xs text-warning'>{error}</p> : ''

                                }
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