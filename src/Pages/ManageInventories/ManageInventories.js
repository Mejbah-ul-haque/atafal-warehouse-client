import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../Hooks/useItems';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [items, setItems] = useItems([]);
    const handleDelete = id => {

        const proceed = window.confirm('Are you sure want to delete this item from manage inventory?');

        if (proceed) {
            const url = `https://salty-ocean-65045.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                    }
                })
        }
    }
    return (
        <>
            <div className='pt-5 bg-light text-center'>
                <h3 className='fs-5 fw-bold text-uppercase'>Manage Inventory</h3>
                <div style={{ height: '1px' }} className='bg-dark w-50 d-block mx-auto'></div>

                <Link to='/addnewitem'>
                    <button style={{ margin: '30px', border: '2px solid #003366', borderRadius: '50px', backgroundColor: '#003366' }} className='text-center fw-bold py-2 px-3 text-white btn add-new-item-btn'>Add new item</button>
                </Link>
            </div>

            <div className='container mt-4'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        items.map(manageInventory => <ManageInventory
                            key={manageInventory._id}
                            handleDelete={handleDelete}
                            manageInventory={manageInventory}
                        ></ManageInventory>)
                    }
                </div>

            </div>
        </>
    );
};

export default ManageInventories;