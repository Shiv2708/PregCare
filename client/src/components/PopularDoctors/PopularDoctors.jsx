import React from 'react'
import './PopularDoctors.css'

import {TrendData} from '../../Data/PopularDoctors.js'
const PopularDoctors = () => {
  return (
    <div className="PopularDoctors">
            <h2>Popular Doctors</h2>
            {TrendData.map((trend)=>{
                return(
                    <div className="follower">
                    <div> 
                        <img src={trend.img} alt="" className='followerImage' />
                        <div className="name">
                            <span>{trend.name}</span>
                            <span>{trend.username} years of exp</span>
                        </div>
                    </div>
                    <a href={trend.followers}><button className='button fc-button'>
                        <b>View</b>
                    </button></a>
                </div>
                )
            })}

    </div>
  )
}

export default PopularDoctors