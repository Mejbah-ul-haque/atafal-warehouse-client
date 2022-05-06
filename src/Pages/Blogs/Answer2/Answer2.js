import React from 'react';
import { Link } from 'react-router-dom';

const Answer2 = () => {
    return (
        <>
            <div className='py-4 bg-light text-center'>
                <h3 className='fs-5 fw-bold'>What is the Difference between Javascript and Node.js?</h3>
                <div style={{ height: '1px' }} className='bg-dark w-50 d-block mx-auto'></div>
                <Link to='/blog'>
                    <button style={{ border: '2px solid #003366', borderRadius: '50px', backgroundColor: '#003366' }} className='text-center fw-bold mt-4 py-2 px-3 text-white btn add-new-item-btn'>Back to Blog page</button>
                </Link>
            </div>
            <div className="container mx-auto mt-3">
                <div className="row">
                    <div className="col-lg-10 d-block mx-auto">
                        <div className="card border-0">
                            <p>
                                <table class="table p-4">
                                    <thead className='table-info text-center'>
                                        <tr >

                                            <th className='w-25' scope="col">compare</th>
                                            <th className='w-25' scope="col">NodeJs</th>
                                            <th className='w-25' scope="col">Mongodb</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='table-primary'>

                                            <td className='text-center' >Type</td>
                                            <td>Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</td>
                                            <td>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. </td>

                                        </tr>
                                        <tr >

                                            <td className='text-center'>Utility</td>
                                            <td>if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</td>
                                            <td>There are many web servers built with nodejs that will then use MongoDB for storing data.</td>
                                        </tr>
                                        <tr className='table-primary'>

                                            <td className='text-center'>Others</td>
                                            <td>	Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...</td>
                                            <td>If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Answer2;