import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/clipping-path'>Clipping Path</Link>
            <Link to='/contact'>Contact</Link>

        </div>
    );
};

export default Header;