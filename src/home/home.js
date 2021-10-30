import React from 'react';
import HeaderBar from './header/header';
import HomeBody from './homebody/homebody';
import './home.css';

function HomePage() {
    return (
        <div className="home_page"> 
            <HeaderBar />
            <HomeBody />
        </div>
    )
}

export default HomePage
