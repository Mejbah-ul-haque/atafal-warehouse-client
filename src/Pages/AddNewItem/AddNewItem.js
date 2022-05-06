/* import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useItemDetails from '../Hooks/useItemDetails';
import './AddNewItem.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';

const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const [item] = useItemDetails();
    const [user] = useAuthState(auth);

    if (user) {
        console.log(user);
    }

    const onSubmit = data => {
        data.preventDefault();
        const myItems = {
            email: user.email,
            service: item.name,


        }
        axios.post('http://localhost:5000/myitems', myItems)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    alert("you are fensi");
                    data.target.reset();
                }
            })
    };


    return (
        <div >

            <h2>this is add item page: {user.displayName}</h2>

            <div className='py-5 bg-light text-center'>
                <h3 className='fs-5 fw-bold text-uppercase'>add a new item</h3>
                <div style={{ height: '1px' }} className='bg-dark w-50 d-block mx-auto'></div>

            </div>
            <div className='container'>
                <div className="row">
                    <div className="col">

                        <div className='mx-auto mt-5 item-add-input-field'>

                            <h3 className='fs-5 text-center'>Please add a new item</h3>
                            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                                <input className='mb-2' placeholder='Name' value={user.displayName} readOnly disabled{...register("name", { required: true, maxLength: 20 })} />
                                <input className='mb-2' placeholder='Email' value={user.email} readOnly disabled{...register("email", { required: true, maxLength: 20 })} />
                                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                                <input className='mb-2' placeholder='Supplier' type="text" {...register("supplierName")} />
                                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                                <input className='mb-2' placeholder='Image URL' type="text" {...register("img")} />
                                <input className='bg-dark btn text-light' type="submit" value='Add Item' />
                            </form>
                            <Link to='/inventories'>
                                <button style={{ marginTop: '100px', border: '2px solid #003366', borderRadius: '50px', backgroundColor: '#003366' }} className='text-center fw-bold py-2 px-3 text-white btn d-block mx-auto'>Back to Manage Inventory page</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewItem; */



import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './AddNewItem.css';

const AddNewItem = () => {
    const { register, reset, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    reset();
                }
            })
    };

    const navigateToManageInventory = () => {
        navigate('/inventories');

    }
    return (
        <div >
            <div className='py-5 bg-light text-center'>
                <h3 className='fs-5 fw-bold text-uppercase'>add a new item</h3>
                <div style={{ height: '1px' }} className='bg-dark w-50 d-block mx-auto'></div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col">

                        <div className='mx-auto mt-5 item-add-input-field'>

                            <h3 className='fs-5 text-center'>Please add a new item</h3>
                            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                                <input className='mb-2' placeholder='Email' {...register("email", { required: true, maxLength: 20 })} />
                                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                                <input className='mb-2' placeholder='Supplier' type="text" {...register("supplierName")} />
                                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                                <input className='mb-2' placeholder='Image URL' type="text" {...register("img")} />
                                <input className='bg-dark btn text-light' type="submit" value='Add Item' />
                            </form>
                            <button onClick={navigateToManageInventory} style={{ marginTop: '100px', border: '2px solid #003366', borderRadius: '50px', backgroundColor: '#003366' }} className='text-center fw-bold py-2 px-3 text-white btn d-block mx-auto'>Back to Manage Inventory page</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewItem; 