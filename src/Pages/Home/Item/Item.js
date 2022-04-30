import React from 'react';

const Item = ({ item }) => {
    const { _id, name, img, description, price, supplierName, quantity } = item;
    return (
        <div className="col">
            <div className="card shadow-lg text-center">
                <img className='img-fluid border-bottom w-100 shadow-lg' src={img} alt="" />
                <div className="card-title">
                    <p className='fs-4 fw-bold text-justify'><span style={{ backgroundColor: '#003366', color: 'goldenrod' }} className='px-2 py-1 shadow-lg border border-5 border-white'>${price}</span></p>
                    <div className="px-3">
                        <h2 className='fw-bold fs-5 text-center text-uppercase'>{name}</h2>
                        <p className='text-muted text-capitalize px-1'><small>{description}</small></p>
                        <p className='text-center text-muted'>Supplier: <span className='text-dark'>{supplierName}</span></p>
                        <p><span style={{ boxShadow: "5px 10px goldenrod", border: "1px solid goldenrod" }} className='text-dark fw-bold rounded-circle px-2 py-3'><button className='border-0 bg-white fs-4 fw-bold'>{quantity}</button><small className='text-muted fw-normal'>pc</small></span></p>
                        <p className='text-center mt-4 pb-2'><button style={{ backgroundColor: '', color: 'goldenrod' }} className='btn btn-dark rounded-0 px-5'>Stock Update</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;