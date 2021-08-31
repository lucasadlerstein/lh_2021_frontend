import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import {Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Link from 'next/link';
import EventoNet from './EventoNet';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {withTranslation, i18n} from '../../i18n';
import { loadScript } from "@paypal/paypal-js";
import {AlertaSwal} from '../../helpers/helpers';

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

const FranjaContenidoCertificados = ({titulo, eventosMostrar, t}) => {

    const [indicadores, setIndicadores] = useState(false);
    const [anchoEvento, setAnchoEvento] = useState(false);
    const [quieroPagar, setQuieroPagar] = useState(false);
    const [persona, setPersona] = useState({});

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

        if(localStorage.getItem('usuario')) {
            setPersona(JSON.parse(localStorage.getItem('usuario')));
        }

        // eslint-disable-next-line
    }, [])

    function solicitarCertificado(charla) {
        // PAGAR
        loadScript({
            "client-id": "test",
            "data-client-email": persona.email,
            "data-charla": charla,
            
            
        })
        .then((paypal) => {
            paypal.Buttons().render("#boton-pago-certificado");
        })
        .catch((err) => {
            console.error("failed to load the PayPal JS SDK script", err);
        });
    

        // Pago exitoso => cambiar en la BDD
    }

    async function descargarCertificado(charla) {
        await clienteAxios.get(`/certificados/descargar/${i18n.language}/${charla}`)
            .then(resp => {
                AlertaSwal(t('Alertas.Excelente'), t('Alertas.CertificadoDescargado'), 'success', 2500);
            })
            .catch(err => {
                AlertaSwal(t('Alertas.Error'), t('Alertas.NoPudimosDescargar'), 'error', 2500);
            })
    }

    return (
        <>
        {/* <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
        </Head> */}
        {
            (eventosMostrar.length > 0) ? (
                <div className="pt-5r px-0">
                    <Titulo className="text-left container">{titulo}</Titulo>
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
                                        imagen={`${process.env.backendURL}/static/${i18n.language === 'es' ? ev.portada_imagen : i18n.language === 'en' ? ev.en_portada_imagen : ev.po_portada_imagen}`}
                                        key={ev.id}
                                        alt={i18n.language === 'es' ? ev.es_titulo : i18n.language === 'en' ? ev.en_titulo : ev.po_titulo}
                                        link={`${process.env.frontendURL}/${Number(ev.categoria) === 1 ? 'mastertalk' : 'conferencia'}/${ev.slug}`}
                                    />
                                    {
                                        (ev.certificado.certificado === 0) ? (
                                            (quieroPagar) ? (
                                                <div id="boton-pago-certificado"></div>
                                            ) : (
                                                <BotonCertificado
                                                    onClick={() => solicitarCertificado(ev.id)}
                                                >
                                                    {t('Certificados.Solicitar')}
                                                </BotonCertificado>
                                            )
                                        ) : (
                                            <BotonCertificado
                                                onClick={() => descargarCertificado(ev.id)}
                                            >
                                                {t('Certificados.Descargar')}
                                            </BotonCertificado>
                                        )
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
 
FranjaContenidoCertificados.with18nextTranslation = async () => ({
    namespacesRequired: ['agenda'],
});

export default withTranslation('agenda')(FranjaContenidoCertificados);