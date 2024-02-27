import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from Cart");
    }

    return (
        <div className='border-b-2 border-slate-700'>
            <div className='flex justify-between items-center gap-3 p-4 mt-10 outline-bottom rounded-xl'>
                <div className='h-[180px] lg:h-[200px] w-[40%] lg:w-[30%] '>
                    <img src={item.image} className='h-full w-full' />
                </div>
                <div className='w-[60%] flex flex-col justify-between gap-3 lg:gap-4 p-2'>
                    <h1 className='text-gray-700 font-semibold text-lg text-left truncate w-full mt-1'>{item.title}</h1>
                    <h1 className='text-gray-400 w-full font-normal text-[10px] text-left'>{item.description.split(" ").slice(0, 25).join(" ") + "..."}</h1>
                    <div className='flex justify-between gap-12 items-center w-full mt-5'>
                        <p className='text-green-600 font-semibold'>${item.price}</p>
                        <div onClick={removeFromCart} className='bg-red-400 rounded-full p-2 opacity-95 cursor-pointer'>
                            <MdDelete className='text-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem