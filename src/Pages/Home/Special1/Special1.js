import React from 'react';
import extra1 from '../../../Images/Extra/extra1.jpg';
import extra2 from '../../../Images/Extra/extra2.jpg';
import item13 from '../../../Images/Items/item13.jpg';
import item18 from '../../../Images/Items/item18.jpg';
import item19 from '../../../Images/Items/item19.jpg';
import item20 from '../../../Images/Items/item20.jpg';

const Special1 = () => {
    return (
        <div className='container mt-4'>
            <h3 className='text-center mb-0 pb-0 '><span className='border-bottom border-4 border-primary pb-1'> Special-1 </span> </h3>
            <hr className='mt-2' />
            <div className="row g-2">
                <div className="col-sm-12 col-md-6">
                    <img className='img-fluid w-100' src={extra1} alt="" />
                </div>
                <div className="col-sm-6 col-md-3">
                    <img className='img-fluid w-100' src={item13} alt="" />
                </div>
                <div className="col-sm-6 col-md-3">
                    <img className='img-fluid w-100' src={item18} alt="" />
                </div>
                <div className="col-sm-6 col-md-3">
                    <img className='img-fluid w-100' src={item19} alt="" />
                </div>
                <div className="col-sm-6 col-md-3">
                    <img className='img-fluid w-100' src={item20} alt="" />
                </div>
                <div className="col-sm-12 col-md-6">
                    <img className='img-fluid w-100' src={extra2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Special1;