import React from 'react'
import video from '../video/Video.mp4'
import capture from '../images/images.jpeg'
import '../App.css'
import { useLocation } from 'react-router-dom'


const Background = () => {

  const location = useLocation()
  const hiddenRoutes = ['/faqs']
  const isHidden = hiddenRoutes.includes(location.pathname)

    let bgVideo = {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'fixed',
        left: '0',
        right:' 0',
        top: '0',
        bottom: '0',
        zIndex: '-1'
    }
  return isHidden ? null : ( 
    <div>
        <video id='background-video' style={bgVideo}  autoPlay loop muted poster={capture}  src={video} typeof='video/mp4'></video>
    </div>
  )
}

export default Background