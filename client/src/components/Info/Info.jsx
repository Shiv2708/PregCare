import React from 'react'
import './Info.css'
import Link from '../../img/link.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import ReadMoreLess from "../ReadMoreLess/ReadMoreLess";


const Post = ({data}) => {
  return (
    <div className="Posty">
        <img src={data.img} alt="" />

        <div className="detail">
            <h3 className='temp'> Title : {data.title}</h3>
            <br></br>
            <span> <p style={{ whiteSpace: 'pre-line' }}><ReadMoreLess limit = {500} child2 = {data.desc} /></p></span>
            <br></br>
            <b>Author: {data.name}</b>
        </div>

        <div className="postReacty">
            {/* <img src={data.liked?Heart: NotLike} alt="" /> */}
            <a href={data.link}><img src={Link} alt="" /></a>
            <a href='mailto:20bcs205@iiitdmj.ac.in'><img src={Share} alt="" /></a>
        </div>


        {/* <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span> */}

        
    </div>
  )
}

export default Post