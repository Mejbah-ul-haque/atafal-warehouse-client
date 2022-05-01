import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item2.css';

const Item2 = ({ item2 }) => {
    const { id, name, img, description, price, supplierName, quantity } = item2;
    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <div className="card ">
                <div className="row g-0 d-flex align-items-center">
                    <div className="col-md-6">
                        <img src={img} className="img-fluid rounded-start w-100" alt="..." />
                    </div>
                    <div className="col-md-6 px-4">
                        <div className="text-center">
                            <h5 className="card-title text-secondary fs-6 fw-bold text-uppercase my-3">{name}</h5>

                            <div className="d-flex justify-content-between">
                                <p className='py-0 me-2'><small> Price </small><button className='border border-muted bg-white w-100 fs-6 fw-bold text-danger'>{price}</button></p>
                                <p className='py-0'><small> Q.tity </small><button className='border border-muted bg-white w-100 fs-6 fw-bold'>{quantity}</button></p>
                            </div>
                            <p className='text-center mt-2 pb-0 others-btn-para'><button onClick={() => navigateToInventory(id)} className=' border-0 px-4 py-1 others-btn'>Manage</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item2;