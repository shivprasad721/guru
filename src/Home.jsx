import React from 'react';
import web from '../src/images/house.gif';
import Commom from './Commom';

const Home = () => {
    return(    
        <>
            <Commom 
            name="Live, Study and Build  a Good Career with " 
            paragraph="laksdjflkakjsdgklajsglkasdfl a;sdflka;sdl asdf;lkjasdf ;asdlkf asd;flk asd;lk asd;f" 
            visit="/Services" 
            imgsrc={web} 
            btnname="Get Started" />
        </>
        ); 
}


export default Home;