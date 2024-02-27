import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoating] = useState(false);
    const [items, setItems] = useState([]);

    async function fetchProductData() {

        setLoating(true);
        try {
            const result = await fetch(API_URL);
            const data = await result.json();

            setItems(data);

        }
        catch (error) {
            console.log("error while fetching api");
            setItems([]);
        }
        setLoating(false);
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div>
            {
                loading ? <Spinner /> :
                    items.length > 0 ?
                        (<div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 md:p-4 lg:grid-cols-4 lg:gap-8 lg:p-8 min-h-[80vh] mx-auto space-y-10 px-4 md:px-6
                    '>
                            {
                                items.map((item) => (
                                    <Product key={item.id} item={item} />
                                ))
                            }
                        </div>) :
                        (<div className='flex flex-col items-center justify-center translate-y-[25vh]'>
                            <p className='text-gray-700 font-semibold text-4xl'>NO data found</p>
                        </div>)
            }
        </div>
    )
}

export default Home