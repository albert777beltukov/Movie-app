import React, { useState } from 'react';
import Controls from './Controls'
import VideosLine from './videoLine/VideosLine'


import game1Img from '../../../../assets/images/video/game-1.jpg'
import game2Img from '../../../../assets/images/video/game-2.jpg'
import game3Img from '../../../../assets/images/video/game-3.jpg'
import game4Img from '../../../../assets/images/video/game-4.jpg'
import game5Img from '../../../../assets/images/video/game-5.jpg'


const initialSlides = [
      {
       _id: '111',
       thumbnailPath:  game1Img,
       videoUrl: 'https://www.youtube.com/watch?v=gBOBrEWFYPg'
      },
      {
        _id: '222',
        thumbnailPath:  game2Img,
        videoUrl: 'https://www.youtube.com/watch?v=kRfcglgFRXo'
      },
      {
        _id: '333',
        thumbnailPath:  game3Img,
        videoUrl: 'https://www.youtube.com/watch?v=YEnG8Mll7EE'
      },
      {
        _id: '444',
        thumbnailPath:  game4Img,
        videoUrl: 'https://www.youtube.com/watch?v=MU6dpym0Ev0'
      },
      {
        _id: '555',
        thumbnailPath:  game5Img,
        videoUrl: 'https://www.youtube.com/watch?v=TQBJ0fGb_a8'
      }
]


const Carousel = () => {
    const [slides] = useState(initialSlides)
    const[currentIdx, setCurrentIdx] = useState(0)


return(

  
  <div className='mt-60'>
      <div className ='flex items-center mb-5'>
    <div className ='text-white opacity-90 text-lg
    font-medium mr-20'>1 series</div>

    <Controls
    slidesLentgh={slides.length}
    setCurrentIdx={setCurrentIdx}
    currentIdx ={currentIdx}/>
     </div>
     <VideosLine 
     slides={slides}
     setCurrentIdx={setCurrentIdx}
     currentIdx ={currentIdx}/>
  </div>

)
}


export default Carousel 