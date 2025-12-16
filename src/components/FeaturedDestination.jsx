import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate, useNavigation } from 'react-router-dom'

const FeaturedDestination = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Title title="Featured Destination" subTitle="Discover our handpicked selection of exceptional properties around the world,offering unparalleled luxury and unforgettable experiences"/>
      <div>
        {roomsDummyData.slice(0,4).map((room,index)=>(
          <HotelCard key={room._id} room = {room} index={index} />
        ))}
      </div>
      <button onClick={()=>{navigate('/rooms');scrollTo(0,0)}}>View All Destinations</button>
    </div>
  )
}

export default FeaturedDestination
