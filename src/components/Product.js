import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({ item }) => {


    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(item));
        toast.success("Item added to Cart");
    }

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from Cart")
    }

    return (
        <div className='flex flex-col items-center justify-between gap-3 p-3 mx-8 mt-10 rounded-xl hover:scale-110 hover:shadow-2xl transition duration-300 ease-in'>
            <div>
                <p className='text-gray-700 font-semibold text-lg text-left truncate w-64 mt-1'>{item.title}</p>
            </div>
            <div>
                <p className='text-gray-400 w-64 font-normal text-[10px] text-left'>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
            <div className='h-[180px]'>
                <img src={item.image} className='h-full w-full' />
            </div>

            <div className='flex justify-between gap-12 items-center w-full mt-5'>
                <div>
                    <p className='text-green-600 font-semibold'>${item.price}</p>
                </div>
                {cart?.some((p) => p.id === item.id) ? (
                    <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                    hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
                        onClick={removeFromCart}>Remove item</button>
                ) : (
                    <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                    hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
                        onClick={addToCart}>Add to cart</button>
                )}
            </div>

        </div>
    )
}

export default Product