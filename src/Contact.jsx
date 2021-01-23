import React from 'react';
import Contactdetails from './Contactdetails';
import phon from '../src/images/phonelogo.png';
import clock from '../src/images/clock.png';
import mail from '../src/images/mail.png';
import address from '../src/images/location.png';



const Contact = () =>{
    return(    
            <>
                <div className="container-fluid">
                    <h2 className="text-center mt-5 mb-2">Contact Us</h2>
                </div>
                 <div className="cotainer-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 col-10 ">
                                    <form>
                                        <div className="mb-3">
                                            <label for="fullname" className="form-label">Full Name</label>
                                            <input type="text" className="form-control" id="fullname" aria-describedby="emailHelp" placeholder="Enter your Name"/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="phone" className="form-label">Phone</label>
                                            <input type="number" className="form-control" id="phone" aria-describedby="emailHelp" placeholder="Mobile Number"/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="email" className="form-label">E-mail</label>
                                            <input type="email" className="form-control" id="fullname" aria-describedby="emailHelp" placeholder="Enter your E-mail"/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="Messsage" className="form-label">Message</label>
                                            <textarea id="message" className="form-control" rows="1"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit Query</button>
                                    </form>
                                </div>
                                <div className="col-md-6 col-10 ">
                                        <Contactdetails imgsrc={phon} heading="Lets Talk" para="+918545824846"/>
                                        <Contactdetails imgsrc={clock} heading="Timing" para="9:00 Am - 7:00 Pm"/>
                                        <Contactdetails imgsrc={mail} heading="General Support" para="gurulodge@gmail.com"/>
                                        <Contactdetails imgsrc={address} heading="Address" para="Mo- Jadgish Patti Post- Kachahari Dist- Varanasi UP"/>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </>
        ); 
}


export default Contact;