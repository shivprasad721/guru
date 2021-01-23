import React from 'react';
import web from '../src/images/about.gif';
import Commom from './Commom';

const About = () => {
    return(    
        <>
            <Commom 
            name="Welcome to About Page of" 
            paragraph="laksdjflkakjsdgklajsgl laksdjflkakjsdgklajsglkasdfl a;sdflka;sdl asdf;lkjasdf ;asdlkf asd;flk asd;lk asd;f" 
            visit="/Contact" 
            imgsrc={web} 
            btnname="Contact Us" />
        </>
        
        ); 
}


export default About;