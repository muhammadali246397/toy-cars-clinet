import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AOSComponent from '../Bannar/Aosb';

const Category = () => {
    const [cars, setCars] = useState([]);
    const [categorycar, setCategorycar] = useState('sports car')

    useEffect(() => {
        fetch(`http://localhost:3000/toys/${categorycar}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [categorycar])

    const handleCategory = data => {
        setCategorycar(data)
    }
    return (
        <div className=" my-20">
            <Tabs>
                <TabList className='text-center'>
                    <Tab>Shop By Category</Tab>
                </TabList>

                <TabPanel>
                    <Tabs>
                        <TabList className='text-center mb-5 pb-5'>
                            <Tab><button onClick={() => handleCategory('sports car')}>sports Cars</button></Tab>
                            <Tab><button onClick={() => handleCategory('police car')}>Police Cars</button></Tab>
                            <Tab><button onClick={() => handleCategory('truck')}>trucks</button></Tab>
                        </TabList>

                        <TabPanel>
                            <AOSComponent>
                                <div style={{ justifyContent: 'space-evenly' }} className='flex mt-10'>

                                    {
                                        cars?.map((car,ind) =>  <div key={ind} className="card w-96 bg-base-100 shadow-xl">
                                        <figure><img src={car.photo}alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{car.carname}</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div> )
                                    }

                                </div>
                            </AOSComponent>
                        </TabPanel>
                        <TabPanel>
                            <AOSComponent>
                                <div style={{ justifyContent: 'space-evenly' }} className='flex mt-10'>
                                {
                                        cars?.map((car,ind) =>  <div key={ind} className="card w-96 bg-base-100 shadow-xl">
                                        <figure><img src={car.photo}alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{car.carname}</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div> )
                                    }
                                    
                                </div>
                            </AOSComponent>
                        </TabPanel>
                        <TabPanel>
                            <AOSComponent>
                                <div style={{ justifyContent: 'space-evenly' }} className='flex mt-10'>
                                {
                                        cars?.map((car,ind) =>  <div key={ind} className="card w-96 bg-base-100 shadow-xl">
                                        <figure><img src={car.photo}alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{car.carname}</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div> )
                                    }
                                </div>
                            </AOSComponent>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );



};

export default Category;