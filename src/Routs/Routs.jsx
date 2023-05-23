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
import Mytoy from '../Components/Pages/Mytoy/Mytoy';
import Addtoy from '../Components/Pages/Addtoy/Addtoy';
import Details from '../Components/Pages/SingleToyDetails/Details';
import Update from '../Components/Pages/UpdateToy/Update';
import PrivateRoute from './PrivateRoute';
import Error from '../Components/Pages/ErrorPage/Error';


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/alltoys',
            element:<Alltoys></Alltoys>,
            loader:() => fetch('https://assignment-eleven-server-opal.vercel.app/alltoys')
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
        },
        {
          path:'/mytoy',
          element:<PrivateRoute><Mytoy></Mytoy></PrivateRoute>
         
        },
        {
          path:'/addtoy',
          element:<PrivateRoute><Addtoy></Addtoy></PrivateRoute>
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params}) => fetch(`https://assignment-eleven-server-opal.vercel.app/alltoys/${params.id}`)
        },
        {
          path:'/update/:id',
          element:<Update></Update>,
          loader:({params}) => fetch(`https://assignment-eleven-server-opal.vercel.app/mytoys/${params.id}`)

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