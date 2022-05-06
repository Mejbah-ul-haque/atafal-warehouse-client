import React from 'react';
import { Link } from 'react-router-dom';

const Answer1 = () => {
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
                            <table className="table p-4">
                                <thead className='table-info'>
                                    <tr >

                                        <th className='w-25' scope="col">compare</th>
                                        <th className='w-25' scope="col">Javascript</th>
                                        <th className='w-25' scope="col">Nodejs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='table-success'>

                                        <td>Type</td>
                                        <td>JavaScript is a programming language. It is running in any web browser with a proper browser engine.</td>
                                        <td>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</td>
                                    </tr>
                                    <tr >

                                        <td>Utility</td>
                                        <td>Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</td>
                                        <td>It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</td>
                                    </tr>
                                    <tr className='table-success'>

                                        <td>Running Engine</td>
                                        <td>	JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</td>
                                        <td>Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Answer1;