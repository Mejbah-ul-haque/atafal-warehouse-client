import React from 'react';
import Item from '../Item/Item';
import useItems from '../../Hooks/useItems';
import { useNavigate } from 'react-router-dom';

const Items = () => {
    const navigate = useNavigate();
    const [items] = useItems([]);

    const navigateToManageInventories = () => {
        navigate('/inventories')
    }

    return (
        <div id='items' className='container mt-4'>
            {/* <p style={{ backgroundColor: '#e2e2e2', marginTop: '70px' }} className='w-50 f-block mx-auto'><button style={{ border: '2px solid #003366', backgroundColor: '#003366', color: 'white', borderRadius: '10px' }} className='btn d-block mx-auto mt-5 mb-4 border border-5 border-white fw-bold text-uppercase'>Inventory Item Section</button></p> */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-lg-4 g-4">
                {
                    items.slice(0, 4).map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
            <p style={{ backgroundColor: '#e2e2e2', marginTop: '70px' }} className='w-50 f-block mx-auto'><button onClick={navigateToManageInventories} style={{ border: '2px solid #003366', backgroundColor: '#003366', color: 'white', borderRadius: '10px' }} className='btn d-block mx-auto mt-5 mb-4 px-3 py-2 border border-5 border-white fw-bold text-uppercase'>Manage Inventories</button></p>
        </div>
    );
};

export default Items;