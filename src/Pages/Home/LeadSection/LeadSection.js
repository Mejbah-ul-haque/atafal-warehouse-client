import React from 'react';
import extra3 from '../../../Images/Extra/extra3.jpg'
import extra4 from '../../../Images/Extra/extra4.jpg'

const LeadSection = () => {
    return (
        <div>
            <div className="container">
                <div className="row g-3 mt-1">
                    <div className="col-sm-12 col-md-6">
                        <img className='img-fluid w-100' src={extra3} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <img className='img-fluid w-100' src={extra4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadSection;