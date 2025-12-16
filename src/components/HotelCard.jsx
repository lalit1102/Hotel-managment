import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({room,index}) => {
  return (
    
    <Link to={'/room/' +room._id} onClick={()=>scrollTo(0,0)} key={room._id} className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-grey-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]'>
      <img src={room.images[0]} alt="" />
     {index %2 ===0 && <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'>Best Seller</p>}
      <div>
        <div>
          <p>{room.hotel.name}</p>
          <div>
            <img src={assets.starIconFilled} alt="staricon" />4.5
          </div>
        </div>
        <div>
           <img src={assets.locationIcon} alt="locationicon" />
           <span>{room.hotel.address}</span>
        </div>
        <div>
          <p><span>${room.pricePerNight}</span>/night</p>
          <button>Book Now</button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard
