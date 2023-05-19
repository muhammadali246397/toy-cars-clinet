import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../Components/Pages/Layout/Main';
import Home from '../Components/Pages/Home/Home/Home';


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
      ]
    },
  ]);

const Routs = () => {
    return (
        <div>

        </div>
    );
};

export {Routs,router};