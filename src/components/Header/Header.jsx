import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <div >
                <Link className='space' to='/'>Home</Link>
                <Link className='space' to='/clipping-path'>Clipping Path</Link>
                <Link className='space' to='/contact'>Contact</Link>
                <Link className='space' to='/login'>Login</Link>
            </div>
        </>
    );
};

export default Header;