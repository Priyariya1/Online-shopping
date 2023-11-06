import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'

import { NavLink } from 'react-router-dom'
import image from '../assets/123.jpeg'

const Orderitems = () => {

    return (
        <div>
            <div className='w-11/12 m-auto py-10'>
                <h1 className='text-4xl font-bold'>My Orders 🚛</h1>

                <section className='flex justify-between items-center space-x-10'>
                    <div className='w-[60%] space-y-3'>
                        
                        <table className='w-full'>
                            <p className='text-sm text-Black text-2xl font-bold'>Product Details 📦</p>
                            <p className='text-sm text-gray-400'>Order ID 354267889</p>

                            <thead >
                                <tr>
                                    <td className='text-gray-40 py-2'>Your Order 🎀</td>

                                </tr>
                            </thead>
                            <tbody className='space-y-10'>
                                <tr className='border-dashed border-b'>
                                    <td className='py-5'>
                                        <div className='flex items-center space-x-3 py-2'>
                                            <img src={image} alt="" />
                                            <div >
                                                <h1 className='text-xl font-bold'>Watch</h1>
                                                <p>Attractive Ethnic Smart Designer Leather Belt Analog watches
                                                </p>
                                                <p className='text-gray-600 '>₹299   • Only wrong/defect items returns</p>
                                                <p>Size:Free Size • Qty:1</p>
                                            </div>
                                        </div>

                                    </td>

                                </tr>
                                <p>How was the product? 🔅</p>
                                <button>
                                    <p className='text-3xl font-bold'>☆ ☆ ☆ ☆ ☆</p>
                                </button>
                            </tbody>
                        </table>

                        <br></br>

                        <h5 className='text-2xl font-bold'>Order details 📦</h5>
                        <p className='text-gray-500'>Price Detais(1 Item)</p>
                        <table class="table-auto">
                            <thead>
                                <tr>
                                    <th>Total Price</th>
                                    <th>Total Discount</th>
                                    <th className='text3xl'>Order Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>+ ₹310</td>
                                    <td>- ₹11</td>
                                    <td>₹299</td>
                                </tr>
                               
                            </tbody>
                        </table>

                        <h4 className='text-xl font-bold'>Order Total ₹299</h4>
                                    
                        <button className=' flex items-center space-x-5 bg-green-200 text-green-600  rounded font-bold '>Yoy!! Your Order discount is ₹11</button>
                        <br></br>
                        <br></br><hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400"></hr>
                       <div>
                        <h3 className='text-xl font-bold'>Delivery Address 🏠</h3>
                        <p>Priya</p>
                        <p>5/643 Ganapathi nagar,Tirupur,Tamilnadu,641605</p>
                        <p>12345567889</p>
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



export default Orderitems;