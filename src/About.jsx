import React from 'react';
import Common from './Common';
import web from '../src/images/about_1.png';



const About = () => {
    return(
        <>
        <Common name="Welcome to my About page" img={web} visit="/contact" btn="Contact Now" />
        </>
    );
};


export default About;