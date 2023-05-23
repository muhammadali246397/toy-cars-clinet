import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorimg from '../../../assets/images/404/404-1.jpg'

const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <div id="error-page">
               <div className='w-3/4 mx-auto'>
               <img src={errorimg} alt="" />
               </div>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default Error;