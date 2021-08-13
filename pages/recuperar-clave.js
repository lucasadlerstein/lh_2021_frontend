import React, {useState, useEffect} from 'react';
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
`;

const SubTitulo = styled.p`
    font-size: 2rem;
    color: white;
    text-align: center;
    margin: 0 0 2rem 0;
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
    margin-bottom: 1rem!important;
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
    text-align: center;

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

const RecuperarClave = () => {

    const router = useRouter();
    const [persona, setPersona] = useState({
        token: '',
        password: '',
        passwordVerification: ''
    });

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const token = urlParams.get('t');
        if (token) {
            verificarToken();
            setPersona({...persona, token: token});
        } else {
            router.push('/login');
        }

        async function verificarToken() {
            await clienteAxios.get(`/usuarios/verificar-token/${token}`)
                .then(resp => {
                    if(resp.status === 200) {
                        setNombre(resp.data.persona.nombre);
                    } else {
                        router.push('/login');
                    }
                    
                })
                .catch(err => {
                    console.log(err);
                    router.push('/login');
                })
        }


        // eslint-disable-next-line
    }, []);

    
    const [nombre, setNombre] = useState('denuevo');

    const [loading, setLoading] = useState(false); 

    const handleChange = e => {
        setPersona({
            ...persona,
            [e.target.name]: e.target.value
        })
    }

    const enviarFormularioCambiarClave = async e => {
        e.preventDefault();
        // Validar
        if(persona.password === '' || persona.passwordVerification === '') {
            AlertaSwal('Error', 'Ambos campos son obligatorios', 'error', 2500);
            return;
        } else if( persona.password.length < 6) {
            AlertaSwal('Error', 'La contraseña debe tener más de 6 caracteres.', 'error', 2500);
            return;
        } else if(persona.password !== persona.passwordVerification) {
            AlertaSwal('Error', 'Las contraseñas no coinciden', 'error', 2500);
            return;
        }

        setLoading(true);

        await clienteAxios.post(`usuarios/cambiar-pass/`, persona)
            .then(respuesta => {
                console.log(respuesta);
                if(respuesta.data.transaction === 'done') {
                    AlertaSwal('Excelente', 'Su contraseña ha sido modificada.', 'success', 3000);
                    setTimeout(() => {
                        router.push('/login');
                    }, 1000);
                } else {
                    AlertaSwal('Error', 'No pudimos modificar su contraseña.', 'error', 5000);
                }
                setLoading(false);
            })
            .catch(error => {
                AlertaSwal('Error', 'No pudimos modificar la contraseña.', 'error', 5000);
                setLoading(false);
            })
    }

    return (
        <>
            <Head>
                <title>Recuperar Contraseña - Latam Hospitals</title>
                {/* <meta name="description" content={t('Contacto.SEO.Descripcion')} /> */}
                {/* <meta name="keywords" content={t('Contacto.SEO.PalabrasClave')} /> */}
            </Head>
            <Layout>
                <Container className="text-center mx-auto py-5">
                    <Titulo>Recuperar contraseña</Titulo>
                </Container>
                <FondoUno className="py-5r">
                    <Container>
                        <div className="mx-auto" style={{maxWidth: '80%'}}>
                            <Formulario onSubmit={enviarFormularioCambiarClave}>
                                <Quien>Hola <strong>{nombre}</strong>,</Quien>
                                <SubTitulo>Cree su nueva contraseña</SubTitulo>
                                <Row>
                                    <Col xs={12} md={12} lg={7} className="mx-auto text-center">
                                        <Input type="text" required name="password" value={persona.password} onChange={handleChange} placeholder={'Escriba su nueva contraseña'} />
                                    </Col>
                                    <Col xs={12} md={12} lg={7} className="mx-auto text-center">
                                        <Input type="text" required name="passwordVerification" value={persona.passwordVerification} onChange={handleChange} placeholder={'Confirme su nueva contraseña'} />
                                    </Col>
                                    <Col xs={12} md={12} className="text-center margin-5-mobile">
                                        <BotonEnviar type="submit">
                                            {
                                                (loading === true) ? (
                                                    <div className="spinner">
                                                        <div className="bounce1"></div>
                                                        <div className="bounce2"></div>
                                                        <div className="bounce3"></div>
                                                    </div>
                                                ) : 'Confirmar'
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
 
export default RecuperarClave;