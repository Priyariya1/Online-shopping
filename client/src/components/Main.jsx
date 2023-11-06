import React, { useState } from 'react'
import { FcInTransit } from "react-icons/fc";
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import sunGlass from '../assets/glass.jpeg'
import Heels from '../assets/heel5.jpeg'
import Collection from '../assets/product13.jpeg'
import Shoes from '../assets/shoe2.jpeg'
import Girls from '../assets/girl20.jpeg'
import Boys from '../assets/fashion15.jpeg'
import girlDress from '../assets/kid1.jpeg'
import toy from '../assets/toy1.jpeg'
import boyDress from '../assets/kidb1.jpeg'
import Tshirt from '../assets/dress.jpeg'
import Saree from '../assets/saree.jpeg'
import Bag from '../assets/bag.jpeg'
import Vesti from '../assets/vesti.jpeg'
import Longtop from '../assets/long.jpeg'
import Kurti from '../assets/kurti.jpg'
import Nightwear from '../assets/night.jpeg'
import Makeup from '../assets/makeup.jpeg'
import Watch from '../assets/123.jpeg'




const Main = () => {
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
      img: Girls,
      title: 'Womens-wear',
      description: 'indian rupies',
      price: 799
    },
    {
      img: Tshirt,
      title: 'Mens-set',
      description: 'indian rupies',
      price: 679
    },
    {
      img: girlDress,
      title: 'Girls-wear',
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
      img: Saree,
      title: 'Saree',
      description: 'indian rupies',
      price: 1250
    },
    {
      img: Vesti,
      title: 'Vesti-Shirt',
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
      img: Nightwear,
      title: 'Night-wear',
      description: 'indian rupies',
      price: 489
    },
    {
      img: Bag,
      title: 'Hand-Bag',
      description: 'indian rupies',
      price: 579
    },
    {
      img: sunGlass,
      title: 'Sun Glasses',
      description: 'indian rupies',
      price: 50
    },
    {
      img: Heels,
      title: 'High Heels',
      description: 'indian rupies',
      price: 70
    },
  
    {
      img: Shoes,
      title: 'Formal-Shoes',
      description: 'indian rupies',
      price: 599
    },
   
   
    {
      img: toy,
      title: 'Toys',
      description: 'indian rupies',
      price: 439
    },

    {
      img: Makeup,
      title: 'Makeup-Kit',
      description: 'indian rupies',
      price: 439
    },
    {
      img: Watch,
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
          <h1 className='text-4xl font-bold'>    <FcInTransit /> ONLINE  SHOP  🛒</h1>
          <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
            <input type="text" placeholder='Search product' className='bg-transparent outline-0 '
              onChange={searchHandler} />

            <button className="rounded" onClick={() => searchHandler()}><CiSearch /></button>
          </div>
        </div>
        <div className="categories bg-white w-full  flex justify-between space-x-6 px-2 py-5">
          <div className="bg-black text-white px-4 py-2 rounded-full drop-shadow-xl">
            <p>Watches</p>
          </div>
          <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
            <p>Womens</p>
          </div>
          <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
            <p>Mens</p>
          </div>
          <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
            <p>Girls</p>
          </div>
          <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
            <p>Boys</p>
          </div>
          <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
            <p>Nightwear</p>
          </div>
          <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
            <p>Heels</p>
          </div>
          <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
            <p>Shoes</p>
          </div>
          <div className="bg-white px-5 py-2 rounded-full drop-shadow-xl">
            <p>Products</p>
          </div>
          <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
            <p>Glasses</p>
          </div>
          
          <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
            <p>toy</p>
          </div>
         
        
          <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
            <p>Handbag</p>
          </div>
          <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
            <p>Slippers</p>
          </div>

        </div>
        
      </div>
      <div className='bg'></div>
      <div className="products grid grid-cols xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
        {Products && Products.map((product, idx) => {
          return (
            <button>
            <div keu={idx} className="product h-[300px] bg-white drop-shadow-2xl p-2 border">
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
    </div>
  )
}

export default Main