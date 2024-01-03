import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'


const Settingsitems = () => {

  return (
    <div>
      <div className='w-11/12 m-auto py-10'>
        <h1 className='text-4xl font-bold flex '>Online Shop  🛒</h1>
        <h1 className='text-xl font-bold'>Settings</h1>
        <p className='text-sm text-gray-400'>Explore</p>
        <section className='flex justify-between items-center space-x-10'>
          <div className='w-[60%] space-y-3'>
            <table className='w-full'>
              <thead >
                <tr>
                  <td className='text-gray-40 py-2'>Hey!! Priya ❤️</td>

                </tr>
              </thead>
              <tbody className='space-y-10'>
                <tr className='border-dashed border-b'>
                  <td className='py-5'>
                    <div className='flex items-center space-x-3 py-2'>


                      <h1 className='text-xl font-bold'>Try Shopping in your Language</h1>
                      <div className="categories bg-white w-full  flex justify-between space-x-6 px-2 py-5">
                        <div className="bg-black text-white px-4 py-2 rounded-full drop-shadow-xl">
                          <button>
                          <p>Tamil</p></button>
                        </div>
                        <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
                        <button> <p>English</p></button>
                        </div>
                        <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
                        <button><p>Hindi</p></button>
                        </div>
                        <div className="bg-white px-5 py-2 rounded-full drop-shadow-xl">
                        <button><p>Spanish</p></button>
                        </div>
                        <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
                        <button><p>Telugu</p></button>
                        </div>
                        <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
                        <button>  <p>Chinese</p></button>
                        </div>
                        <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
                        <button><p>Urdu</p></button>
                        </div>
                        <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
                        <button> <p>French</p></button>
                        </div>

                      </div>
                    </div>

                  </td>

                </tr>
              </tbody>
            </table>
            <br></br>
            <div className='border-dashed border-b'>
             <a href=""> </a>
              <h1 className='text-xl font-bold'>Account Settings</h1>
              <div><button>
                <NavLink to='/Account'>
                  <p>➮  👤 Your Profile</p>
                </NavLink>
              </button>
              </div>
              <div>
                <p>➮  ⌛ Saved Cards & Wallet</p>
              </div>
              <div>
                <p>➮  ✍ Saved Address</p>
              </div>
              <div>
                <p>➮  ॐ Select Language</p>
              </div>
              <div>
                <p>➮  🔔 Notification Settings</p>
              </div>

            </div><br></br>
            <div className='border-dashed border-b'>
              <h1 className='text-xl font-bold'>My Activity</h1>
              <div><button>

                <p>➮  ✎ Reviews</p>

              </button>
              </div>
              <div>
                <p>➮   📞 Help</p>
              </div>
              <div>
                <p>➮  📖 Question & Answer</p>
              </div>
            </div><br></br>
            <div className='border-dashed border-b'>
              <h1 className='text-xl font-bold'>Feedback & Information</h1>
              <div>
                <p>➮  📝 Term and Policies </p>
              </div>
              <div>
                <p>➮   ？ Browse FAQs</p>
              </div>
             

            </div><br></br>
            <div className='my-5'>
              <button className='flex items-center space-x-3 bg-gray-200 font-semibold rounded p-2'>
                <BsArrowLeft />  <NavLink to='/' >
                  <span>Continue shopping</span>
                </NavLink>
              </button>
            </div>
          </div>

        </section>
      </div>

      <button className='flex items-center space-x-3 bg-gray-800 font-semibold rounded p-2 text-white'>

        <span>LogOut</span>

      </button>
    </div>

  )
}

export default Settingsitems