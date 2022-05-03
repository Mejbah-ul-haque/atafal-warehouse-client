import React from 'react';
import useItems from '../../Hooks/useItems';
import Item2 from '../Item2/Item2';

const Items2 = () => {
    const [items] = useItems([]);
    return (
        <>
            <p style={{ backgroundColor: '#e2e2e2', marginTop: '70px' }} className='w-100 d-block mx-auto'><span style={{ color: 'white', borderRadius: '10px' }} className='btn fw-bold d-block mx-auto my-4 px-5 text-dark text-uppercase'> Extra Section two</span></p>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                {
                    items.slice(8, 14).map(item2 => <Item2
                        key={item2._id}
                        item2={item2}
                    ></Item2>)
                }
            </div>

        </>
    );
};

export default Items2;