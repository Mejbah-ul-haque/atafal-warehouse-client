import React from 'react';
import useItems from '../Hooks/useItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const MyItems = () => {
    const [items, setItems] = useItems([]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete this item?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <>
            <div className='py-4 mb-5 bg-light text-center'>
                <h3 className='fs-4 fw-bold'>My Items</h3>
                <div style={{ height: '1px' }} className='bg-dark w-50 d-block mx-auto'></div>
                <p className='text-muted'>product informations</p>
            </div>
            <div className='w-50 mx-auto'>
                {
                    items.map(item => <div className='border mb-2 p-2 bg-light'
                        key={item._id}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <small><img style={{ height: '50px' }} className='img-fluid' src={item.img} alt="" /></small>
                            <h5 className='fs-6 fw-bold text-uppercase'>{item.name.slice(0, 25)}</h5>

                            <button className='border bg-danger' onClick={() => handleDelete(item._id)}><FontAwesomeIcon className='text-light p-2' icon={faTrash}></FontAwesomeIcon></button>
                        </div>

                    </div>)
                }
            </div>
        </>

    );
};

export default MyItems;