import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu=()=> {
  return (
    <div className='HotAccessoriesMenu'>
        <Link className='HotAccessoriesMenuLink' to='/music'>Music Store</Link>
        <Link className='HotAccessoriesMenuLink' to='/smartDevices'>Smart Devices</Link>
        <Link className='HotAccessoriesMenuLink' to='/Home'>Home</Link>
        <Link className='HotAccessoriesMenuLink' to='/Lifestyle'>Lifestyle</Link>
        <Link className='HotAccessoriesMenuLink' to='/MobileAccessories'>Mobile Accessories</Link>
      
    </div>
  )
}

export default HotAccessoriesMenu
