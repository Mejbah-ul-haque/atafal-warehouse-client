import React from 'react';
import { Link } from 'react-router-dom';
import bankCard from '../../../Images/BankCard/bankCard.jpg';
import './Footer.css';

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#003366' }} className='mt-5'>
            <div className="container">
                <section>

                </section>
                <section className='text-center pt-5'>
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-12 col-md-4 text-end text-white border-end lh-sm">
                            <h1 className='lh-1'>atafal</h1>
                            <p><small>the best electronics warehouse</small></p>
                        </div>
                        <div className="col-sm-12 col-md-4 text-center">
                            <p className='mt-3'><Link className='text-decoration-none footer-link border rounded-pill py-0 px-3' to="/laptop"><small> Laptop</small></Link></p>
                            <p className='mt-3'><Link className='text-decoration-none footer-link border rounded-pill py-0 px-3' to="/mobile"><small> Mobile</small></Link></p>
                            <p className='mt-3'><Link className='text-decoration-none footer-link border rounded-pill py-0 px-3' to="/airPods"><small> AirPods</small></Link></p>
                        </div>
                        <div className="col-sm-12 col-md-4 text-center">
                            <p className='mt-3'><Link className='text-decoration-none footer-link border rounded-pill py-0 px-4' to="/iron"><small> Iron </small></Link></p>
                            <p className='mt-3'><Link className='text-decoration-none footer-link border rounded-pill py-0 px-2' to="/watch"><small> SmartWatch </small></Link></p>
                            <p className='mt-3'><Link className='text-decoration-none border footer-link rounded-pill py-0 px-4' to="/others"><small> Others</small></Link></p>
                        </div>
                    </div>
                    <img className='mb-2 mt-5' src={bankCard} alt="" />
                    <p className='text-white text-center py-4 mb-0'><small> copyright &copy; {year} Atafal. All rights reserved.</small></p>
                </section>
            </div>
        </footer>
    );
};

export default Footer;