import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';

import Imagen1 from "../assets/Carrucel1.jpg";
import Imagen2 from "../assets/Carrucel2.jpg";
import Imagen3 from "../assets/Carrucel3.jpg";
import './Home.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className="containerC">
            <div className="Casa-card">
                <div className="Cabeza">
                    <h1>Hola Gabriela!</h1>
                    <p>No te olvides que el día de hoy entrenas: <strong>PIERNA</strong></p>
                    <h1>Anuncios</h1>
                </div>
                <Slider {...settings}>
                    <CarouselItem>
                        <img className="Carrucel1" src={Imagen1} alt="Carrucel_1" />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="Carrucel1" src={Imagen2} alt="Carrucel_1" />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="Carrucel1" src={Imagen3} alt="Carrucel_1" />
                    </CarouselItem>
                </Slider>
            </div>
        </div>
    )
}

export default Home


const CarouselItem = styled.div`
img {
    width: 100%;
    height: auto;
}
`;