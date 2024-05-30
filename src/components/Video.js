import React from 'react'
import VideoCard from './VideoCard'
import '../styles/Video.css'

const Video = ({video}) => {
  return (
    <div className='video'>
        {
            video.map((item,index)=>(
            <VideoCard key={item.image} index={index}name={item.name} image={item.image}/>
            ))
        }
      
    </div>
  )
}

export default Video
