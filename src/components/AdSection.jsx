import React from 'react'
import discount from "../assets/sale.png"
import AdOnReddit from "../assets/AddonReddit.png"
import Footer from './Footer'

const AdSection = () => {
  return (
    <div className='flex flex-col gap-5 mr-4 mt-6'>
         <div className='flex flex-col justify-center gap-8 mb-[150px] items-center'>
         <img
           src={discount}
           alt="discount"
           style={{ width: "200px", height: "200px" }}
         />
         <img
           src={AdOnReddit}
           alt="AdOnReddit"
           style={{ width: "200px", height: "200px" }}
         />
         </div>
          <div>
          <div className="h-[1.5px] bg-gray-200"></div>
          <Footer/>
          <div className="h-[1.5px] bg-gray-200 mb-2"></div>
          <div className='flex justify-between text-xs text-gray-500 '> 
          <p>© 2020</p>
          <p>Privacy Terms</p>
          </div>
          
          </div>

    </div>
  )
}

export default AdSection