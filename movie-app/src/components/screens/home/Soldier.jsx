import React from 'react';
import soldierImg from '../../../assets/images/soldier.png'


const Soldier = () => {
return (
<div className='absolute right-12 -bottom-12'>
<img src={soldierImg} alt=""
 draggable={false} width={350}/>
</div>
)
}
export default Soldier