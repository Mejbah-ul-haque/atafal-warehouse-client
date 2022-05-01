import React from 'react';
import useItems from '../../Hooks/useItems';
import Item2 from '../Item2/Item2';

const Items2 = () => {
    const [items] = useItems([]);
    return (
        <>
            <p style={{ backgroundColor: '#e2e2e2', marginTop: '70px' }} className='w-50 d-block mx-auto'><button style={{ border: '2px solid #003366', backgroundColor: '#003366', color: 'white', borderRadius: '10px' }} className='btn d-block mx-auto mt-5 mb-4 px-5 border border-5 border-white fw-bold text-uppercase'>Others Items</button></p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                {
                    items.slice(8, 14).map(item2 => <Item2
                        key={item2.id}
                        item2={item2}
                    ></Item2>)
                }
            </div>

        </>
    );
};

export default Items2;