import React from 'react';
import {Carousel} from "react-bootstrap";
import sky from './../assets/sky.jpg'
import flower from './../assets/flower.jpg'
import geometry from './../assets/geometry.jpg'

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item style={{'height': "600px"}}>
                <img
                    className='d-block w-100'
                    src={sky}
                    alt='image'
                />
                <Carousel.Caption>
                    <h3>It's example with React-bootstrap</h3>
                    <p>Alternative text</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height': "600px"}}>
                <img
                    className='d-block w-100'
                    src={flower}
                    alt='image'
                />
                <Carousel.Caption>
                    <h3>It's example with React-bootstrap</h3>
                    <p>Alternative text</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height': "600px"}}>
                <img
                    className='d-block w-100'
                    src={geometry}
                    alt='image'
                />
                <Carousel.Caption>
                    <h3>It's example with React-bootstrap</h3>
                    <p>Alternative text</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;