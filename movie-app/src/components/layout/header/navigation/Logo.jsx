import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../../../assets/images/logo.png'

const Logo = () => {
return (
<Link to='/'>
    <img src={LogoImage} width='70' alt="" draggable={false}/>
</Link>
)
}
export default Logo