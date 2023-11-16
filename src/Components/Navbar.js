import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose,AiFillTag} from 'react-icons/ai'
import {BsFillCartFill } from 'react-icons/bs'
import { MdOutlineDeliveryDining,MdHelp } from "react-icons/md"
import { MdFavorite  } from "react-icons/md"
import { FaWallet,FaUserFriends } from "react-icons/fa"






const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div onClick={handleClick} className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg::text-4xl px-2'>
                Great 
                <span className='font-bold'> Food</span>
            </h1>
            <div className='hidden lg:flex items-center bg-slate-400 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>
        {/* Search Function*/}

        <div className='bg-gray-200 rounded-full flex item-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch className='mt-2' size={25}/>
            <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search'/>
        </div>
        {/* Cart */}

        <div>
            <button className='bg-black text-white hidden md:flex items-center rounded-full py-2'>
                <BsFillCartFill size={20} className='mr-2'/> Cart
            </button>
        </div>

        {/* Mobile*/}

        {click ?<div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0 '>
        </div> : ''}

        {/* Side Menu */}

        <div className={click ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 ': 
        'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 ' }>
            <AiOutlineClose onClick={handleClick} size={30} className='absolute right-4 top-4 cursor-pointer '/>

            <h2 className='text-2xl p-4'>Good <span className='font-bold'>Food</span>
            </h2>

            <nav>
                <ul className='flex flex-col  p-6 text-gray-700'>
                    <li className='text-xl py-4 flex gap-3'><MdOutlineDeliveryDining size={30}/>Order</li>
                    <li className='text-xl py-4 flex gap-3'><MdFavorite  size={30}/>Favourites</li>
                    <li className='text-xl py-4 flex gap-3'><AiFillTag size={30}/>Promotions</li>
                    <li className='text-xl py-4 flex gap-3'><FaUserFriends size={30}/>Invite Friends</li>
                    <li className='text-xl py-4 flex gap-3'><FaWallet size={30}/>Wallet</li>
                    <li className='text-xl py-4 flex gap-3'><MdHelp size={30}/>Help</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar