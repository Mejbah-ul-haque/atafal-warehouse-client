import React from 'react';

const Item = ({ item }) => {
    const { _id, name, img, description, price, supplierName, quantity } = item;
    return (
        <div className='row'>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card border-0 mt-3">
                    <img className='img-fluid w-100 border' src={img} alt="" />
                    <div className="card-title">
                        <h2>{name}</h2>
                        <p>$ {price}</p>
                        <p><small>{description}</small></p>
                        <p>Supplier :{supplierName}</p>
                        <p>{quantity}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;