import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Link from 'next/link';
import EventoNet from './EventoNet';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselPersonalizado = styled(Carousel)`
    .carousel .slide {
        background-color: transparent;
    }
`;

const Titulo = styled.h3`
    color: var(--colorPrimario);
    font-weight: bold;
    font-size: 3rem;
    text-transform: uppercase;
`;

const FranjaContenido = ({titulo, eventosMostrar}) => {

    const [indicadores, setIndicadores] = useState(false);
    const [anchoEvento, setAnchoEvento] = useState(false);


    useEffect(() => {
        if(document.querySelector('.thumbs-wrapper')) {
            document.querySelector('.thumbs-wrapper').parentElement.remove();
        }

        if(window.innerWidth > 768) {
            setIndicadores(true);
        } else {
            setIndicadores(false);
        }

        if (window.innerWidth > 1000) {
            setAnchoEvento(30);
        } else if (window.innerWidth > 768) {
            setAnchoEvento(50);
        } else if (window.innerWidth > 650) {
            setAnchoEvento(60);
        } else if (window.innerWidth > 540) {
            setAnchoEvento(70);
        } else {
            setAnchoEvento(90);
        } 

        // eslint-disable-next-line
    }, [])

    return (
        <>
        
            <Container className="pt-5r px-0">
                <Titulo>{titulo}</Titulo>
                <CarouselPersonalizado showStatus={false}
                showIndicators={indicadores}
                stopOnHover={true}
                swipeable={true}
                interval={3000}
                infiniteLoop={true}
                autoPlay={true}
                transitionTime={1000}
                // emulateTouch={true}
                // showThumbs={true}
                // useKeyboardArrows={true}
                centerMode={true}
                centerSlidePercentage={anchoEvento}
                // swipeScrollTolerance={2}
                >
                    {
                        eventosMostrar.map(ev => (
                            <EventoNet
                                titulo=""
                                imagen={`/img/flyers2020/${ev.imagen}`}
                                link={ev.link}
                            />
                        ))
                    }
                </CarouselPersonalizado>
            </Container>
        </>
    );
}
 
export default FranjaContenido;
