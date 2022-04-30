import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div className='container'>
            {/* <button style={{ border: '2px solid #003366', color: '#003366' }} className='btn fw-bold d-block mx-auto mt-4 mb-3'>Inventory Item Section</button> */}
            <p style={{ backgroundColor: '#e2e2e2' }} className=''><button style={{ border: '2px solid #003366', backgroundColor: '#003366', color: 'white', borderRadius: '10px' }} className='btn fw-bold d-block mx-auto mt-4 mb-3 border border-5 border-white text-uppercase'>Inventory Item Section</button></p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;