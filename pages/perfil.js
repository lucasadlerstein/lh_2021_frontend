import React, {useState} from 'react';
import Head from 'next/head';
import Layout from '../components/general/Layout';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';
import Inscripciones from '../components/perfil/Inscripciones';
import Intereses from '../components/perfil/Intereses';
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
        margin-right: .5rem;
        border-right: 1px solid var(--colorPrimario);
        padding-right: .5rem;
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

    const [persona, setPersona] = useState({
        nombre: '',
        apellido: '',
        pais: '',
        email: '',
        
    });

    return (
        <>
            <Head>
                {/* <title>{t('Contacto.SEO.Titulo')}</title> */}
                {/* <meta name="description" content={t('Contacto.SEO.Descripcion')} /> */}
                {/* <meta name="keywords" content={t('Contacto.SEO.PalabrasClave')} /> */}
            </Head>
            <Layout>
                <Container className="mx-auto py-5">
                    <Row>
                        <Col sm={12} md={12} lg={7}>
                            <Titulo>Mi perfil</Titulo>
                            <SubTitulo>Aquí podrás ver tus inscripciones, solicitar tus certificados, modificar tus intereses, y editar tus datos personales.</SubTitulo>
                            <SubTitulo>
                                <Link href="#"><a>Inscripciones</a></Link>
                                <Link href="#"><a>Certificados</a></Link>
                                <Link href="#"><a>Intereses</a></Link>
                                <Link href="#"><a>Mis Datos</a></Link>
                            </SubTitulo>
                        </Col>
                        <Col sm={0} md={0} lg={5}>
                            <img src="" alt="Mi Perfil | Latam Hospitals" />
                        </Col>
                    </Row>
                </Container>
                <Inscripciones />
                <Intereses />
                <EditarDatos />
            </Layout>
        </>
    );
}
 
export default Perfil;