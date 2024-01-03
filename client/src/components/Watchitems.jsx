import React, { useState } from 'react'
import { FcInTransit } from "react-icons/fc";
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import Watch from '../assets/123.jpeg'
import W from '../assets/w.jpeg'
import Wa from '../assets/wa.jpeg'
import Wat from '../assets/wat.jpeg'
import Watc from '../assets/watc.jpeg'
import Watch1 from '../assets/watch1.jpeg'
import Watch2 from '../assets/watch2.jpeg'
import Watch3 from '../assets/watch.jpeg'
import { NavLink } from 'react-router-dom';




const Watchitems = () => {
  let Products = [
     {
      img: Watch,
      title: 'Watch',
      description: 'indian rupies',
      price: 439
    },    
    {
      img: W,
      title: 'Watch',
      description: 'indian rupies',
      price: 439
    },  
    {
      img: Wa,
      title: 'Watch',
      description: 'indian rupies',
      price: 439
    },  
    {
      img: Wat,
      title: 'Watch',
      description: 'indian rupies',
      price: 439
    },  
    {
      img: Watc,
      title: 'Watch',
      description: 'indian rupies',
      price: 439
    },  
    {
      img: Watch3,
      title: 'Watch',
      description: 'indian rupies',
      price: 439
    },  
    {
      img: Watch1,
      title: 'Watch',
      description: 'indian rupies',
      price: 439
    },  
    {
      img: Watch2,
      title: 'Watch',
      description: 'indian rupies',
      price: 439
    },  
  ]


  const [filteredProducts, setFilteredProducts] = useState(Products)
  const searchHandler = (e) => {
    const filteredArray = Products.filter((product) => product.title.toLocaleLowerCase().includes(e.target.value))
    if (filteredArray.length != 0) {
      setFilteredProducts(filteredArray);
    }
  }

  return (
    <div className=''>
      <div className='inset-0 top-0 z-10'>
 
        <div className='header flex justify-between items-center  '>
          <h1 className='text-4xl font-bold'>  ONLINE  SHOP  🛒</h1>
          
        </div>
        <p className='text-2xl font-bold text-gray-40 py-2'>Watches ⌚</p>
        <p className='text-sm text-gray-400'>Stylish Collection</p>
        
      </div>
     
      <div className="products grid grid-cols xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
        {Products && Products.map((product, idx) => {
          return (
            <button>
            <div keu={idx} className="product h-[300px] bg-white drop-shadow-2xl p-2 border hover:scale-110 trasition duration-500 cursor-pointer object-cover">
             <img src={product.img} alt=" " className='w-full h-[60%] object-cover p-2' />
              <div className='m-2 bg-gray-100 p-2'>
                <h1 className='text-xl font-semibold'>{product.title}</h1>
                <p className='text-sm'>{product.description}</p>
                <div className='flex justify-between items-center'>
                  <p className='text-xl font-bold'>₹{product.price}.00</p>
                  <button><CiShoppingCart size={'1.4rem'} /></button>
                 
                </div>

              </div>
            
            </div>
            </button>
          )
        })}

      </div>
      <NavLink to='/' >   <p className='text-4xl font-bold'>⬅</p> </NavLink>
    </div>
  )
}

export default Watchitems