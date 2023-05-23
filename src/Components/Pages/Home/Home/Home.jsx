import React from 'react';
import Bannar from '../Bannar/Bannar';
import Galery from '../Galery/Galery';
import Category from '../Category/Category';
import Aosb from '../Bannar/Aosb';
import Feature from '../Feature/Feature';
import BestSale from '../BestSale/BestSale';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Galery></Galery>
            <Category></Category>
            <BestSale></BestSale>
            <Feature></Feature>
        </div>
    );
};

export default Home;