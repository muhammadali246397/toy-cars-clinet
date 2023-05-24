import React from 'react';

const Blog = () => {
    return (
        <div className='my-20 '>
            <div className='my-10 bg-orange-100 p-4'>
                <h2 className='font-semibold text-2xl text-orange-700 mb-5'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='font-semibold'><span className='font-bold text-orange-700'>Access Token :</span>  Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API.</p>
                <p className='font-semibold'><span className='font-bold text-orange-700'>Refresh Token :</span>As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to "refresh" the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.</p>
                <p>we can store the access token and refresh token browser Local storage or HTTP only cookee </p>
            </div>
            <div className='my-10 bg-orange-100 p-4'>
                <h2 className='font-semibold text-2xl text-orange-700 mb-5'>2. Compare SQL and NoSQL databases?</h2>
                <div className='grid md:grid-cols-2'>
                    <div className=''>
                        <h2 className='font-bold text-orange-700'>SQL database</h2>
                        <ul>
                            <li>Relational database manegment system</li>
                            <li>These databases have fixed or static or predefined schema</li>
                            <li>These databases are best suited for complex queries</li>
                            <li>These databases are not suited for hierarchical data storage.</li>
                            <li>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold text-orange-700'>NoSQL database</h2>
                        <ul>
                            <li>Non-relational or distributed database system.</li>
                            <li>They have a dynamic schema</li>
                            <li>These databases are best suited for hierarchical data storage.</li>
                            <li>These databases are not so good for complex queries</li>
                            <li>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='my-10 bg-orange-100 p-4'>
                <h2 className='font-semibold text-2xl text-orange-700 mb-5'>3. What is express js? What is Nest JS ?</h2>
                <p className='font-semibold'><span className='font-bold text-orange-700'>Express js :</span>  Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
                <p className='font-semibold'><span className='font-bold text-orange-700'>Nest js :</span>Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
             
            </div>
            <div className='my-10 bg-orange-100 p-4'>
                <h2 className='font-semibold text-2xl text-orange-700 mb-5'>4.What is MongoDB aggregate and how does it work?</h2>
                <p className='font-semibold'><span className='font-bold text-orange-700'>MongoDB aggregate :</span>  Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
               
            </div>
        </div>
    );
};

export default Blog;