import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Shared/Navbar/Navigation';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;