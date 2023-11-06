import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { IoPeopleOutline } from 'react-icons/io5'


import { NavLink } from 'react-router-dom'
import image from '../assets/profile.jpeg'

const Orderitems = () => {

    return (
        <div className='bg-pink-200'>
            <div className="w-11/12 m-auto py-10 ">


                <h1 className='text-4xl font-bold'>Online Shop 🛒</h1>

                <section className='flex justify-between items-center space-x-10'>
                    <div className='w-[60%] space-y-3'>

                        <table className='w-full'>
                            <p className='text-gray-40 py-2'>Priya💜</p>

                            <p className='text-sm text-gray-500'>Welcome your profile</p>

                            <thead >
                                <tr>
                                    <td className='text-sm text-Black text-3xl font-bold'>Your Account 🎀</td>

                                </tr>
                            </thead>
                            <tbody className='space-y-10'>
                                <tr className='border-dashed border-b'>
                                    <td className='py-5'>
                                        <div className='flex items-center space-x-3 py-2'>
                                            <img src={image} alt="" />
                                            <div >
                                                <h1 className=''> Name 😊  :Priya</h1>
                                                <p className=''> Phone 📞 :6324678953
                                                </p>
                                                <p className=' '> Email 📧  :priya@gmail.com</p>
                                                <p></p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                        <br></br>
                        <br></br><hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400"></hr>
                        <div>
                            <h3 className='text-xl font-bold'> Address 🏠</h3>
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