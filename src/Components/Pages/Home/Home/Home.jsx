import React from 'react';
import Bannar from '../Bannar/Bannar';
import Galery from '../Galery/Galery';
import Category from '../Category/Category';
import Aosb from '../Bannar/Aosb';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Aosb></Aosb>
            <Galery></Galery>
            <Category></Category>
        </div>
    );
};

export default Home;