import { Link } from 'react-router-dom';
import { list } from './list';
import netflixLogo from '../../../../assets/images/netflix-logo.webp'
import React from 'react';

const Navigation = () => {
return (
<ul className='list-none flex items-center'>
    {list.map((title, idx) => (
        <li key={title} className ='inline-block px-4'>
            {idx !== 2 ?
            <Link to={`/${title.toLowerCase()}`}
            className ='block text-white opacity-80
            hover:opacity-100 transition-opacity
            duration-300 ease-in-out'>{title}
            </Link> : (
                <img src={netflixLogo} alt width={80}
                 draggable={false} className='block'/>
            )}
        </li>
    ))}
</ul>
)
}
export default Navigation