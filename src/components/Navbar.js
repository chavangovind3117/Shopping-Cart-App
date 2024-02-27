import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
import { useSelector } from 'react-redux';

const Navbar = () => {

    const { cart } = useSelector((state) => state);

    return (
        <>
            <div className='flex justify-between items-center h-20 align-middle px-2 md:px-4 lg:px-6'>
                <NavLink to="/">
                    <img src={logo} className='h-10 lg:h-14' />
                </NavLink>

                <div className='text-slate-100 font-medium flex items-center space-x-8 lg:space-x-14 mx-2'>
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>

                    <NavLink to="/cart">
                        <div className='relative'>
                            <MdShoppingCart className='text-xl' />
                            {
                                cart.length > 0 &&
                                <span className='absolute -top-3 -right-2 bg-green-600 w-5 h-5 flex 
                                justify-center items-center rounded-full text-white animate-bounce'>{cart.length}</span>
                            }
                        </div>
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default Navbar