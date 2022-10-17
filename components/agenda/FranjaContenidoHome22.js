import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Link from 'next/link';
import EventoNet from './EventoNet';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {i18n} from '../../i18n';

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

const FranjaContenidoHome22 = ({titulo, eventosMostrar}) => {

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

        if (window.innerWidth > 1600) {
            // setAnchoEvento(30);
            setAnchoEvento(18);
        } else if (window.innerWidth > 1200) {
            // setAnchoEvento(30);
            setAnchoEvento(23);
        } else if (window.innerWidth > 1050) {
            setAnchoEvento(30);
        } else if (window.innerWidth > 991) {
            setAnchoEvento(40);
        } else if (window.innerWidth > 850) {
            // setAnchoEvento(50);
            setAnchoEvento(45);
        } else if (window.innerWidth > 768) {
            // setAnchoEvento(50);
            setAnchoEvento(50);
        } else if (window.innerWidth > 650) {
            // setAnchoEvento(60);
            setAnchoEvento(60);
        } else if (window.innerWidth > 530) {
            setAnchoEvento(70);
        } else if (window.innerWidth > 450) {
            setAnchoEvento(80);
        } else {
            setAnchoEvento(95);
        } 

        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="pt-5px-0">
                {
                    (titulo !== '') ? (
                        <Container>
                            <Titulo >{titulo}</Titulo>
                        </Container>
                    ) : null
                }
                <CarouselPersonalizado
                
                showStatus={false}
                showIndicators={indicadores}
                stopOnHover={true}
                swipeable={true}
                interval={3000}
                infiniteLoop={eventosMostrar.length > 10}
                // autoPlay={true}
                transitionTime={1000}
                // emulateTouch={true}
                showThumbs={false}
                // useKeyboardArrows={true}
                centerMode={true}
                centerSlidePercentage={anchoEvento}
                // swipeScrollTolerance={2}
                >
                    {
                        eventosMostrar.map((ev, index) => (
                            <EventoNet
                                // titulo=""
                                key={index}
                                imagen={
                                    (i18n.language === 'en' ? `/img/flyers2022/${ev.portadaEN}` : (i18n.language === 'pr') ? `/img/flyers2022/${ev.portadaPR}` : `/img/flyers2022/${ev.portadaES}` )
                                    
                                }
                                // alt={ev.es_titulo}
                                link={`/${ev.slug}`}
                            />
                        ))
                    }
                </CarouselPersonalizado>
            </div>
        </>
    );
}
 
export default FranjaContenidoHome22;