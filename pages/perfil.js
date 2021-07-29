import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Layout from '../components/general/Layout';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';
import Inscripciones from '../components/perfil/Inscripciones';
import Intereses from '../components/perfil/Intereses';
import Certificados from '../components/perfil/Certificados';
import EditarDatos from '../components/perfil/EditarDatos';
import {AlertaSwal} from '../helpers/helpers';
import clienteAxios from '../config/axios';
import { withTranslation } from '../i18n';

const Titulo = styled.h1`
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: bold;
`;

const SubTitulo = styled.p`
    font-size: 2.5rem;
    color: var(--colorPrimario);
    margin: 1rem 0 0 0;
    a {
        text-decoration: none;
        color: var(--colorPrimario);
        font-size: 2rem;
        margin-right: 1rem;
        border-right: 1px solid var(--colorPrimario);
        padding-right: 1rem;
    }
    a:last-of-type {
        margin-right: 0;
        border-right: none;
        padding-right: 0;
    }
`;

const FondoUno = styled.section`
    background-image: url('img/fondo-banners.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

const Quien = styled.h2`
    color: white;
    text-transform: uppercase;
    font-weight: 300!important;
    text-align: center;
    margin-bottom: 3rem!important;
    strong {
        font-weight: bold!important;
    }
`;

const Input = styled.input`
    color: white;
    border-radius: 3rem;
    font-size: 1.8rem;
    border: none;
    padding: 1rem 2rem;
    margin-bottom: 1.5rem;
    width: 100%;
    background-color: var(--colorPrimario);

    &::placeholder {
        color: #a7a7a7;
    }

    &:focus {
        outline: none;
    }

    @media (max-width: 768px){
        margin: 0 0 1rem 0;
    }

`;

const InputTextArea = styled.textarea`
    color: white;
    border-radius: 3rem;
    font-size: 1.8rem;
    border: none;
    width: 100%;
    min-height: 15rem;
    background-color: var(--colorPrimario);
    padding: 2rem;
    margin-bottom: 1.5rem;

    &::placeholder {
        color: #a7a7a7;
    }

    &:focus {
        outline: none;
    }

    @media (max-width: 768px){
        margin: 0 0 1rem 0;
    }

`;

const BotonEnviar = styled.button`
    background-color: white;
    color: var(--colorPrimario);
    font-size: 2rem;
    font-weight: bold;
    border: none;
    padding: 1rem 3rem;
    border-radius: 3rem;  
    margin-left: 1rem;
    transition: all .3s ease;

    &:focus {
        outline: none;
    }

    &:hover {
        padding: 1rem 5rem;
    }

    @media (max-width: 768px){
        margin-top: 1rem;
    }
`;

const Formulario = styled.form`
    border: 4px solid white;
    border-radius: 4rem;
    padding: 4rem 2rem;
    margin: 0 auto;
    @media (max-width: 768px){
        margin-bottom: 3rem;
    }
`;

const Perfil = () => {

    const [persona, setPersona] = useState();
    const [eventos, setEventos] = useState([]);
    const [inscripciones, setInscripciones] = useState([]);

    useEffect( () => {
        async function traerInformacion() {
            await clienteAxios.get('/usuarios/info')
                .then(resp => {
                    setPersona(resp.data.resp);
                    console.log(resp.data.resp);
                })
                .catch(err => {
                    console.log(err)
                })
        }

        async function traerInscripciones() {
            await clienteAxios.get('inscripciones/usuario')
                .then(resp => {
                    setInscripciones(resp.data.resp)

                })
                .catch(err => {
                    console.log(err)
                })
        }

        async function traerEventos() {
            await clienteAxios.get('/charlas/agenda')
                .then(respuesta => {
                    const ordenado = respuesta.data.resp.sort(function(a, b){
                        if(a.hora < b.hora) return -1;
                        if(a.hora > b.hora) return 1;
                    })
                    setEventos(ordenado);
                    // setCargando(false);
                })
                .catch(err => {
                    console.log(err)
                })
        }

        traerInformacion();
        traerInscripciones();
        traerEventos();
        // eslint-disable-next-line
    }, [])

    return (

        <>
            <Head>
                {/* <title>{t('Contacto.SEO.Titulo')}</title> */}
                {/* <meta name="description" content={t('Contacto.SEO.Descripcion')} /> */}
                {/* <meta name="keywords" content={t('Contacto.SEO.PalabrasClave')} /> */}
            </Head>
            <Layout>
                <Container className="mx-auto pt-5 pb-0">
                    <Row>
                        <Col sm={12} md={12} lg={7}>
                            <Titulo>Mi perfil</Titulo>
                            <SubTitulo>Aquí podrás ver tus inscripciones, solicitar tus certificados, modificar tus intereses, y editar tus datos personales.</SubTitulo>
                            <SubTitulo id="inscripciones">
                                <Link href="#"><a>Inscripciones</a></Link>
                                <Link href="#"><a>Certificados</a></Link>
                                <Link href="#intereses"><a>Intereses</a></Link>
                                <Link href="#datos" ><a>Mis Datos</a></Link>
                            </SubTitulo>
                        </Col>
                        <Col sm={0} md={0} lg={5} className="text-center">
                            <img style={{maxHeight: '250px'}} src="/img/n_mi_perfil.png" alt="Mi Perfil | Latam Hospitals"    />
                        </Col>
                    </Row>
                </Container>
                <Inscripciones eventos={eventos} misInscripciones={inscripciones} />
                <Certificados eventos={eventos} misInscripciones={inscripciones} />
                <Intereses persona={persona} />
                <EditarDatos datos={persona} />
            </Layout>
        </>
    );
}
 
export default Perfil;