import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../Components/Pages/Layout/Main';
import Home from '../Components/Pages/Home/Home/Home';
import Alltoys from '../Components/Pages/AllToys/Alltoys';
import Blog from '../Components/Pages/Blogs/Blog';
import Login from '../Components/Pages/Login/Login';
import SignUp from '../Components/Pages/SignUp/SignUp';


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/alltoys',
            element:<Alltoys></Alltoys>
        },
        {
            path:'/blog',
           element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        }

      ]
    },
  ]);

const Routs = () => {
    return (
      <></>
    );
};

export {Routs,router};