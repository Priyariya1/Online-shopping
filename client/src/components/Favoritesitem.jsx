import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'

import { NavLink } from 'react-router-dom'
import image from '../assets/123.jpeg'
import photo from '../assets/dress.jpeg'
import saree from '../assets/saree.jpeg'
import makeup from '../assets/makeup.jpeg'
import fashion from '../assets/fashion15.jpeg'


const Favoritesitem = () => {

  return (
    <div>
      <div className='w-11/12 m-auto py-10'>
        <h1 className='text-3xl font-bold'>Favorite Items ❤️️</h1>
        <p className='text-sm text-gray-400'>There are 5 Items in your Favorites</p>
        <section className='flex justify-between items-center space-x-10'>
          <div className='w-[60%] space-y-3'>
            <table className='w-full'>
              <thead >
                <tr>
                  <td className='text-gray-40 py-2'>Product 🛒</td>
                  <td className='text-gray-40 py-2'>Price</td>
                  <td className='text-gray-40 py-2'>Quantity</td>
                  <td className='text-gray-40 py-2'>Total</td>
                  <td className='text-gray-40 py-2'>Delete</td>
                </tr>
              </thead>
              <tbody className='space-y-10'>
                <tr className='border-dashed border-b'>
                  <td className='py-5'>
                    <div className='flex items-center space-x-3 py-2'>
                      <img src={image} alt="" />
                      <div >
                        <h1 className='text-xl font-bold'>Watch</h1>
                        <p>Lorem,ipsum.
                        </p>
                      </div>
                    </div>

                  </td>
                  <td>₹24.00</td>
                  <td>
                    <div className='border w-24 p-2'>
                      <input type="number" className='w-full outline-0' />
                    </div>
                  </td>
                  <td>₹200.00</td>
                  <td>
                    <button>
                      <AiFillDelete size={"1.5rem"} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

           
            <div className='my-5'>
              <button className='flex items-center space-x-3 bg-gray-800 font-semibold rounded p-2 text-white'>
             <NavLink to='/Cart' >
                <span>Add To Cart</span>
                </NavLink>
              </button>
            </div>
          </div>
         
        </section>
      </div>

      <div className='w-11/12 m-auto py-10'>
        
        <section className='flex justify-between items-center space-x-10'>
          <div className='w-[60%] space-y-3'>
            <table className='w-full'>
              <thead >
                <tr>
                  <td className='text-gray-40 py-2'>Product</td>
                  <td className='text-gray-40 py-2'>Price</td>
                  <td className='text-gray-40 py-2'>Quantity</td>
                  <td className='text-gray-40 py-2'>Total</td>
                  <td className='text-gray-40 py-2'>Delete</td>
                </tr>
              </thead>
              <tbody className='space-y-10'>
                <tr className='border-dashed border-b'>
                  <td className='py-5'>
                    <div className='flex items-center space-x-3 py-2'>
                      <img src={photo} alt="" />
                      <div >
                        <h1 className='text-xl font-bold'>Mens Set</h1>
                        <p>Lorem,ipsum.
                        </p>
                      </div>
                    </div>

                  </td>
                  <td>₹24.00</td>
                  <td>
                    <div className='border w-24 p-2'>
                      <input type="number" className='w-full outline-0' />
                    </div>
                  </td>
                  <td>₹200.00</td>
                  <td>
                    <button>
                      <AiFillDelete size={"1.5rem"} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='my-5'>
              <button className='flex items-center space-x-3 bg-gray-800 font-semibold rounded p-2 text-white'>
              <NavLink to='/Cart' >
                <span>Add To Cart</span>
                </NavLink>
              </button>
            </div>
          </div>
 
          
        </section>
      </div>
      <div className='w-11/12 m-auto py-10'>
        
        <section className='flex justify-between items-center space-x-10'>
          <div className='w-[60%] space-y-3'>
            <table className='w-full'>
              <thead >
                <tr>
                  <td className='text-gray-40 py-2'>Product</td>
                  <td className='text-gray-40 py-2'>Price</td>
                  <td className='text-gray-40 py-2'>Quantity</td>
                  <td className='text-gray-40 py-2'>Total</td>
                  <td className='text-gray-40 py-2'>Delete</td>
                </tr>
              </thead>
              <tbody className='space-y-10'>
                <tr className='border-dashed border-b'>
                  <td className='py-5'>
                    <div className='flex items-center space-x-3 py-2'>
                      <img src={saree} alt="" />
                      <div >
                        <h1 className='text-xl font-bold'>Saree</h1>
                        <p>Lorem,ipsum.
                        </p>
                      </div>
                    </div>

                  </td>
                  <td>₹24.00</td>
                  <td>
                    <div className='border w-24 p-2'>
                      <input type="number" className='w-full outline-0' />
                    </div>
                  </td>
                  <td>₹200.00</td>
                  <td>
                    <button>
                      <AiFillDelete size={"1.5rem"} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='my-5'>
              <button className='flex items-center space-x-3 bg-gray-800 font-semibold rounded p-2 text-white'>
           <NavLink to='/Cart' >
                <span>Add to Cart</span>
                </NavLink>
              </button>
            </div>
          </div>
 
          
        </section>
      </div>
      <div className='w-11/12 m-auto py-10'>
        
        <section className='flex justify-between items-center space-x-10'>
          <div className='w-[60%] space-y-3'>
            <table className='w-full'>
              <thead >
                <tr>
                  <td className='text-gray-40 py-2'>Product</td>
                  <td className='text-gray-40 py-2'>Price</td>
                  <td className='text-gray-40 py-2'>Quantity</td>
                  <td className='text-gray-40 py-2'>Total</td>
                  <td className='text-gray-40 py-2'>Delete</td>
                </tr>
              </thead>
              <tbody className='space-y-10'>
                <tr className='border-dashed border-b'>
                  <td className='py-5'>
                    <div className='flex items-center space-x-3 py-2'>
                      <img src={makeup} alt="" />
                      <div >
                        <h1 className='text-xl font-bold'>Makeup Kit</h1>
                        <p>Lorem,ipsum.
                        </p>
                      </div>
                    </div>

                  </td>
                  <td>₹24.00</td>
                  <td>
                    <div className='border w-24 p-2'>
                      <input type="number" className='w-full outline-0' />
                    </div>
                  </td>
                  <td>₹200.00</td>
                  <td>
                    <button>
                      <AiFillDelete size={"1.5rem"} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='my-5'>
              <button className='flex items-center space-x-3 bg-gray-800 font-semibold rounded p-2 text-white'>
               <NavLink to='/Cart' >
                <span>Add to Cart</span>
                </NavLink>
              </button>
            </div>
          </div>
 
          
        </section>
      </div>
      <div className='w-11/12 m-auto py-10'>
        
        <section className='flex justify-between items-center space-x-10'>
          <div className='w-[60%] space-y-3'>
            <table className='w-full'>
              <thead >
                <tr>
                  <td className='text-gray-40 py-2'>Product</td>
                  <td className='text-gray-40 py-2'>Price</td>
                  <td className='text-gray-40 py-2'>Quantity</td>
                  <td className='text-gray-40 py-2'>Total</td>
                  <td className='text-gray-40 py-2'>Delete</td>
                </tr>
              </thead>
              <tbody className='space-y-10'>
                <tr className='border-dashed border-b'>
                  <td className='py-5'>
                    <div className='flex items-center space-x-3 py-2'>
                      <img src={fashion} alt="" />
                      <div >
                        <h1 className='text-xl font-bold'>Mens Ware</h1>
                        <p>Lorem,ipsum.
                        </p>
                      </div>
                    </div>

                  </td>
                  <td>₹24.00</td>
                  <td>
                    <div className='border w-24 p-2'>
                      <input type="number" className='w-full outline-0' />
                    </div>
                  </td>
                  <td>₹200.00</td>
                  <td>
                    <button>
                      <AiFillDelete size={"1.5rem"} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='my-5'>
              <button className='flex items-center space-x-3 bg-gray-800 font-semibold rounded p-2 text-white'>
               <NavLink to='/Cart' >
                <span>Add to cart</span>
                </NavLink>
              </button>
            </div>
            <div className='my-5'>
              <button className='flex items-center space-x-3 bg-gray-200 font-semibold rounded p-2'>
                <BsArrowLeft /><NavLink to='/' >
                <span>Continue shopping</span>
                </NavLink>
              </button>
            </div>
          </div>
 
          
        </section>
      </div>
  
    </div>

  )
}



export default Favoritesitem;