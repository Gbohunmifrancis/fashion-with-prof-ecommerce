import React from 'react'
import { BsSearch } from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {FiHeart} from 'react-icons/fi'
import {HiOutlineShoppingBag} from 'react-icons/hi'

const HeaderMain = ({children}) => {
  return (
    <div className='border-b border-gray-200 py-6'>
      <div className='container sm:flex justify-between items-center'>
        <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish'>
            Fashion with Prof</div>

        <div className='w-full sm:w-[300px] md:w-[70%] relative'>
            <input className='border-gray-200 border p-2 px-4 rounded-lg w-full' 
            type='text' placeholder='Enter any Product name...'
            />
            <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20}/>


            <div className='hidden lg:flex text-gray-500 text-[30px]'>
                <BiUser/>


                <div>
                    <FiHeart/>
                    <div>0</div>

                </div>
                <div>
                    <HiOutlineShoppingBag/>
                    <div>0</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMain
