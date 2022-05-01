import React from 'react';

const ManageInventory = ({ manageInventory }) => {
    const { id, name, img, description, price, supplierName, quantity } = manageInventory;

    return (
        <div className="col">
            <div className="card text-center">
                <img className='img-fluid border-bottom w-100 shadow-sm' src={img} alt="" />
                <div className="">
                    <p className='fs-6 fw-bold text-justify'><span style={{ backgroundColor: '#003366', color: 'goldenrod' }} className='px-2 py-1  border border-5 border-white'>${price}</span></p>
                    <div className="px-3">
                        <h2 className='fw-bold fs-6 text-center text-uppercase'>{name}</h2>
                        <p className='text-muted text-capitalize px-1'><small>{description}</small></p>
                        <p className='text-center text-muted py-0 lh-1'><small> Supplier: <span className='text-dark'>{supplierName}</span></small></p>
                        <p className='py-0'>Quantity : <button className='border border-secondary bg-light fs-6 fw-bold'>{quantity}</button></p>
                        <p className='text-center mt-2 pb-0'><button style={{ backgroundColor: '', color: 'goldenrod' }} className='btn btn-danger text-white px-5 py-1'>Delete</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;