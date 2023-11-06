import React from 'react'
import { IoPeopleOutline} from 'react-icons/io5'
import { HiOutlineMenuAlt2, HiOutlineHome } from 'react-icons/hi'
import { CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci'
import { IoHeartOutline } from 'react-icons/io5'
import {IoSettingsOutline} from 'react-icons/io5'
import {BsBalloonHeart} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'



const Sidebar = () => {
  return (
    <div className='fixed top-0 let-0 h-screen p-2 bg-gray-100'>
      <ul className='p-5 space-y-8'>

        <li>
          <button>
            <HiOutlineMenuAlt2 size={'1.5rem'} />
          </button>
        </li>

       <li>
        <NavLink to ='/Register'>
        <button>
          <BsBalloonHeart size={'1.5rem'} />
        </button>
        </NavLink>
       </li>

      
        <li>
          <NavLink to='/'>
            <button>
              <HiOutlineHome size={'1.5rem'} />
            </button>
          </NavLink>
        </li>

        

        <li>
          <NavLink to='/Cart'>
            <button>
              <CiShoppingCart size={'1.5rem'} />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to='/Favorites'>
            <button>
              <IoHeartOutline size={'1.5rem'} />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to='/Order'>
            <button>
              <CiDeliveryTruck size={'1.5rem'} />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to='/Settings'>
            <button>
              <IoSettingsOutline size={'1.5rem'} />
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/Account'>
            <button>
              <IoPeopleOutline size={'1.5rem'} />
            </button>
          </NavLink>
        </li>
       

      </ul>
    </div>
  )
}


export default Sidebar