import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import {Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Link from 'next/link';
import EventoNet from './EventoNet';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {useRouter} from 'next/router';
import {withTranslation, i18n} from '../../i18n';
import { loadScript } from "@paypal/paypal-js";
import {AlertaSwal} from '../../helpers/helpers';
import { PayPalButton } from "react-paypal-button-v2";
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
    const router = useRouter();

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
            setAnchoEvento(32);
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

    async function compartirCertificado(charla) {
        let nombreEvento = '';
        eventosMostrar.forEach(evento => {
            if(evento.id === charla) {
                switch (i18n.language) {
                    case 'es':
                    case 'ES':
                        nombreEvento = evento.es_titulo;
                        break;

                    case 'en':
                    case 'EN':
                        nombreEvento = evento.en_titulo;
                        break;

                    case 'pr':
                    case 'PR':
                    case 'po':
                    case 'PO':
                        nombreEvento = evento.po_titulo;
                        break;
                
                    default:
                        nombreEvento = evento.e_titulo;
                        break;
                }
            }
        })
        const url = `https://www.linkedin.com/in/lucasadlerstein/edit/certification/new/?isFromA2p=true&issueMonth=10&issueYear=2021&name=${nombreEvento}&organizationId=68864901`;
        window.open(url, '_blank');

    }

    const txAprobada = async (data, actions) => {
        const info = {
            idCharla: pagarID,
            orderID: data.id
        }
        console.log('data ', data)
        console.log('actions ', actions)
        await clienteAxios.put(`/certificados/pagar`, info)
            .then(resp => {
                if(resp.data.editado) {
                    AlertaSwal(t('Alertas.Excelente'), '', 'success', 3500);
                    setTimeout(() => {
                        // window.location.href = window.location.href + '?pago=exito';
                        router.push('/perfil?pago=exito');
                        window.location.reload();
                    }, 2000);
                } else {
                    AlertaSwal(t('Alertas.Excelente'), '', 'success', 3500);
                    setTimeout(() => {
                        // window.location.href = window.location.href + '?pago=error';
                        router.push('/perfil??pago=error');
                        window.location.reload();
                    }, 2000);
                }
            })
            .catch(err => {
                console.log(err);
                AlertaSwal(t('Alertas.Error'), '', 'error', 3500);
                setTimeout(() => {
                    // window.location.href = window.location.href + '?pago=notDB';
                    router.push('/perfil??pago=notDB');
                    window.location.reload();
                }, 2000);
            })
    }

    async function pagarDirecto(id) {
        const info = {
            idCharla: id,
            orderID: 'GRATIS'
        }
        await clienteAxios.put(`/certificados/pagar`, info)
            .then(resp => {
                if(resp.data.editado) {
                    AlertaSwal(t('Alertas.Excelente'), t('Alertas.PagoExito'), 'success', 3500);
                    setTimeout(() => {
                        // window.location.href = window.location.href + '?pago=exito';
                        router.push('/perfil?pago=gratis');
                        window.location.reload();
                    }, 2000);
                } else {
                    AlertaSwal(t('Alertas.Excelente'), t('Alertas.NoPudimosGuardarElPagoEnBaseDeDatos'), 'success', 3500);
                    setTimeout(() => {
                        // window.location.href = window.location.href + '?pago=error';
                        router.push('/perfil??pago=error');
                        window.location.reload();
                    }, 2000);
                }
            })
            .catch(err => {
                console.log(err);
                AlertaSwal(t('Alertas.Error'), t('Alertas.NoPudimosGuardarElPagoEnBaseDeDatos'), 'error', 3500);
                setTimeout(() => {
                    // window.location.href = window.location.href + '?pago=notDB';
                    router.push('/perfil??pago=notDB');
                    window.location.reload();
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
                                        imagen={`${process.env.NEXT_PUBLIC_BACKEND_URL}/static/${i18n.language === 'es' ? ev.portada_imagen : i18n.language === 'en' ? ev.en_portada_imagen : ev.po_portada_imagen}`}
                                        key={ev.id}
                                        alt={i18n.language === 'es' ? ev.es_titulo : i18n.language === 'en' ? ev.en_titulo : ev.po_titulo}
                                        link={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${Number(ev.categoria) === 1 ? 'mastertalk' : 'conferencia'}/${ev.slug}`}
                                    />
                                    {
                                        (Number(ev.certificado.certificado) === NUM_CERT_PAGAR) ? (
                                            <BotonCertificado
                                                onClick={() => {
                                                    if(ev.id === 33 || ev.id === 34 || ev.id === 26 || ev.id === 32 || ev.id === 24 || ev.id === 23) {
                                                        pagarDirecto(ev.id);
                                                    } else {
                                                        setQuieroPagar(i18n.language === 'es' ? ev.es_titulo : i18n.language === 'en' ? ev.en_titulo : ev.es_titulo)
                                                        setPagarID(ev.id)
                                                        window.location.href = '#abonar'
                                                    }
                                                }} 
                                            >
                                                {t('Certificados.Solicitar')}
                                            </BotonCertificado>   
                                        ) : (
                                            <>
                                                <BotonCertificado
                                                    onClick={() => descargarCertificado(ev.id)}
                                                >
                                                    {t('Certificados.Descargar')}
                                                </BotonCertificado>
                                                <BotonCertificado
                                                    className="ml-3"
                                                    style={{maxHeight: '54px'}}
                                                    onClick={() => compartirCertificado(ev.id)}
                                                >
                                                    <img
                                                        alt="Compartir en Linkedin"
                                                        src="img/iconos/share.png"
                                                        style={{width: '55%'}}
                                                    />
                                                </BotonCertificado>

                                            </>
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
                            <p className="mt-5 text-center">
                                {t('Certificados.Abone5USD')}
                                <br />
                                <span className="font-weight-bold">"{quieroPagar}"</span>
                            </p>
                            <PayPalButton
                                amount="5.0"
                                shippingPreference="NO_SHIPPING"
                                onSuccess={(details, data) => {
                                    txAprobada(details, data)
                                }}
                                onApprove={(data, actions) => txAprobada(data, actions)}
                                onError={ (err) => {
                                    AlertaSwal(t('Alertas.Error'), `${t('Alertas.NoPudimosRegistrarElPago')}`+<br/>+`${err}`, 'error', 3500)
                                }}      
                                onCancel={(cancel) => {
                                    AlertaSwal(t('Alertas.Error'), t('Alertas.ElPagoFueCancelado'), 'error', 3500)
                                }}                                          
                                options={{
                                    clientId: process.env.NEXT_PUBLIC_CLIENT_ID
                                }}                          
                            />
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