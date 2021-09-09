import React, {useState} from 'react';
import Head from 'next/head';
import Layout from '../components/general/Layout';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';
import {AlertaSwal} from '../helpers/helpers';
import clienteAxios from '../config/axios';
import { withTranslation } from '../i18n';
import {useRouter} from 'next/router';

const Titulo = styled.h1`
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: bold;
    margin-top: 5rem;
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
    
    const router = useRouter();
    const [persona, setPersona] = useState({
        asunto: '',
        mensaje: ''
    });

    const [loadingPersona, setLoadingPersona] = useState(false); 

    const handleChangePersona = e => {
        setPersona({
            ...persona,
            [e.target.name]: e.target.value
        })
    }

    const enviarFormularioPersonas = async e => {
        e.preventDefault();
        // Validar
        if(persona.asunto === '' || persona.mensaje === '') {
            AlertaSwal(t('MensajesSwal.Error'), t('MensajesSwal.CamposObligatorios'), 'error', 2500);
            return;
        }

        setLoadingPersona(true);

        await clienteAxios.post('contacto/logueado', persona)
            .then(respuesta => {
                if(respuesta.data.enviado === true) {
                    AlertaSwal(t('MensajesSwal.Excelente'), t('MensajesSwal.GraciasPorMensaje'), 'success', 3000);
                    setTimeout(() => {
                        router.push('/');
                    }, 5000);
                } else {
                    AlertaSwal(t('MensajesSwal.Error'), t('MensajesSwal.NoPudimosMensaje'), 'error', 5000);
                }
                setLoadingPersona(false);
            })
            .catch(error => {
                AlertaSwal('Error', 'No pudimos enviar el mensaje. Vuelva a intentar en unos minutos.', 'error', 5000);
                setLoadingPersona(false);
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
                        <div className="mx-auto" style={{maxWidth: '95%'}}>
                            <Formulario onSubmit={enviarFormularioPersonas}>
                                <Quien>{t('Contacto.Contacto')} <strong>LH</strong></Quien>
                                <Row>
                                    <Col xs={12} md={12}>
                                        <Input type="text" required name="asunto" value={persona.asunto} onChange={handleChangePersona} placeholder={t('Contacto.FormLabel.Asunto')} />
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
                        </div>
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