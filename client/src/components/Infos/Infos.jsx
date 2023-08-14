import React from 'react'
import './Infos.css'
import { InfosData } from '../../Data/InfosData'
import Info from '../Info/Info'
const Infos = () => {
  return (
    <div className="Posts">
        {InfosData.map((post, id)=>{
            return <Info data={post} id={id}/>
        })}
    </div>
  )
}

export default Infos
