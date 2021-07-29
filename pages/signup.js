import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Layout from '../components/general/Layout';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';
import {AlertaSwal} from '../helpers/helpers';
import clienteAxios from '../config/axios';
import { withTranslation } from '../i18n';
import { CircularProgress } from 'material-ui';
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
    border: 3px solid var(--colorPrimario);
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
    padding: 4rem;
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
    background-image: url('/img/bg-blood.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 40%;
    height: calc(100vh - 100px);
    @media (max-width: 768px){
        display: none;
    }
`;

const Der = styled.div`
    width: 100%;
    @media (min-width: 768px){
        width: 60%;
    }

`;

const NoTengoCuenta = styled.a`
    text-align: center;
    &:hover {
        color: var(--colorVioletaOscuro)
    }
`;

const Signup = () => {

    const router = useRouter();

    const [etapaSignUp, setEtapaSignUp] = useState(1);
    const [loadingForm, setLoadingForm] = useState(false);
    const [persona, setPersona] = useState({
        prefijo: 'Dr.',
        nombre: '',
        apellido: '',
        profesion: '',
        email: '',
        email2: '',
        password: '',
        password2: '',
        telefono: '',
        pais: '',
        cargo: '',
        empresa: ''
    })

    useEffect(() => {
        // if(localStorage.getItem('persona')) {
            // const persLS = JSON.parse(localStorage.getItem('persona'));
            // setPersona({ ...persona, persLS });
        // }
        if(localStorage.getItem('token-21')) {
            router.push('/');
        }
        // eslint-disable-next-line
    }, []);

    const handleChange = e => {
        setPersona({
            ...persona,
            [e.target.name]: e.target.value
        })
    }

    
    const handleChangePrefijo = e => {
        setPersona({
            ...persona,
            prefijo: e.target.value
        })
    }


    
    const enviarFormulario = async e => {
        e.preventDefault();
        setLoadingForm(true);
        if( persona.prefijo === '' ||
            persona.nombre === '' ||
            persona.apellido === '' ||
            persona.email === '' ||
            persona.email2 === '' ||
            persona.password === '' ||
            persona.password2 === '' ||
            persona.profesion === '' ||
            persona.telefono === '' ||
            persona.pais === '' ||
            persona.cargo === '' ||
            persona.empresa === '' ) {
                AlertaSwal('Error', 'Todos los campos son obligatorios', 'error', 2500);
        } else if (persona.email !== persona.email2) {
            AlertaSwal('Error', 'Los emails no coinciden', 'error', 3000);
        } else if (persona.password !== persona.password2) {
            AlertaSwal('Error', 'Las contraseñas no coindicen', 'error', 3000);
        } else {
            await clienteAxios.post('/usuarios/nuevo', persona)
                .then( async resp => {
                    if(resp.data.registro === 'false' || resp.data.registro === false) {
                        if (resp.data.e_name === 'SequelizeUniqueConstraintError') {
                            AlertaSwal('Error', 'Parece que su email ya se registró.', 'error', 3000);
                        } else {
                            AlertaSwal('Error', 'No pudimos crear su cuenta.', 'error', 3000);
                        }
                    } else {
                        await clienteAxios.post('/usuarios/login', {email: persona.email, password: persona.password})
                            .then(respuestaLogin => {
                                console.log(respuestaLogin)
                                if(respuestaLogin.data.token) {
                                    localStorage.setItem('token-21', respuestaLogin.data.token);
                                    localStorage.setItem('usuario', JSON.stringify(respuestaLogin.data.usuario));
                                    router.push('/');
                                }
                            })
                            .catch(errorLogin => {
                                router.push('/login');
                            })
                    }
                })
                .catch(error => {
                    console.log(error);
                    AlertaSwal('Error', 'No pudimos crear su cuenta.', 'error', 3000);

                })
        }
        setLoadingForm(false);
    }

    function irSiguienteForm() {
        if( persona.prefijo === '' ||
        persona.nombre === '' ||
        persona.apellido === '' ||
        persona.email === '' ||
        persona.email2 === '' ||
        persona.password === '' ||
        persona.password2 === '') {
            AlertaSwal('Error', 'Todos los campos son obligatorios.', 'error', 3000);
        } else if (persona.email !== persona.email2) {
            AlertaSwal('Error', 'Los emails no coinciden.', 'error', 3000);
        } else if (persona.password !== persona.password2) {
            AlertaSwal('Error', 'Las contraseñas no coinciden.', 'error', 3000);
        } else if (persona.password.length < 6) {
            AlertaSwal('Error', 'La contraseña debe tener al menos 6 caracteres.', 'error', 3000);
        } else {
            setEtapaSignUp(2);
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
                    <Izq></Izq>
                    <Der>
                        <Container className="text-center pt-10">
                            <Titulo>Regístrate en Latam Hospitals</Titulo>
                            <SubTitulo>Complete sus datos para una mejor experiencia.</SubTitulo>

                            <Formulario onSubmit={enviarFormulario}>
                                <Row>
                                    {
                                        (etapaSignUp === 1) ? (
                                            <>
                                            <Col xs={12} sm={12} md={4}>
                                                <Select
                                                    onChange={(e) => handleChangePrefijo(e)}
                                                    value={persona.prefijo}
                                                >
                                                    <option value="Dr">Dr.</option>
                                                    <option value="Dra">Dra.</option>
                                                    <option value="Sr">Sr.</option>
                                                    <option value="Sra">Sra.</option>
                                                    <option value="Srta">Srta.</option>
                                                    <option value="Ing">Ing.</option>
                                                    <option value="Lic">Lic.</option>
                                                </Select>
                                            </Col>
                                            <Col xs={12} sm={6} md={4}>
                                                <Input type="text" required name="nombre" value={persona.nombre} onChange={handleChange} placeholder="Nombre" />
                                            </Col>
                                            <Col xs={12} sm={6} md={4}>
                                                <Input type="text" required name="apellido" value={persona.apellido} onChange={handleChange} placeholder="Apellido" />
                                            </Col>
                                            
                                            <Col xs={12} sm={6} md={6}>
                                                <Input type="email"  name="email" value={persona.email} onChange={handleChange} placeholder="Email" />
                                            </Col>
                                            <Col xs={12} sm={6} md={6}>
                                                <Input className={persona.email !== persona.email2 ? 'border-grosor-5 border-red' : 'border-grosor-5 border-green'} type="email"  name="email2" value={persona.email2} onChange={handleChange} placeholder="Confirmá tu Email" />
                                            </Col>
                                            <Col xs={12} sm={6} md={6}>
                                                <Input className={persona.password.length < 6  ? 'border-grosor-5 border-red' : 'border-grosor-5 border-green'} type="password"  name="password" value={persona.password} onChange={handleChange} placeholder="Contraseña" />
                                            </Col>
                                            <Col xs={12} sm={6} md={6}>
                                                <Input className={persona.password !== persona.password2 ? 'border-grosor-5 border-red' : 'border-grosor-5 border-green'} type="password"  name="password2" value={persona.password2} onChange={handleChange} placeholder="Confirmá tu contraseña" />
                                            </Col>
                                            <Col xs={12} md={12} className="mt-4 justify-content-end" style={{display: 'flex'}}>
                                                <BotonEnviar onClick={() => irSiguienteForm()}>
                                                    Siguiente
                                                </BotonEnviar>
                                            </Col>
                                            </>
    
                                        ) : (
                                            <>
                                            <Col xs={12} sm={6} md={4}>
                                                <Input type="text"  name="profesion" value={persona.profesion} onChange={handleChange} placeholder="Profesión" />
                                            </Col>
                                            <Col xs={12} sm={6} md={4}>
                                                <Input type="tel"  name="telefono" value={persona.telefono} onChange={handleChange} placeholder="Teléfono" />
                                            </Col>
                                            <Col xs={12} sm={6} md={4}>
                                                <Input type="text"  name="pais" value={persona.pais} onChange={handleChange} placeholder="País" />
                                            </Col>
                                            <Col xs={12} sm={6} md={6}>
                                                <Input type="text"  name="cargo" value={persona.cargo} onChange={handleChange} placeholder="Cargo" />
                                            </Col>
                                            <Col xs={12} sm={6} md={6}>
                                                <Input type="text"  name="empresa" value={persona.empresa} onChange={handleChange} placeholder="Empresa" />
                                            </Col>
                                            <Col xs={12} md={12} className="mt-4 justify-content-between" style={{display: 'flex'}}>
                                                <BotonEnviar onClick={() => setEtapaSignUp(1)}>Volver</BotonEnviar>
                                                <BotonEnviar type="submit">
                                                    {
                                                        (loadingForm === true) ? (
                                                            <div className="spinner">
                                                                <div className="bounce1"></div>
                                                                <div className="bounce2"></div>
                                                                <div className="bounce3"></div>
                                                            </div>
                                                        ) : 'Registrarme' 
                                                    }
                                                </BotonEnviar>
                                            </Col>
                                            </>
                                        )
                                    }
                                    <div className="mt-5 w-100">
                                        <Link href="/login">
                                            <NoTengoCuenta className="normal-test">Ya tengo cuenta, quiero iniciar sesión.</NoTengoCuenta>
                                        </Link>
                                    </div>


                                </Row>
                            </Formulario>
                        </Container>

                    </Der>
                </General>
            </Layout>
            
        </>
    );
}
 
export default Signup;