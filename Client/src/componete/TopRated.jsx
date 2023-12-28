import React from 'react'
import { Link } from 'react-router-dom'

function TopRated() {
  return (
    <div>
     <section className="px-3 py-5 bg-[#2B2A4C] lg:py-10  ">
    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
      <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
        <p className="text-4xl font-bold md:text-7xl text-[#B31312]">
          25% OFF
        </p>
        <p className="text-4xl font-bold md:text-7xl text-white">WINTER SALE</p>
        <p className="mt-2 text-sm md:text-lg text-white">For limited time only!</p>
        <Link to = '/shopall'
        className="text-lg md:text-2xl bg-[#B31312] text-white py-2 px-5 mt-10 hover:bg-zinc-800"
        >Shop Now</Link>
        
      </div>
      <div className="order-1 lg:order-2">
        <img
          className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/accessories-1600717450.jpg"
          alt=""
        />
      </div>
    </div>
  </section>


    </div>
  )
}

export default TopRated