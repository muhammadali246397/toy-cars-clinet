import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorimg from '../../../assets/images/404/404-1.jpg'

const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <div id="error-page">
               <div className='w-3/4 mx-auto relative'>
               <img src={errorimg} alt="" />
               <Link to='/'><button className='absolute top-5 left-2 btn btn-outline'>Back to home</button></Link>
               </div>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default Error;