import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import './Header.css';
import BusinessInfo from './BusinessInfo/BusinessInfo';
import Navbar from '../Shared/Navbar/Navbar';

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar/>
            <MainHeader/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;