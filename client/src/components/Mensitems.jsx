import React, { useState } from 'react'
import { FcInTransit } from "react-icons/fc";
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import Watch from '../assets/123.jpeg'
import Boys from '../assets/fashion15.jpeg'
import boyDress from '../assets/kidb1.jpeg'
import Vesti from '../assets/vesti.jpeg'
import Collection from '../assets/product13.jpeg'
import Tshirt from '../assets/dress.jpeg'
import Pants from '../assets/pant.jpeg'
import Coat from '../assets/coat.jpeg' 
import Coats from '../assets/coats.jpeg'
import T from '../assets/t.jpeg'
import Ts from '../assets/ts.jpeg'
import { NavLink } from 'react-router-dom';




const Watchitems = () => {
  let Products = [
    {
        img: Collection,
        title: 'T-shirts',
        description: 'indian rupies',
        price: 140
      },
    {
        img: Boys,
        title: 'Mens-wear',
        description: 'indian rupies',
        price: 499
      },
      {
        img: Tshirt,
        title: 'Mens-set',
        description: 'indian rupies',
        price: 679
      },
      {
        img: boyDress,
        title: 'Boys-wear',
        description: 'indian rupies',
        price: 679
      },
  
    {
      img: Vesti,
      title: 'Vesti-Shirt',
      description: 'indian rupies',
      price: 1250
    },
   
    {
        img: Pants,
        title: "Pants",
        description: 'indian rupies',
        price:785
    } ,
    {
        img: Coat,
        title: "Coat",
        description: 'indian rupies',
        price:785
    }  ,
    {
        img: Coats,
        title: "Coat",
        description: 'indian rupies',
        price:785
    }  ,
    {
        img: T,
        title: "T-shirt",
        description: 'indian rupies',
        price:785
    }  ,
    {
        img: Ts,
        title: "T-shirt",
        description: 'indian rupies',
        price:785
    }  ,
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
          <h1 className='text-4xl font-bold'> ONLINE  SHOP 👕</h1>
          
        </div>
        <p className='text-2xl font-bold text-gray-40 py-2'>Mens wear ❣️</p>
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
             <NavLink to='/' >   <p className='text-4xl font-bold'>⬅</p> </NavLink>
      </div>
    </div>
  )
}

export default Watchitems