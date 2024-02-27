import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {


    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart?.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
        <div>
            {
                cart?.length > 0 ?
                    (<div className='md:flex lg:flex lg:px-8 px-4'>
                        <div className='grid grid-cols-1 min-h-[80vh] lg:min-h-[60vh] mx-auto p-2 md:w-[50%] lg:w-[40%] lg:translate-x-16'>
                            {
                                cart.map((item, index) => (
                                    <CartItem key={item.id} item={item} itemIndex={index} />
                                ))
                            }
                        </div>

                        <div className='flex flex-col p-2 mx-auto md:w-[42%] lg:w-[35%] md:mt-10 lg:mt-16 md:justify-between lg:justify-between'>
                            <div className='flex flex-col gap-1'>
                                <div className='text-green-600 font-bold text-lg lg:text-xl uppercase'>Your Cart</div>
                                <div className='text-green-600 font-bold text-4xl lg:text-5xl uppercase'>Summary</div>
                                <p className='text-gray-600 font-bold text-lg'>
                                    <span>Total Items : {cart.length}</span>
                                </p>
                            </div>

                            <div>
                                <p className='text-gray-600 font-bold text-lg'>Total Amount : <span className='text-gray-800'>${totalAmount}</span></p>
                                <button className='flex w-full bg-green-600 text-slate-100 p-2 text-2xl font-bold rounded-md justify-center items-center mt-2'>
                                    Checkout Now
                                </button>
                            </div>

                        </div>
                    </div>) :
                    (<div className='flex flex-col items-center justify-center translate-y-[25vh]'>
                        <p className='text-gray-700 font-semibold text-4xl'>Cart is Empty</p>
                        <NavLink to={"/"}>
                            <button className='flex w-full bg-green-600 text-slate-100 py-2 px-6 text-2xl font-bold rounded-md justify-center items-center mt-6'>
                                Shop Now
                            </button>
                        </NavLink>
                    </div>)
            }
        </div>
    )
}

export default Cart