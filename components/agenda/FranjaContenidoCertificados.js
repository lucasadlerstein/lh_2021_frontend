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

const BotonCertificado = styled.button`
    border-radius: 5rem;
    border: 2px solid var(--colorPrimario);
    color: white;
    background-color: var(--colorSecundario);
    font-size: 2rem;
    padding: 1rem 2rem;
    margin-top: 1.5rem;
    /* margin-right: 3rem; */
    transition: all .5s ease;
    &:hover {
        background-color: var(--colorPrimario);
    }
    &:focus {
        outline: none;
    }
`;

const FranjaContenidoCertificados = ({titulo, eventosMostrar}) => {

    const [indicadores, setIndicadores] = useState(false);
    const [anchoEvento, setAnchoEvento] = useState(false);

console.log(eventosMostrar);
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
            setAnchoEvento(35);
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

    function solicitarCertificado(charla) {
        // PAGAR


        // SI el pago es exitoso, entonces cambiar en la BDD
    }

    function descargarCertificado(charla) {
        // Generar y descargar certificado PDF
    }

    return (
        <>
        {
            (eventosMostrar.length > 0) ? (
                <div className="pt-5r px-0">
                    <Titulo className="text-center">{titulo}</Titulo>
                    <CarouselPersonalizado showStatus={false}
                    showIndicators={indicadores}
                    stopOnHover={true}
                    swipeable={true}
                    interval={3000}
                    infiniteLoop={true}
                    autoPlay={true}
                    transitionTime={1000}
                    // emulateTouch={true}
                    showThumbs={false}
                    // useKeyboardArrows={true}
                    centerMode={true}
                    centerSlidePercentage={anchoEvento}
                    // swipeScrollTolerance={2}
                    >
                        {
                            eventosMostrar.map(ev => (
                                <>
                                    <EventoNet
                                        // titulo=""
                                        imagen={`${process.env.backendURL}/static/${ev.portada_imagen}`}
                                        key={ev.id}
                                        alt={ev.es_titulo}
                                        link={`${process.env.frontendURL}/${Number(ev.categoria) === 1 ? 'mastertalk' : 'conferencia'}/${ev.slug}`}
                                    />
                                    {
                                        (ev.certificado.certificado === 0) ? (
                                        <BotonCertificado
                                            onClick={() => solicitarCertificado(ev.id)}
                                        >
                                            Solicitar certificado
                                        </BotonCertificado>
                                        ) : (ev.certificado.certificado === 1) ? (
                                            <BotonCertificado
                                                onClick={() => descargarCertificado(ev.id)}
                                            >
                                                Pagar certificado
                                            </BotonCertificado>
                                        ) : (ev.certificado.certificado === 2) ? (
                                            <BotonCertificado
                                                onClick={() => descargarCertificado(ev.id)}
                                            >
                                                Descargar
                                            </BotonCertificado>
                                        ) : null
                                    }
                                </>
                            ))
                        }
                    </CarouselPersonalizado>
                </div>
            ) : null
        }
            
        </>
    );
}
 
export default FranjaContenidoCertificados;
