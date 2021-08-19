import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';
import EventoNet from '../agenda/EventoNet';
import FranjaContenido from '../agenda/FranjaContenido';
import clienteAxios from '../../config/axios';


const Fondo = styled.div`
    background-image: url('img/fondo-participan.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

const TituloBox = styled.div`
    display: flex;
`;

const Titulo = styled.h2`
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: bold;
    color: white;
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

const Inscripciones = ({eventos, misInscripciones}) => {

    const [misEventosInscriptos, setMisEnventosInscriptos] = useState([]);

    useEffect(() => {
        
        function separarEventos() {
            if(misInscripciones && eventos) {
                const misInscripcionesSoloCharlas = misInscripciones.map(ins => {
                    return ins.charlaId;
                })
                eventos.forEach(ev => {
                    if(misInscripcionesSoloCharlas.includes(ev.id)) {
                        setMisEnventosInscriptos(misEventosInscriptos => [...misEventosInscriptos, ev])
                    }
                })
            }
        }
        separarEventos();
        
        // eslint-disable-next-line
    }, [eventos, misInscripciones])

    return (
        <Fondo className="py-5 text-center">
            <Container className="mx-auto">
                <TituloBox>
                    <svg fill="white" height="4.9rem" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g id="Ticket"><path d="M473.6,215.5508a17.1034,17.1034,0,0,0,8.498-14.7788V127.75A17.0965,17.0965,0,0,0,465,110.6519H349.0981v28.5a17.0981,17.0981,0,1,1-34.1962,0v-28.5H47A17.0965,17.0965,0,0,0,29.9019,127.75v73.022A17.1034,17.1034,0,0,0,38.4,215.5508a46.5019,46.5019,0,0,1-.0093,80.9077,17.095,17.095,0,0,0-8.4887,14.7788V384.25A17.0965,17.0965,0,0,0,47,401.3481H314.9019v-28.5a17.0981,17.0981,0,1,1,34.1962,0v28.5H465A17.0965,17.0965,0,0,0,482.0981,384.25V311.2373a17.1034,17.1034,0,0,0-8.498-14.7788,46.5064,46.5064,0,0,1,0-80.9077Zm-124.502,98.4a17.0981,17.0981,0,1,1-34.1962,0v-28.5a17.0981,17.0981,0,1,1,34.1962,0Zm0-87.4018a17.0981,17.0981,0,1,1-34.1962,0v-28.5a17.0981,17.0981,0,1,1,34.1962,0Z"/></g></svg>                    
                    <Titulo>Mis inscripciones</Titulo>
                </TituloBox>
            </Container>

            <FranjaContenido busqueda={''} eventosMostrar={misEventosInscriptos} titulo={''} />

            <Link href="/agenda">
                <BtnVerAgenda className="btn-lh btn-blanco text-center mx-auto mt-5 " style={{maxWidth: '35rem'}} id="certificados">Ver agenda completa</BtnVerAgenda>
            </Link>

        </Fondo>
    );
}
 
export default Inscripciones;