import { useEffect, useState } from "react"

const useItemDetails = id => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://salty-ocean-65045.herokuapp.com/item/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id]);
    return [item, setItem]
}

export default useItemDetails;