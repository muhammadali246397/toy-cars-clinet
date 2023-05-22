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
            element:<Alltoys></Alltoys>,
            loader:() => fetch('http://localhost:3000/alltoys')
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
          loader:({params}) => fetch(`http://localhost:3000/alltoys/${params.id}`)
        },
        {
          path:'/update/:id',
          element:<Update></Update>,
          loader:({params}) => fetch(`http://localhost:3000/mytoys/${params.id}`)

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