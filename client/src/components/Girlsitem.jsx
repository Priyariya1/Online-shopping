import React, { useState } from 'react'
import { FcInTransit } from "react-icons/fc";
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import Girls from '../assets/girl20.jpeg'
import G from '../assets/g.jpeg'
import G6 from '../assets/g6.jpeg'
import Gi from '../assets/gi.jpeg'
import Gir from '../assets/gir.jpeg'
import Girl from '../assets/girl.jpeg'
import Girls6 from '../assets/girls.jpeg'
import Girls1 from '../assets/girls1.jpeg'
import Girls2 from '../assets/girls2.jpeg'
import Girls3 from '../assets/girls3.jpeg'
import Girls4 from '../assets/girls4.jpeg'
import Girls5 from '../assets/girls5.jpeg'
import girlDress from '../assets/kid1.jpeg'
import Saree from '../assets/saree.jpeg'
import Longtop from '../assets/long.jpeg'
import Kurti from '../assets/kurti.jpg'
import Nightwear from '../assets/night.jpeg'
import { NavLink } from 'react-router-dom'

const Girlsitem = () => {
    let Products = [
        {
            img: Girls,
            title: 'Womens-wear',
            description: 'indian rupies',
            price: 799
          },
          {
            img: girlDress,
            title: 'Girls-wear',
            description: 'indian rupies',
            price: 679
          },
          {
            img: Saree,
            title: 'Saree',
            description: 'indian rupies',
            price: 1250
          },
          {
            img: Longtop,
            title: 'Long-Kurti',
            description: 'indian rupies',
            price: 460
          },
          {
            img: Kurti,
            title: 'Kurti',
            description: 'indian rupies',
            price: 350
          },
          {
            img: G,
            title: 'Womens-wear',
            description: 'indian rupies',
            price: 799
          },
          {
            img: G6,
            title: 'Womens-wear',
            description: 'indian rupies',
            price: 799
          },
          {
            img: Gi,
            title: 'Womens-wear',
            description: 'indian rupies',
            price: 799
          },
          {
            img: Gir,
            title: 'Womens-wear',
            description: 'indian rupies',
            price: 799
          },
          {
            img: Girl,
            title: 'Womens-wear',
            description: 'indian rupies',
            price: 799
          },
          {
            img: Girls6,
            title: 'Womens-wear',
            description: 'indian rupies',
            price: 799
          },
          {
            img: Girls1,
            title: 'Womens-wear',
            description: 'indian rupies',
            price: 799
          },
          {
            img: Girls2,
            title: 'Womens-wear',
            description: 'indian rupies',
            price: 799
          },
          {
            img: Girls3,
            title: 'Womens-wear',
            description: 'indian rupies',
            price: 799
          },
          {
            img: Girls4,
            title: 'Womens-wear',
            description: 'indian rupies',
            price: 799
          },
          {
            img: Girls5,
            title: 'Womens-wear',
            description: 'indian rupies',
            price: 799
          },


          {
            img: Nightwear,
            title: 'Night-wear',
            description: 'indian rupies',
            price: 489
          },
    ]
return (
    <div className=''>
      <div className='inset-0 top-0 z-10'>
 
        <div className='header flex justify-between items-center  '>
          <h1 className='text-4xl font-bold'> ONLINE  SHOP 👗</h1>
          
          
        </div>
        <p className='text-2xl font-bold text-gray-40 py-2'>Girls wear 💞</p>
      
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

export default Girlsitem