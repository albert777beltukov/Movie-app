import React from 'react';
import Logo from './navigation/Logo'
import Navigation from './navigation/Navigation'
import Hamburger from './navigation/Hamburger'


const Header = () => {
return (
<div className='flex justify-between items-center'>
  <Logo/>
  <Navigation/>
  <Hamburger/>
</div>
)
}
export default Header