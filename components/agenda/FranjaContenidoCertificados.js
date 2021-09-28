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
import { PayPalScriptProvider, PayPalButtons, BraintreePayPalButtons } from "@paypal/react-paypal-js";
import clienteAxios from '../../config/axios';
import axios from 'axios';

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

const ContenedorPago = styled.div`
    max-width: 750px;
    margin: 1rem auto;
`;

const FranjaContenidoCertificados = ({titulo, eventosMostrar, t}) => {

    const [indicadores, setIndicadores] = useState(false);
    const [anchoEvento, setAnchoEvento] = useState(false);
    const [quieroPagar, setQuieroPagar] = useState('');
    const [pagarID, setPagarID] = useState(null);
    const [persona, setPersona] = useState({});
    const NUM_CERT_PAGAR = 1;

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
            setAnchoEvento(30);
            // setAnchoEvento(18);
        } else if (window.innerWidth > 1200) {
            setAnchoEvento(30);
            // setAnchoEvento(23);
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

    async function descargarCertificado(charla) {


        // axios({
        //     url: `${process.env.backendURL}/api/certificados/descargar/${i18n.language}/${charla}`,
        //     method: 'GET',
        //     responseType: 'blob',
        //   }).then((response) => {
        //       console.log(response)
        //      const url = window.URL.createObjectURL(new Blob([response.data]));
        //      const link = document.createElement('a');
        //      link.href = url;
        //      link.setAttribute('download', response.data.nombreArchivo);
        //      document.body.appendChild(link);
        //      link.click();
        //   });



        await clienteAxios.get(`/certificados/descargar/${i18n.language}/${charla}`, { responseType: 'blob' })
            .then(response => {
                console.log(response);

                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'certificado_latam_hospitals.pdf');
                document.body.appendChild(link);
                link.click();

                AlertaSwal(t('Alertas.Excelente'), t('Alertas.CertificadoDescargado'), 'success', 2500);
            })
            .catch(err => {
                console.log(err);
                AlertaSwal(t('Alertas.Error'), t('Alertas.NoPudimosDescargar'), 'error', 2500);
            })
    }

    const txAprobada = async (data, actions) => {
        const info = {
            idCharla: pagarID,
            orderID: data.orderID
        }
        await clienteAxios.put(`/certificados/pagar`, info)
            .then(resp => {
                if(resp.data.editado) {
                    AlertaSwal(t('Alertas.Excelente'), t('Alertas.PagoExito'), 'success', 3500);
                    setTimeout(() => {
                        window.location.href = window.location.href + '?pago=exito';
                    }, 2000);
                } else {
                    AlertaSwal(t('Alertas.Excelente'), t('Alertas.NoPudimosGuardarElPagoEnBaseDeDatos'), 'success', 3500);
                    setTimeout(() => {
                        window.location.href = window.location.href + '?pago=error';
                    }, 2000);
                }
            })
            .catch(err => {
                console.log(err);
                AlertaSwal(t('Alertas.Error'), t('Alertas.NoPudimosGuardarElPagoEnBaseDeDatos'), 'error', 3500);
                setTimeout(() => {
                    window.location.href = window.location.href + '?pago=notDB';
                }, 2000);
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
                <div className="pt-5r container">
                    <Titulo className="text-left">{titulo}</Titulo>
                    <CarouselPersonalizado showStatus={false}
                    showIndicators={indicadores}
                    stopOnHover={true}
                    swipeable={true}
                    interval={3000}
                    // infiniteLoop={true}
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
                                        (Number(ev.certificado.certificado) === NUM_CERT_PAGAR) ? (
                                            <BotonCertificado
                                                onClick={() => {
                                                    setQuieroPagar(i18n.language === 'es' ? ev.es_titulo : i18n.language === 'en' ? ev.en_titulo : ev.es_titulo)
                                                    setPagarID(ev.id)
                                                    window.location.href = '#abonar'
                                                }} 
                                            >
                                                {t('Certificados.Solicitar')}
                                            </BotonCertificado>   
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
                    {
                        (quieroPagar !== '') ? (
                            <ContenedorPago>
                            <div id="abonar"></div>
                            <PayPalScriptProvider options={{ "client-id": process.env.clientID }}>
                                <p className="mt-5 text-center">
                                    {t('Certificados.Abone5USD')}
                                    <br />
                                    <span className="font-weight-bold">"{quieroPagar}"</span>
                                </p>
                                <PayPalButtons
                                    style={{ color: "blue", shape: "pill", label: "pay", height: 40, margin: '0 auto!important' }}
                                    // style={{ layout: "horizontal" }}
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    description: "Latam Hospitals",
                                                    amount: {
                                                        currency_code: "USD",
                                                        value: 5.00,
                                                        breakdown: {
                                                        item_total: {
                                                            currency_code: "USD",
                                                            value: 5.00
                                                        }
                                                        }
                                                    },
                                                    
                                                    name: quieroPagar,
                                                    unit_amount: {
                                                    currency_code: "USD",
                                                    value: 5.00
                                                    },
                                                    quantity: "1"
                                                }
                                            ]
                                        });
                                    }}
                                    onApprove={(data, actions) => txAprobada(data, actions)}
                                    onError={ (err) => {
                                        AlertaSwal(t('Alertas.Error'), `${t('Alertas.NoPudimosRegistrarElPago')}`+<br/>+`${err}`, 'error', 3500)
                                    }}      
                                    onCancel={(cancel) => {
                                        AlertaSwal(t('Alertas.Error'), t('Alertas.ElPagoFueCancelado'), 'error', 3500)
                                    }}                                          
                                />
                            </PayPalScriptProvider>
                            </ContenedorPago>
                        ) : null
                    }
                    

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