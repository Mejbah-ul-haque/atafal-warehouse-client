import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>welcome to Inventory page : {id}</h2>
        </div>
    );
};

export default Inventory;