import React from 'react';
import web from '../src/images/hed_1.png';
import Common from './Common';


const Home = () => {
    return(
        <>
        <Common name="Note that the development build" img={web} visit="/service" btn="Get Started" />
        </>
    );
};


export default Home;