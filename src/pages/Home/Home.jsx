import React from 'react';
import Card from '../../components/Card';
import Banner from '../../components/Banner';
import "./Home.css";

const Home = () => {
    return (
        <main className='page_home'>
            <Banner />
            <Card />
        </main>
    );
};

export default Home;