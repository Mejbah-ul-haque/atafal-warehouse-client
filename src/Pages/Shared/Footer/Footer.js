import React from 'react';
import { Link } from 'react-router-dom';
import bankCard from '../../../Images/BankCard/bankCard.jpg';
import './Footer.css';

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
    return (
        <footer style={{ marginTop: '120px' }} className='shadow-lg'>
            <div style={{ height: '50px', backgroundColor: 'lightgray' }}></div>
            <div style={{ backgroundColor: '#003366' }}>
                <section className='container'>
                    <div className="row g-0">
                        <div className="col-sm-12 col-md-4">
                            <div style={{ height: '300px' }} className="text-light text-start border border-secondary border-top-0 p-4 pt-5">
                                <h3>contact us</h3>
                                <p><small>+8801919999999</small> </p>
                                <p><small> atafal@gmail.com</small> </p>
                                <p><small>PO BOX 7091, Kathal Bagan, Dhaka</small> </p>
                                <p><small>Opening Hours : 8.00AM-22PM</small></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div style={{ height: '300px' }} className="text-light text-start border-start-0 border border-secondary p-4 pt-5">
                                <h5><small>CUSTOMER SERVICE</small> </h5>
                                <p><small>Help and advice</small> </p>
                                <p><small> Shipping & Returns</small> </p>
                                <p><small>Refund Policy</small></p>
                                <p><small>Delivery Information</small></p>
                                <p><small>Delivery Information</small></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div style={{ height: '300px' }} className="text-light text-start border-start-0 border border-secondary  p-4 pt-5">
                                <h5><small>NEWSLETTER</small> </h5>
                                <p><small>Sign up newsletter to receive special offers and exclusive news about Metros products</small> </p>
                                <p><input className='w-100 border-0 p-2 text-secondary mt-4' type="button" value="ENTER YOUR ADDRESS" /></p>
                                <p><input className='w-100 border-0 p-2 bg-danger text-light' type="button" value="SUBSCRIBE" /> </p>

                            </div>
                        </div>
                    </div>
                </section>
                <section className='container text-center py-5'>
                    <div className="row d-flex align-items-md-center">
                        <div className="col-sm-12 col-md-4 text-end text-white border-end border-secondary lh-sm">
                            <h1 className='lh-1 text-center'>atafal</h1>
                            <p className='text-center'><small>the best electronics warehouse</small></p>
                            <p className='text-center'><small><em>" Your satisfaction is our main goal. "</em></small></p>
                        </div>
                        <div className="col-sm-12 col-md-4 text-center border-end border-secondary">
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

                </section>
                <div style={{ height: '1px' }} className='bg-secondary w-100'></div>
                <section className='container text-center'>
                    <img className='mb-2 mt-5' src={bankCard} alt="" />
                    <p className='text-white text-center py-4 mb-0'><small> copyright &copy; {year} Atafal. All rights reserved.</small></p>
                </section>
            </div>
        </footer>
    );
};

export default Footer;