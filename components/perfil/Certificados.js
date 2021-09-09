import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';
import EventoNet from '../agenda/EventoNet';
import FranjaContenidoCertificados from '../agenda/FranjaContenidoCertificados';
import clienteAxios from '../../config/axios';
import {withTranslation} from '../../i18n';

const TituloBox = styled.div`
    display: flex;
`;

const Titulo = styled.h2`
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: bold;
    color: var(--colorPrimario);
    /* margin-bottom: 1.5rem; */
    margin-bottom: 0!important;
    margin-left: 2rem;
    @media (max-width: 768px){
        text-align: left;
    }
`;

const BtnVerAgenda = styled.a`
    width: 100%;
`;

const Certificados = ({eventos, misInscripciones, t}) => {

    const [misCertificadosPagos, setMisCertificadosPagos] = useState([]);
    const [misCertificadosPendientes, setMisCertificadosPendientes] = useState([]);

    useEffect(() => {

        
        function separarEventos() {
            let mCerPend = [], mCerPagos = [];
            if(misInscripciones) {
                misInscripciones.forEach(ins => {
                    if (ins.certificado === 0) {
                        mCerPend.push({charla: ins.charlaId, certificado: ins.certificado});
                        // mCerPend.push(ins.charlaId);
                    } else {
                        mCerPagos.push({charla: ins.charlaId, certificado: ins.certificado});
                        // mCerPagos.push(ins.charlaId);
                    }
                })
            }

            // console.log('pendientes ', mCerPend);
            // console.log('pagos ', mCerPagos);
            if(eventos) {
                const ahora = new Date();
                eventos.forEach(ev => {
                    let mCerPendNow   = mCerPend.filter(function(e) { return e.charla === ev.id; });
                    let mCerPagNow    = mCerPagos.filter(function(e) { return e.charla === ev.id; });
                    if(mCerPendNow.length > 0 || mCerPagNow.length > 0) {
                        let objEvCert = {
                            categoria: ev.categoria,
                            en_portada_imagen: ev.en_portada_imagen,
                            en_titulo: ev.en_titulo,
                            portada_imagen: ev.portada_imagen,
                            es_titulo: ev.es_titulo,
                            po_portada_imagen: ev.po_portada_imagen,
                            po_titulo: ev.po_titulo,
                            id: ev.id,
                            fecha: ev.fecha,
                            hora: ev.hora,
                            slug: ev.slug,
                            certificado: mCerPendNow.filter(function(e) { return e.charla === ev.id; })[0]
                        }
                        const evFecha = new Date(`${objEvCert.fecha}T${objEvCert.hora}`);
                        if(evFecha < ahora) {
                            console.log('pasado');
                            // ya empezo
                            if (mCerPendNow.length > 0) {
                                setMisCertificadosPendientes(misCertificadosPendientes => [...misCertificadosPendientes, objEvCert])
                            }  else if (mCerPagNow.length > 0) {
                                setMisCertificadosPagos(misCertificadosPagos => [...misCertificadosPagos, objEvCert])
                            } 
                        }
                    }
                    // if(mCerPend.includes(ev.id)) {
                    //     setMisCertificadosPendientes(misCertificadosPendientes => [...misCertificadosPendientes, ev])
                    // } else if (mCerPagos.includes(ev.id)) {
                    //     setMisCertificadosPagos(misCertificadosPagos => [...misCertificadosPagos, ev])
                    // }
                })
            }
        }
        separarEventos();



        // eslint-disable-next-line
    }, [misInscripciones, eventos])

    return (
        <div className="py-5 text-center">
            <Container className="mx-auto">
                <TituloBox>
                    <img src="/img/iconos/n_mis_certificados_azul.svg" alt="Mis Certificados" />    
                    <Titulo>{t('Certificados.Titulo')}</Titulo>
                </TituloBox>

            </Container>
            {
                (misCertificadosPagos.length === 0 && misCertificadosPendientes.length === 0) ? (
                    <p className="container">{t('Certificados.AquiPodras')}</p>
                ) : (
                    <>
                        <FranjaContenidoCertificados busqueda={''} eventosMostrar={misCertificadosPendientes} titulo={t('Certificados.Pendientes')} />
                        <FranjaContenidoCertificados busqueda={''} eventosMostrar={misCertificadosPagos} titulo={t('Certificados.MisCertificados')} />
                    </>
                )
            }
        </div>
    );
}

Certificados.with18nextTranslation = async () => ({
    namespacesRequired: ['perfil'],
});

export default withTranslation('perfil')(Certificados);