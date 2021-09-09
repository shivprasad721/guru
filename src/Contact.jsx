import React, { useState } from 'react';
import Contactdetails from './Contactdetails';
import phon from '../src/images/phonelogo.png';
import clock from '../src/images/clock.png';
import mail from '../src/images/mail.png';
import address from '../src/images/location.png';



const Contact = () => {
    const [form, setForm] = useState(
        {
            name: ' ',
            phone: ' ',
            email: ' ',
            message: ' '
        }
    );
    const [validation, setValidation] = useState(false)
    const HandleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
        setValidation(false)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (form.name === ' ' || form.phone === ' ' || form.email === ' ' || form.message === ' ') {
            setValidation(true)
        }
        // else
        // {
        // }
    };
    return (
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
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter your Name"
                                            value={form.name}
                                            onChange={(e) => { HandleChange(e) }}
                                        />
                                        {validation ? <spam className="danger">field is empty</spam> : " "}
                                    </div>
                                    <div className="mb-3">
                                        <label for="phone" className="form-label">Phone</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="phone"
                                            aria-describedby="emailHelp"
                                            placeholder="Mobile Number"
                                            value={form.phone}
                                            onChange={(e) => { HandleChange(e) }}
                                        />
                                        {validation ? <spam className="danger">field is empty</spam> : " "}

                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">E-mail</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter your E-mail"
                                            value={form.email}
                                            onChange={(e) => { HandleChange(e) }}
                                        />
                                        {validation ? <spam className="danger">field is empty</spam> : " "}

                                    </div>
                                    <div className="mb-3">
                                        <label for="Messsage" className="form-label">Message</label>
                                        <textarea
                                            id="message"
                                            className="form-control"
                                            rows="2"
                                            value={form.message}
                                            onChange={(e) => { HandleChange(e) }}
                                        >
                                        </textarea>
                                        {validation ? <spam className="danger">field is empty</spam> : " "}

                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit Query</button>
                                </form>
                            </div>
                            <div className="col-md-6 col-10 ">
                                <Contactdetails imgsrc={phon} heading="Lets Talk" para="+918545824846" />
                                <Contactdetails imgsrc={clock} heading="Timing" para="9:00 Am - 7:00 Pm" />
                                <Contactdetails imgsrc={mail} heading="General Support" para="gurulodge@gmail.com" />
                                <Contactdetails imgsrc={address} heading="Address" para="Mo- Jadgish Patti Post- Kachahari Dist- Varanasi UP" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Contact;