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
import { useRouter } from 'next/router'


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

const Input = styled.input`
    background-color: var(--colorPrimario);
    color: white;
    border-radius: 3rem;
    font-size: 1.8rem;
    border: 2px solid white;
    padding: 1rem 1.5rem;
    max-width: 100%;
    width: 100%;
    margin: 1rem 0;
    /* font-weight: bold; */

    &:focus {
        outline: none;
    }
    
    &::placeholder {
        color: #adadad;
    }

    @media (max-width: 991px){
        margin-bottom: 1rem;
    }
`;

const BotonEnviar = styled.button`
    background-color: white;
    color: var(--colorPrimario);
    font-size: 2rem;
    font-weight: bold;
    border: 3px solid  var(--colorPrimario);
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
    padding: 2rem;
    margin: 0 auto;
    @media (max-width: 768px){
        margin-bottom: 3rem;
    }
`;

const Select = styled.select`
    background-color: var(--colorPrimario);
    color: white;
    border-radius: 3rem;
    font-size: 1.8rem;
    border: 2px solid white;
    padding: 1rem 1.5rem;
    max-width: 100%;
    width: 100%;
    margin: 1rem 0;
    font-weight: bold;

    &:focus {
        outline: none;
    }

    @media (max-width: 991px){
        margin-bottom: 1rem;
    }

`;

const General = styled.div`
    display: flex;
`;

const Izq = styled.div`
    background-image: url('/img/bg-brain.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 50%;
    /* height: calc(100vh - 100px); */
    height: initial;
    @media (max-width: 768px){
        display: none;
    }
`;

const Der = styled.div`
    width: 100%;
    @media (min-width: 768px){
        width: 50%;
    }

`;

const NoTengoCuenta = styled.a`
    &:hover {
        color: var(--colorVioletaOscuro)
    }
`;

const BtnsLogin = styled.div`
    margin-top: 2rem;
    display: grid;
    a {
        margin-bottom: 1rem;
    }
`;

const Login = () => {

    const router = useRouter();

    const [loadingForm, setLoadingForm] = useState(false);
    const [persona, setPersona] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => {
        setPersona({
            ...persona,
            [e.target.name]: e.target.value
        })
    }
    
    const enviarFormulario = async e => {
        e.preventDefault();
        setLoadingForm(true);

        if(persona.email === '' || persona.password === '') {
            AlertaSwal('Error', 'Debe ingresar email y contraseña.', 'error', 3000);
        } else {
            await clienteAxios.post('/usuarios/login', persona)
                .then(respuestaLogin => {
                    // console.log(respuestaLogin)
                    if(respuestaLogin.data.token) {
                        localStorage.setItem('token-21', respuestaLogin.data.token);
                        localStorage.setItem('usuario', JSON.stringify(respuestaLogin.data.usuario));
                        router.push('/');
                    }
                })
                .catch(errorLogin => {
                    // console.log(errorLogin);
                    if(errorLogin.error === 'WrongPassword' || errorLogin.e_name === 'WrongPassword') {
                        AlertaSwal('Error', 'El email y/o contraseña no son correctos.', 'error', 3000);
                    } else {
                        AlertaSwal('Error', 'No pudimos iniciar su sesión.', 'error', 3000);
                    }
                })

        }
        setLoadingForm(false);
    }

    async function olvidePass() {

        if(persona.email === '' || !persona.email.includes('@')) {
            AlertaSwal('Atención', 'Escriba su email y luego vuelva a hacer clic para recuperar la contraseña.', 'warning', 5000);
        } else {
            await clienteAxios.post('/usuarios/recuperar-password', persona)
                .then(resp => {
                    AlertaSwal('Listo', 'Recibirás instrucciones a tu email para cambiar la contraseña.', 'success', 5000);
                })
                .catch(err => {
                    // console.log(err)
                })
        }

    } 




    return (
        <>
            <Head>
                {/* <title>{t('Contacto.SEO.Titulo')}</title> */}
                {/* <meta name="description" content={t('Contacto.SEO.Descripcion')} /> */}
                {/* <meta name="keywords" content={t('Contacto.SEO.PalabrasClave')} /> */}
            </Head>
            <Layout>

                <General>
                    <Der>
                        <Container className="text-center py-10">
                            <Titulo>Inicia sesión en Latam Hospitals</Titulo>
                            <SubTitulo>¿listo para más Latam Hospitals?</SubTitulo>

                            <Formulario onSubmit={enviarFormulario} className="text-center">
                                <Row>
                                    <Col xs={12} sm={12} md={10} lg={8} className="mx-auto">
                                        <Input type="email"  name="email" value={persona.email} onChange={handleChange} placeholder="Email" />
                                    </Col>
                                    <Col xs={12} sm={12} md={10} lg={8} className="mx-auto">
                                        <Input type="password"  name="password" value={persona.password} onChange={handleChange} placeholder="Contraseña" />
                                    </Col>
                                    <Col xs={12} md={12} className="mx-auto text-center mt-3">
                                        <BotonEnviar type="submit">
                                            {
                                                (loadingForm === true) ? (
                                                    <div className="spinner">
                                                        <div className="bounce1"></div>
                                                        <div className="bounce2"></div>
                                                        <div className="bounce3"></div>
                                                    </div>
                                                ) : 'Iniciar sesión'
                                            }
                                        </BotonEnviar>
                                        <BtnsLogin>
                                            <Link href="/signup">
                                                <NoTengoCuenta className="normal-test">No tengo cuenta, quiero registrarme.</NoTengoCuenta>
                                            </Link>
                                            <NoTengoCuenta className="normal-test" onClick={() => olvidePass()}>Olvidé mi contraseña.</NoTengoCuenta>
                                        </BtnsLogin>
                                    </Col>
                                </Row>
                            </Formulario>
                        </Container>

                    </Der>
                    <Izq></Izq>

                </General>
            </Layout>
            
        </>
    );
}
 
export default Login;