import React from 'react';
import useItems from '../Hooks/useItems';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [items, setItems] = useItems([]);
    return (
        <div className='container'>
            <p style={{ margin: '40px' }} className='text-center'><span style={{ border: '2px solid #003366', borderRadius: '50px', backgroundColor: '#003366' }} className='fw-bold text-uppercase py-2 px-3 text-white'>Manage Inventories</span></p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    items.map(manageInventory => <ManageInventory
                        key={manageInventory.id}
                        manageInventory={manageInventory}
                    ></ManageInventory>)
                }
            </div>

        </div>
    );
};

export default ManageInventories;