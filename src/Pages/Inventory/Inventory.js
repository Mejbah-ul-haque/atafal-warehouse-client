import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { name, img, description, quantity, price, supplierName } = item;
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    const navigateToManageInventory = () => {
        navigate('/inventories');
    }


    const onSubmit = data => {
        // const url = `http://localhost:5000/item`;
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result);
        //     })
    };

    const handleToDelivered = () => {

    }

    return (
        <>
            <div className='py-4 bg-light text-center'>
                <h3 className='fs-4 fw-bold'>INVENTORY PAGE</h3>
                <div style={{ height: '1px' }} className='bg-dark w-50 d-block mx-auto'></div>
                <p className='text-muted'>product informations</p>
                <button onClick={navigateToManageInventory} style={{ margin: '5px 0', border: '2px solid #003366', borderRadius: '50px', backgroundColor: '#003366' }} className='text-center fw-bold py-2 px-3 text-white btn add-new-item-btn'>Manage Inventories</button>
            </div>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col">

                        <div className="card border-0 ">
                            <div className="row g-0 d-flex align-items-center">
                                <div className="col-md-5">
                                    <img src={img} className="img-fluid border rounded-start w-100" alt="..." />
                                </div>
                                <div className="col-md-7 px-4">
                                    <div className="text-center">
                                        <h5 className="card-title text-secondary text-start fs-4 fw-bold text-capitalize my-3">{name}</h5>
                                        <p className='text-start'>{description}</p>

                                        <p className='py-0 me-2 text-start'>Price:  <button className=' btn bg-white fs-4 fw-bold text-danger'>${price}</button></p>
                                        <p className='text-start'>Supplier Name : {supplierName}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col ">
                                    <div className='d-flex justify-content-around  bg-light py-3'>
                                        <p className='mb-0'>Quantity:<span className='fs-4 fw-bold border px-2 py-1'>{quantity}</span></p>
                                        <form className='d-flex align-items-center' onSubmit={handleSubmit(onSubmit)}>
                                            <input className='bg-dark btn text-light ms-4' type="submit" value='Restock' />
                                            <input className='text-center w-25 py-1' type="number" {...register("quantity")} />
                                        </form>
                                        <button onClick={handleToDelivered} className='bg-dark btn text-white ms-sm-4 '>Delivered</button>
                                    </div>

                                </div>
                                <p></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inventory;