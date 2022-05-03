import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { name, img, description, quantity, price } = item;
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    const navigateToManageInventory = () => {
        navigate('/inventories');
    }

    return (
        <>
            <div className='py-4 bg-light text-center'>
                <h3 className='fs-4 fw-bold'>INVENTORY PAGE</h3>
                <div style={{ height: '1px' }} className='bg-dark w-50 d-block mx-auto'></div>
                <p className='text-muted'>product informations</p>
                <button onClick={navigateToManageInventory} style={{ margin: '30px', border: '2px solid #003366', borderRadius: '50px', backgroundColor: '#003366' }} className='text-center fw-bold py-2 px-3 text-white btn add-new-item-btn'>Manage Inventories</button>
            </div>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-lg-10 ">

                        <div className="card border-0">
                            <div className="row g-0 d-flex align-items-center">
                                <div className="col-md-5">
                                    <img src={img} className="img-fluid border rounded-start w-100" alt="..." />
                                </div>
                                <div className="col-md-7 px-4">
                                    <div className="text-center">
                                        <h5 className="card-title text-secondary text-start fs-4 fw-bold text-capitalize my-3">{name}</h5>
                                        <p className='text-start'>{description}</p>
                                        <p className='py-0 me-2 text-start'>Price:  <button className=' btn bg-white fs-6 fw-bold text-danger'>${price}</button></p>


                                        <div className="d-flex justify-content-between">

                                            <p className='py-0'><small> Quantity </small><button className='border border-muted bg-white w-100 fs-4 fw-bold pt-1 py-md-0'>{quantity}</button></p>
                                            <p className='text-center mt-2 pb-0 others-btn-para bg-white w-50 '><button className='bg-secondary text-white border-0 mt-3 py-2 px-lg-5 px-4 others-btn text-uppercase'>sold</button></p>
                                            <p className='text-center mt-2 pb-0 others-btn-para bg-white w-50 '><button className='bg-dark text-white border-0 mt-3 py-2 others-btn text-uppercase w-100'>Delivered</button></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inventory;