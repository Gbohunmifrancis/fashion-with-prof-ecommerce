import React from 'react'
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'

const HeaderTop = ({children}) => {
  return (
    <div className='border-b border-gray-200 sm:block'>
      <div className='container-py'>
        <div className='flex justify-between items-center' >
          <div className='hidden lg:flex gap-1'>
            <div className='header_top_icon_wrapper'>
              <BsFacebook/>
            </div>
            <div className='header_top_icon_wrapper'>
              <BsTwitter/>
            </div>
            <div className='header_top_icon_wrapper'>
              <BsInstagram/>
            </div>
            <div className='header_top_icon_wrapper'>
              <BsLinkedin/>
            </div>

          </div>
          <div className='text-grap-500 text-[12px]'>
            <strong>FREE SHIPPING</strong>
            THIS WEEK ORDER OVER $89
          </div>
          <div className='flex gap-4'>
            <select name='currency'id='currency'>
              <option value="USD $">USD $</option>
              <option value="NGN ₦">NGN ₦</option>
              <option value="EUR €">EUR €</option>
            </select>

            <select name='language' id='language' className='text-gray-500 text-[12px] w-[80px]'>
              <option value = "English">English</option>
              <option value = "French">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
