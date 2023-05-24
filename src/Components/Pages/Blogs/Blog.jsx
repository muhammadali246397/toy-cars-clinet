import React from 'react';

const Blog = () => {
    return (
        <div className='my-20'>
                <div className='my-10'>
                    <h2 className='font-semibold text-2xl text-orange-700 mb-5'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p className='font-semibold'><span className='font-bold text-orange-700'>Access Token :</span>  Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API.</p>
                    <p className='font-semibold'><span className='font-bold text-orange-700'>Refresh Token :</span>As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to "refresh" the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.</p>
                </div>
        </div>
    );
};

export default Blog;