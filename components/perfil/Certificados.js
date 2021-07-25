import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';
import EventoNet from '../agenda/EventoNet';
import FranjaContenidoCertificados from '../agenda/FranjaContenidoCertificados';
import clienteAxios from '../../config/axios';

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
`;

const BtnVerAgenda = styled.a`
    width: 100%;
`;

const Certificados = ({eventos, misInscripciones}) => {

    const [misCertificadosPagos, setMisCertificadosPagos] = useState([]);
    const [misCertificadosPendientes, setMisCertificadosPendientes] = useState([]);

    useEffect(() => {

        
        function separarEventos() {
            let mCerPend = [], mCerPagos = [];
            misInscripciones.forEach(ins => {
                if (ins.certificado === 0) {
                    mCerPend.push(ins.charla);
                } else if (ins.certificado === 1) {
                    mCerPagos.push(ins.charla);
                }
            })

            console.log('pendientes ', mCerPend);
            console.log('pagos ', mCerPagos);

            eventos.forEach(ev => {  
                if(mCerPend.includes(ev.id)) {
                    setMisCertificadosPendientes([...misCertificadosPendientes, ev])
                } else if (mCerPagos.includes(ev.id)) {
                    setMisCertificadosPagos([...misCertificadosPagos, ev])
                }
            })
        }
        separarEventos();



        // eslint-disable-next-line
    }, [misInscripciones])

    return (
        <div className="py-5 text-center">
            <Container className="mx-auto">
                <TituloBox>
                    <img src="/img/iconos/n_mis_certificados.svg" alt="Mis Certificados" />    
                    <Titulo>Mis certificados</Titulo>
                </TituloBox>

            </Container>
            <FranjaContenidoCertificados eventosMostrar={misCertificadosPendientes} titulo={'PENDIENTES'} />
            <FranjaContenidoCertificados eventosMostrar={misCertificadosPagos} titulo={'MIS CERTIFICADOS'} />
        </div>
    );
}
 
export default Certificados;