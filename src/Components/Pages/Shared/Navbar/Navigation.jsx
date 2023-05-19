import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/logo/logo.jfif'

const Navigation = () => {

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link className='mx-3 text-orange-600 font-semibold' to="/">Home</Link>
                       <Link className='mx-3 text-orange-600 font-semibold' to="/alltoys">All Toys</Link>
                       <Link className='mx-3 text-orange-600 font-semibold' to="/blog">Blogs</Link>
                        </ul>
                    </div>
                    <Link className='mx-3 'to='/'>
                        <div className="flex items-center space-x-4">
                            <img className='w-20' src={logo} alt="" />
                            <span className='font-bold text-orange-600 inline'>Toy <span className='text-black'>Cars</span> </span>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       <Link className='mx-3 text-orange-600 font-semibold' to="/">Home</Link>
                       <Link className='mx-3 text-orange-600 font-semibold' to="/alltoys">All Toys</Link>
                       <Link className='mx-3 text-orange-600 font-semibold' to="/blog">Blogs</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className='w-10 h-10 rounded-full border' src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navigation;