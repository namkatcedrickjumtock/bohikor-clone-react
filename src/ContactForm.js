import React, { useState } from 'react';

const ContactForm = () => {
    const [TextArea, setTextArea] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [emailStatus, setEmailStatus] = useState('');



    function handleSubmit(e) {
        e.preventDefault()
        const dataFromForm = { name, email, TextArea }
        console.log(dataFromForm);
        const url = "https://hibmat-software.000webhostapp.com/mailServer.php"
        fetch(url, {
            mode: 'no-cors'
        }).then((res) => {
            if (res.ok) {
                console.log(res.body);
            } else {
                console.log("nothing from server");
            }
        })

    }

    return (
        <div className="container my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mr-auto">
                        <h2 className='fw-bold'>Contact Us</h2>
                        <p className="mb-5">Our belief is: knowing exactly what you spend your money on gives you a sense of accountability and a platform to plan a healthy financial future thus our stage one for the journey is tracking and budgeting which is available in our user friendly app on google play.</p>

                        <ul className="list-unstyled pl-md-5 mb-5">
                            <li className="d-flex text-black mb-2">
                                <span className="mr-3"><span className="icon-map"></span></span> 34 S1st Trust Bank Building, Great Soppo Buea branch, P.O BOX 138<br />  SW, Cameroon.
                            </li>
                            <li className="d-flex text-black mb-2"><span className="mr-3"><span className="icon-phone"></span></span> +1 (222) 345 6789</li>
                            <li className="d-flex text-black"><span className="mr-3"><span className="icon-envelope-o"></span></span> info@mywebsite.com </li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <form className="mb-5" id="contactForm" name="contactForm" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label className="col-form-label">Name</label>
                                    <label className="col-form-label mx-3">{name}</label>
                                    <input
                                        type="text" className="form-control"
                                        name="name" id="name" value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label className="col-form-label">Email</label>
                                    <label className="col-form-label mx-3">{email}</label>
                                    <input
                                        type="text" className="form-control"
                                        name="email" id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label className="col-form-label">Message</label>
                                    <label className="col-form-label mx-3">{TextArea}</label>
                                    <textarea
                                        className="form-control border-0"
                                        name="message" id="message" cols="30"
                                        rows="7"
                                        onChange={(e) => setTextArea(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-primary rounded border-0 py-2 my-3 mx-auto d-block px-4">Send Message </button>
                                </div>
                            </div>
                        </form>

                        <div id="form-message-warning mt-4"></div>
                        <div id="form-message-success">
                            Your message was sent, thank you!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
