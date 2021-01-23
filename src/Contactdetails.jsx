import React from 'react';


const Contactdetails = (props) =>{
    return (
        <>
        <div className="mt-4 ml-5">
            <h5 className="text-primary "><img src={props.imgsrc} className="pr-2" alt="image not found" />{props.heading}</h5>
            <p className="text-secondary pl-5 mt-0">{props.para}</p>
        </div>
        </>
    )
    }

export default Contactdetails;