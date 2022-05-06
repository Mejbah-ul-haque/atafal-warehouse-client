import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../Shared/Footer/PageTitle/PageTitle';

import './Blog.css';

const Blog = () => {
    return (
        <div style={{ minHeight: '100vh' }} className='container'>
            <PageTitle title='Blog'></PageTitle>
            <h2 className='text-center text-uppercase fs-5 my-5'><span style={{ color: '#003366', borderRadius: '50px', border: '2px solid #003366' }} className='py-2 px-5'>Atafal Blog</span></h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div className="col">
                    <div className="card h-100 blog-card">
                        <div className='blog-q'>
                            <h5>Difference between Javascript and Node.js?</h5>
                        </div>

                        <div className="card-body pb-0">
                            <p className="card-text">JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all.</p>
                            <Link to={'/answer1'}>
                                <p className='text-center btn-read-more py-3'><button className='blog-btn border-0'>Read more...</button></p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 blog-card">
                        <div className='blog-q'>
                            <h5>When should you use Node when should you use Mongodb?</h5>
                        </div>

                        <div className="card-body pb-0">
                            <p className="card-text">MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates.</p>
                            <Link to={'/answer2'}>
                                <p className='text-center py-3 btn-read-more'><button className='blog-btn border-0'>Read more...</button></p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 blog-card">
                        <div className='blog-q'>
                            <h5>What is the different between SQL and noSQL?</h5>
                        </div>

                        <div className="card-body pb-0">
                            <p className="card-text">SQL programming can be effectively used to insert, search, update, delete database records. NoSQL database is used for distributed data stores with humongous data storage needs. </p>
                            <Link to={'/answer3'}>
                                <p className='text-center py-3 btn-read-more'><button className='blog-btn border-0'>Read more...</button></p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 blog-card">
                        <div className='blog-q'>
                            <h5>What is the purpose of jwt and how does it use?</h5>
                        </div>

                        <div className="card-body pb-0">
                            <p className="card-text">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. </p>
                            <Link to={'/answer4'}>
                                <p className='text-center py-3 btn-read-more'><button className='blog-btn border-0'>Read more...</button></p>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;