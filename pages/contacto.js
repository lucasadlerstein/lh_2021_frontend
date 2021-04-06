import React, {useState} from 'react';
import Head from 'next/head';
import Layout from '../components/general/Layout';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';
import {AlertaSwal} from '../helpers/helpers';
import clienteAxios from '../config/axios';
import { withTranslation } from '../i18n';

const Titulo = styled.h1`
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: bold;
`;

const SubTitulo = styled.p`
    font-size: 3rem;
    color: var(--colorPrimario);
    margin: 1rem 0 0 0;
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

const Contacto = ({t}) => {

    const [persona, setPersona] = useState({
        nombre: '',
        apellido: '',
        pais: '',
        email: '',
        asunto: '',
        mensaje: ''
    });

    const [empresa, setEmpresa] = useState({
        empresa: '',
        rubro: '',
        pais: '',
        nombre: '',
        asunto: '',
        email: '',
        mensaje: ''
    });

    const [loadingPersona, setLoadingPersona] = useState(false);
    const [loadingEmpresa, setLoadingEmpresa] = useState(false);
 

    const handleChangePersona = e => {
        setPersona({
            ...persona,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeEmpresa = e => {
        setEmpresa({
            ...empresa,
            [e.target.name]: e.target.value
        })
    }

    const enviarFormularioPersonas = async e => {
        e.preventDefault();
        // Validar
        if(persona.nombre === '' || persona.apellido === '' || persona.email === '' || persona.pais === '' || persona.asunto === '' || persona.mensaje === '') {
            AlertaSwal('Error', 'Todos los campos son obligatorios', 'error', 2500);
            return;
        }

        setLoadingPersona(true);

        await clienteAxios.post('contacto/persona', persona)
            .then(respuesta => {
                if(respuesta.data.enviado === true) {
                    AlertaSwal('Excelente', 'Gracias por su mensaje. Pronto estaremos en contacto contigo', 'success', 3000);
                } else {
                    AlertaSwal('Error', 'No pudimos enviar el mensaje. Vuelva a intentar en unos minutos.', 'error', 5000);
                }
                setLoadingPersona(false);
            })
            .catch(error => {
                AlertaSwal('Error', 'No pudimos enviar el mensaje. Vuelva a intentar en unos minutos.', 'error', 5000);
                setLoadingPersona(false);
            })
    }

    const enviarFormularioEmpresas = async e => {
        e.preventDefault();
        // Validar
        if(empresa.nombre === '' || empresa.empresa === '' || empresa.rubro === '' || empresa.email === '' || empresa.pais === '' || empresa.asunto === '' || empresa.mensaje === '') {
            AlertaSwal('Error', 'Todos los campos son obligatorios', 'error', 2500);
            return;
        }

        setLoadingEmpresa(true);

        await clienteAxios.post('contacto/empresa', empresa)
            .then(respuesta => {
                if(respuesta.data.enviado === true) {
                    AlertaSwal('Excelente', 'Gracias por su mensaje. Pronto estaremos en contacto contigo', 'success', 3000);
                } else {
                    AlertaSwal('Error', 'No pudimos enviar el mensaje. Vuelva a intentar en unos minutos.', 'error', 5000);
                }
                setLoadingEmpresa(false);
            })
            .catch(error => {
                AlertaSwal('Error', 'No pudimos enviar el mensaje. Vuelva a intentar en unos minutos.', 'error', 5000);
                setLoadingEmpresa(false);
            })
    }

    return (
        <>
            <Head>
                <title>{t('Contacto.SEO.Titulo')}</title>
                <meta name="description" content={t('Contacto.SEO.Descripcion')} />
                <meta name="keywords" content={t('Contacto.SEO.PalabrasClave')} />
            </Head>
            <Layout>
                <Container className="text-center mx-auto py-5">
                    <Titulo>{t('Contacto.Titulo')}</Titulo>
                    <SubTitulo>{t('Contacto.Subtitulo')}</SubTitulo>
                </Container>
                <FondoUno className="py-10" id="personas">
                    <Container>
                    <Link href="#empresas">
                        <a className="btn-lh btn-blanco text-uppercase bor-rad-5 mb-5 hide-desktop">{t('Contacto.SoyEmpresa')}</a>
                    </Link>
                        <Row>
                            <Col xs={12} lg={6}>
                                <Formulario onSubmit={enviarFormularioPersonas}>
                                    <Quien>Contacto <strong>asistentes</strong></Quien>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <Input type="text" required name="nombre" value={persona.nombre} onChange={handleChangePersona} placeholder={t('Contacto.FormLabel.Nombre')} />
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Input type="text" required name="apellido" value={persona.apellido} onChange={handleChangePersona} placeholder={t('Contacto.FormLabel.Apellido')} />
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Input type="text" required name="pais" value={persona.pais} onChange={handleChangePersona} placeholder={t('Contacto.FormLabel.Pais')} />
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Input type="text" required name="asunto" value={persona.asunto} onChange={handleChangePersona} placeholder={t('Contacto.FormLabel.Asunto')} />
                                        </Col>
                                        <Col xs={12} md={12}>
                                            <Input type="email" required name="email" value={persona.email} onChange={handleChangePersona} placeholder={t('Contacto.FormLabel.Email')} />
                                        </Col>
                                        <Col xs={12} md={12}>
                                            <InputTextArea type="textarea" required name="mensaje" value={persona.mensaje} onChange={handleChangePersona} placeholder={t('Contacto.FormLabel.Mensaje')} />
                                        </Col>
                                        <Col xs={12} md={12} className="text-center margin-5-mobile">
                                            <BotonEnviar type="submit">
                                                {
                                                    (loadingPersona === true) ? (
                                                        <div className="spinner">
                                                            <div className="bounce1"></div>
                                                            <div className="bounce2"></div>
                                                            <div className="bounce3"></div>
                                                        </div>
                                                    ) : t('Contacto.FormLabel.Boton') 
                                                }
                                            </BotonEnviar>
                                        </Col>
                                    </Row>
                                </Formulario>
                            </Col>

                            <Col xs={12} lg={6} id="empresas">
                                <Formulario onSubmit={enviarFormularioEmpresas}>
                                    <Quien>Contacto <strong>empresas</strong></Quien>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <Input type="text" required name="empresa" value={empresa.empresa} onChange={handleChangeEmpresa} placeholder={t('Contacto.FormLabel.NombreEmpresa')} />
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Input type="text" required name="rubro" value={empresa.rubro} onChange={handleChangeEmpresa} placeholder={t('Contacto.FormLabel.Rubro')} />
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Input type="text" required name="pais" value={empresa.pais} onChange={handleChangeEmpresa} placeholder={t('Contacto.FormLabel.Pais')} />
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Input type="text" required name="nombre" value={empresa.nombre} onChange={handleChangeEmpresa} placeholder={t('Contacto.FormLabel.NombreEnEmpresa')} />
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Input type="text" required name="asunto" value={empresa.asunto} onChange={handleChangeEmpresa} placeholder={t('Contacto.FormLabel.Asunto')} />
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Input type="email" required name="email" value={empresa.email} onChange={handleChangeEmpresa} placeholder={t('Contacto.FormLabel.Email')} />
                                        </Col>
                                        <Col xs={12} md={12}>
                                            <InputTextArea type="textarea" required name="mensaje" value={empresa.mensaje} onChange={handleChangeEmpresa} placeholder={t('Contacto.FormLabel.Mensaje')} />
                                        </Col>
                                        <Col xs={12} md={12} className="text-center">
                                        <BotonEnviar type="submit">
                                                {
                                                    (loadingEmpresa === true) ? (
                                                        <div class="spinner">
                                                            <div class="bounce1"></div>
                                                            <div class="bounce2"></div>
                                                            <div class="bounce3"></div>
                                                        </div>
                                                    ) : t('Contacto.FormLabel.Boton') 
                                                }
                                            </BotonEnviar>
                                        </Col>
                                    </Row>
                                </Formulario>
                            </Col>
                        </Row>
                    </Container>
                </FondoUno>
            </Layout>
        </>
    );
}

Contacto.with18nextTranslation = async () => ({
    namespacesRequired: ['contacto'],
});
 
export default withTranslation('contacto')(Contacto);