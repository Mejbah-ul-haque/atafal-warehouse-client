import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/banner1.jpg'
import banner2 from '../../../Images/Banner/banner2.jpg'
import banner3 from '../../../Images/Banner/banner3.jpg'

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;