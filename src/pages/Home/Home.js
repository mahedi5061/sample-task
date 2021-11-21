import React from 'react';
import Courses from '../../components/Courses/Courses';
import Header from '../../components/Shared/Header';
import LiveClass from '../../components/LiveClass/LiveClass';

const Home = () => {
    return (
        <>
           <Header/> 
           <LiveClass/>
           <Courses/>
        </>
    );
};

export default Home;