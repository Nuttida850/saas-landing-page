import React from 'react'
import img from '../assets/images/Content.png'
function Clients() {
  return (
    <div className='py-20'>
        <div className="container max-w-[1320px] mx-auto text-center px-10">
            <h1 className='text-7xl font-bold mb-10'>What Our Clients Says</h1>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Clients