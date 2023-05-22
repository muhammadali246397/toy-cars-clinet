import React, { useContext, useState } from 'react';
import background from '../../../assets/images/login/login.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [error, setError] = useState(null);
    const { handleSignUp, updatename } = useContext(AuthContext)
    const navigate = useNavigate()

    const signUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)
        setError(null)


        handleSignUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                Swal.fire(
                    'Good job!',
                    'Sign-Up successfull',
                    'success'
                  )
                  navigate('/')

                updatename(user, name, photo)
                    .then(result => { })
                    .catch(error => console.log(error.message))
            })
            .catch(error => {
                const err = error.message;
                setError(err)
            })
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
                                <input name='name' type="text" required placeholder="Your Name" className="input input-bordered" />
                            </div>
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
                                <input name='password' type="password" required placeholder="Password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo Url" required name='photo' className="input input-bordered" />
                                <label className="label">
                                    <p className='text-xs'>Allready have an account ? <Link className='font-bold text-white' to="/login">Log-In</Link></p>
                                    {
                                        error ? <p className='text-xs text-warning'>{error}</p> : ''

                                    }
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