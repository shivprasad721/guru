import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Services = () =>{
    return(    
        <>
            <div className="mt-5 mb-3 text-center">
                <h2>
                    Our Services
                </h2>
            </div>
            <div className="cotainer-fluid mt-2 ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((val,ind) => {
                                    return <Card key={ind} imgsrc={val.imgsrc} title={val.title}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    ); 
}


export default Services;