import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { name, img, description, quantity, price, supplierName } = item;
    const navigate = useNavigate();

    const { register } = useForm();



    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    // const handleRestock = event => {
    //     event.preventDefault();
    //     const quantity = event.target.quantity.value;
    //     const updateQuantity = { quantity };

    //     const url = `http://localhost:5000/item/${id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updateQuantity)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('successful', data);
    //             alert('hahahahhahaha')
    //             event.target.reset();
    //         })

    // }

    const navigateToManageInventory = () => {
        navigate('/inventories');
    }


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

                                        <p className='py-0 me-2 text-start'><button style={{ color: 'darkblue' }} className=' btn bg-white fs-4 fw-bold'>${price}.00</button></p>
                                        <p className='text-start'>Supplier Name : {supplierName}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col ">
                                    <div className='d-flex justify-content-around  bg-light py-3'>
                                        <p className='mb-0'>Quantity:<span className='fs-4 fw-bold border px-2 py-1'>{quantity}</span></p>
                                        {/* <form className='d-flex align-items-center' onSubmit={handleAddQuantity}>
                                            <input className='bg-white btn text-dark px-0' type="button" value='Quantity:' />
                                            <input className='text-center w-50 p-0 fs-4 fw-bold' value={quantity} {...register("quantity")} />
                                        </form> */}
                                        <form className='d-flex align-items-center'>
                                            <input className='bg-dark btn text-light' type="submit" value='Restock' />
                                            <input className='text-center w-50 py-1' type="number" {...register("quantity")} />
                                        </form>
                                        <button onClick={handleToDelivered} className='bg-dark btn text-white '>Delivered</button>
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