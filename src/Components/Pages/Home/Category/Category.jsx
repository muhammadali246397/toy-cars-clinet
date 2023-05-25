import React, { useContext, useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AOSComponent from '../Bannar/Aosb';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Category = () => {
    const {users} = useContext(AuthContext)
    const [cars, setCars] = useState([]);
    const [categorycar, setCategorycar] = useState('sports car')

    useEffect(() => {
        fetch(`https://assignment-eleven-server-opal.vercel.app/toys/${categorycar}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [categorycar])

    const handleCategory = data => {
        setCategorycar(data)
    }
    const viewDetails = () => {
        if(!users){
            alert('can not show details without login')
        }
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
                                <div style={{ justifyContent: 'space-evenly' }} className='md:flex mt-10'>

                                    {
                                        cars?.map((car,ind) =>  <div key={ind} className="card w-96 bg-base-100 shadow-xl">
                                        <figure><img src={car.photo}alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-orange-700">Name : {car.carname}</h2>
                                            <p>Price : {car.price}</p>
                                            <p>Ratings : {car.rating}</p>
                                            <div className="card-actions justify-end">
                                                <button onClick={viewDetails} className="btn btn-primary">View Details</button>
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
                                            <h2 className="card-title text-orange-700">Name :{ car.carname}</h2>
                                            <p>Price : {car.price}</p>
                                            <p>Ratings : {car.rating}</p>
                                            <div className="card-actions justify-end">
                                                <button onClick={viewDetails}  className="btn btn-primary">View Details</button>
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
                                            <h2 className="card-title text-orange-700">Name : {car.carname}</h2>
                                            <p>Price : {car.price}</p>
                                            <p>Ratings : {car.rating}</p>
                                            <div className="card-actions justify-end">
                                                <button onClick={viewDetails}  className="btn btn-primary">View Details</button>
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