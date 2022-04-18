import React from 'react';
import LogoImg from '../../../assets/images/squid-game.png'
import imgText from '../../../assets/images/img-text.png'

const Content = () => {
return (

<div className='w-1/4 mt-20'>
<img src={LogoImg} alt="" className='mb-10 -ml-14'
draggable={false}/>


<div className ='absolute flex items-center'>
<img src={imgText} alt="" width={50}/>
<p className='text-white opacity-70 leading-8 text-lg ml-12'
style={{maxWidth: '50%'}}>
    Once you start game, there is no turning
    back. The winner is alone, the loser only faces
    death.
</p>
<img src={imgText} alt="" width={50}/>
</div>
</div>

)
}
export default Content