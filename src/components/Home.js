import React from 'react'
import Banner from './Banner';
import './Home.css';
import Header from './Header';
import { Lower } from './Lower';
 const Home = () => {
    return (
        <div className="home">
            <Header />
            <Banner />
            <div className="main"></div>
            <Lower />
        </div>
    )
}
export default Home