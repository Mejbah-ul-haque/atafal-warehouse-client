import React from 'react';
import PageTitle from '../Shared/Footer/PageTitle/PageTitle';

import './Blog.css';

const Blog = () => {
    return (
        <div style={{ minHeight: '100vh' }} className='container'>
            <PageTitle title='Blog'></PageTitle>
            <h2 className='text-center text-uppercase fs-5 my-5'><span style={{ color: '#003366', borderRadius: '50px', border: '2px solid #003366' }} className='py-2 px-5'>Atafal Blog</span></h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div className='blog-q'>
                            <h5>Difference between Javascript and Node.js?</h5>
                        </div>

                        <div className="card-body pb-0">
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className='text-center'><button className='blog-btn border-0'>Read more...</button></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className='blog-q'>
                            <h5>Difference between Javascript and Node.js?</h5>
                        </div>

                        <div className="card-body pb-0">
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className='text-center'><button className='blog-btn border-0'>Read more...</button></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className='blog-q'>
                            <h5>Difference between Javascript and Node.js?</h5>
                        </div>

                        <div className="card-body pb-0">
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className='text-center'><button className='blog-btn border-0'>Read more...</button></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className='blog-q'>
                            <h5>Difference between Javascript and Node.js?</h5>
                        </div>

                        <div className="card-body pb-0">
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className='text-center'><button className='blog-btn border-0'>Read more...</button></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;