import React from 'react';

const About = () => {
    return (
        <div>
            <div className='pt-5 bg-light text-center'>
                <h3 className='fs-5 fw-bold text-uppercase'>About Us</h3>
                <div style={{ height: '1px' }} className='bg-dark w-50 d-block mx-auto'></div>
                <p className='mt-2 pb-5'><em>"Your satisfaction is our main goal"</em></p>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-9 d-block mx-auto mt-5">
                        <h4 className='mb-4'>We Connect People and Build Communities to Create Economic Opportunity For All</h4>
                        <p>At Atafal Warehouse, we create pathways to connect millions of sellers and buyers in more than 190 markets around the world. Our technology empowers our customers, providing everyone the opportunity to grow and thrive — no matter who they are or where they are in the world. And the ripple effect of our work creates waves of change for our customers, our company, our communities and our planet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;