import React from 'react';
import extra1 from '../../../Images/Extra/extra1.jpg';
import extra2 from '../../../Images/Extra/extra2.jpg';
import item13 from '../../../Images/Items/item13.jpg';
import item18 from '../../../Images/Items/item18.jpg';
import item19 from '../../../Images/Items/item19.jpg';
import item20 from '../../../Images/Items/item20.jpg';

const Special1 = () => {
    return (
        <div className='container mt-5'>
            <p style={{ backgroundColor: '#e2e2e2' }} className=''><button style={{ border: '2px solid #003366', backgroundColor: '#003366', color: 'white', borderRadius: '10px' }} className='btn fw-bold d-block mx-auto mt-4 mb-3 border border-5 border-white'>Special-1 Section</button></p>

            <div className="row g-2">
                <div className="col-12 col-md-6">
                    <img className='img-fluid w-100' src={extra1} alt="" />
                </div>
                <div className="col-6 col-md-3">
                    <img className='img-fluid w-100' src={item13} alt="" />
                </div>
                <div className="col-6 col-md-3">
                    <img className='img-fluid w-100' src={item18} alt="" />
                </div>
                <div className="col-6 col-md-3">
                    <img className='img-fluid w-100' src={item19} alt="" />
                </div>
                <div className="col-6 col-md-3">
                    <img className='img-fluid w-100' src={item20} alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <img className='img-fluid w-100' src={extra2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Special1;