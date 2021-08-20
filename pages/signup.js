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
// import intlTelInput from 'intl-tel-input';
// import IntlTelInput from "react-intl-tel-input";
// import "react-intl-tel-input/dist/main.css";
import {Paises} from '../PaisesInfo.js';

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

// const IntlTelInputPersonalizado = styled(IntlTelInput)`
//     background-color: var(--colorPrimario)!important;
//     color: white!important;
//     border-radius: 3rem!important;
//     font-size: 1.8rem!important;
//     border: 2px solid white!important;
//     padding: 1rem 1.5rem!important;
//     max-width: 100%!important;
//     width: 100%!important;
//     margin: 1rem 0!important;
//     /* font-weight: bold; */

//     &:focus {
//         outline: none!important;
//     }
    
//     &::placeholder {
//         color: #adadad;
//     }

//     @media (max-width: 991px){
//         margin-bottom: 1rem;
//     }

// `;

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

const Signup = ({t}) => {

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

    // const telInput = document.querySelector("#telefonoInput");
    // intlTelInput(telInput, {
    //     // any initialisation options go here
    // });


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

    // const handleChangeTelefono = e => {
    //     console.log(e);
    //     // setPersona({
    //     //     ...persona,
    //     //     [persona.telefono]: e.target.value
    //     // })
    // }

    
    const handleChangePrefijo = e => {
        setPersona({
            ...persona,
            prefijo: e.target.value
        })
    }

    const handleChangePaises = e => {
        setPersona({
            ...persona,
            pais: e.target.value
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
                AlertaSwal(t('Swal.Error'), t('Swal.TodosObligatorios'), 'error', 2500);
        } else if (persona.email !== persona.email2) {
            AlertaSwal(t('Swal.Error'), t('Swal.EmailsNoCoinciden'), 'error', 3000);
        } else if (persona.password !== persona.password2) {
            AlertaSwal(t('Swal.Error'), t('Swal.PassNoCoinciden'), 'error', 3000);
        } else {
            await clienteAxios.post('/usuarios/nuevo', persona)
                .then( async resp => {
                    if(resp.data.registro === 'false' || resp.data.registro === false) {
                        if (resp.data.e_name === 'SequelizeUniqueConstraintError') {
                            AlertaSwal(t('Swal.Error'), t('Swal.EmailYaRegistrado'), 'error', 3000);
                        } else {
                            AlertaSwal(t('Swal.Error'), t('Swal.NoPudimosCrearCuenta'), 'error', 3000);
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
                    AlertaSwal(t('Swal.Error'), t('Swal.NoPudimosCrearCuenta'), 'error', 3000);

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
            AlertaSwal(t('Swal.Error'), t('Swal.TodosObligatorios'), 'error', 3000);
        } else if (persona.email !== persona.email2) {
            AlertaSwal(t('Swal.Error'), t('Swal.EmailsNoCoinciden'), 'error', 3000);
        } else if (persona.password !== persona.password2) {
            AlertaSwal(t('Swal.Error'), t('Swal.PassNoCoinciden'), 'error', 3000);
        } else if (persona.password.length < 6) {
            AlertaSwal(t('Swal.Error'), t('Swal.Pass6'), 'error', 3000);
        } else {
            setEtapaSignUp(2);
        }
    }




    return (
        <>
            <Head>
                <title>{t('Signup.SEO.Titulo')}</title>
                <meta name="description" content={t('Signup.SEO.Descripcion')} />
                <meta name="keywords" content={t('Signup.SEO.PalabrasClave')} />
            </Head>
            <Layout>

                <General>
                    <Izq></Izq>
                    <Der>
                        <Container className="text-center pt-10">
                            <Titulo>{t('Signup.Titulo')}</Titulo>
                            <SubTitulo>{t('Signup.SubTitulo')}</SubTitulo>

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
                                                    <option value="Dr">{t('Prefijos.Dr')}.</option>
                                                    <option value="Dra">{t('Prefijos.Dra')}.</option>
                                                    <option value="Sr">{t('Prefijos.Sr')}.</option>
                                                    <option value="Sra">{t('Prefijos.Sra')}.</option>
                                                    <option value="Srta">{t('Prefijos.Srta')}.</option>
                                                    <option value="Ing">{t('Prefijos.Ing')}.</option>
                                                    <option value="Lic">{t('Prefijos.Lic')}.</option>
                                                </Select>
                                            </Col>
                                            <Col xs={12} sm={6} md={4}>
                                                <Input type="text" required name="nombre" value={persona.nombre} onChange={handleChange} placeholder={t('Formulario.Nombre')} />
                                            </Col>
                                            <Col xs={12} sm={6} md={4}>
                                                <Input type="text" required name="apellido" value={persona.apellido} onChange={handleChange} placeholder={t('Formulario.Apellido')} />
                                            </Col>
                                            
                                            <Col xs={12} sm={6} md={6}>
                                                <Input type="email"  name="email" value={persona.email} onChange={handleChange} placeholder={t('Formulario.Email')} />
                                            </Col>
                                            <Col xs={12} sm={6} md={6}>
                                                <Input className={persona.email !== persona.email2 ? 'border-grosor-5 border-red' : 'border-grosor-5 border-green'} type="email"  name="email2" value={persona.email2} onChange={handleChange} placeholder={t('Formulario.EmailConfirm')} />
                                            </Col>
                                            <Col xs={12} sm={6} md={6}>
                                                <Input className={persona.password.length < 6  ? 'border-grosor-5 border-red' : 'border-grosor-5 border-green'} type="password"  name="password" value={persona.password} onChange={handleChange} placeholder={t('Formulario.Password')} />
                                            </Col>
                                            <Col xs={12} sm={6} md={6}>
                                                <Input className={persona.password !== persona.password2 ? 'border-grosor-5 border-red' : 'border-grosor-5 border-green'} type="password"  name="password2" value={persona.password2} onChange={handleChange} placeholder={t('Formulario.PasswordConfirm')} />
                                            </Col>
                                            <Col xs={12} md={12} className="mt-4 justify-content-end" style={{display: 'flex'}}>
                                                <BotonEnviar onClick={() => irSiguienteForm()}>
                                                {t('Formulario.Siguiente')}
                                                </BotonEnviar>
                                            </Col>
                                            </>
    
                                        ) : (
                                            <>
                                            <Col xs={12} sm={6} md={4}>
                                                <Input type="text"  name="profesion" value={persona.profesion} onChange={handleChange} placeholder={t('Formulario.Profesion')} />
                                            </Col>
                                            <Col xs={12} sm={6} md={4}>
                                                {/* <IntlTelInput
                                                    preferredCountries={["ar", "br", "us"]}
                                                    containerClassName="intl-tel-input"
                                                    inputClassName="form-control input-tel input-phone"
                                                    style={{margin: '1rem 0!important', height: '100%!important'}}
                                                    name="telefono" 
                                                    fieldName="telefono"
                                                    value={persona.telefono}
                                                    onChange={handleChangeTelefono}
                                                    // onPhoneNumberChange={(valid, number, country) => {
                                                    //     isValid = valid;
                                                    // }}

                                                /> */}
                                                <Input type="tel"  name="telefono" value={persona.telefono} onChange={handleChange} placeholder={t('Formulario.Telefono')} id="telefonoInput" />
                                            </Col>
                                            <Col xs={12} sm={6} md={4}>
                                                <Select
                                                    onChange={(e) => handleChangePaises(e)}
                                                    value={persona.pais}
                                                    placeholder={t('Formulario.Pais')}
                                                >
                                                    <option disabled selected value="">{t('Formulario.Pais')}</option>
                                                    {
                                                        Paises.map(ps => (
                                                            <option key={ps.cioc} data-cod={ps.callingCodes[0]} value={ps.name}>{ps.name}</option>
                                                        ))
                                                    }
                                                </Select>
                                                {/* <Input className={persona.email !== persona.email2 ? 'border-grosor-5 border-red' : 'border-grosor-5 border-green'} type="email"  name="email2" value={persona.email2} onChange={handleChange} placeholder="Confirmá tu Email" /> */}
                                            </Col>

                                            <Col xs={12} sm={6} md={6}>
                                                <Input type="text"  name="cargo" value={persona.cargo} onChange={handleChange} placeholder={t('Formulario.Cargo')} />
                                            </Col>
                                            <Col xs={12} sm={6} md={6}>
                                                <Input type="text"  name="empresa" value={persona.empresa} onChange={handleChange} placeholder={t('Formulario.Empresa')} />
                                            </Col>
                                            <Col xs={12} md={12} className="mt-4 justify-content-between" style={{display: 'flex'}}>
                                                <BotonEnviar onClick={() => setEtapaSignUp(1)}>{t('Formulario.Volver')}</BotonEnviar>
                                                <BotonEnviar type="submit">
                                                    {
                                                        (loadingForm === true) ? (
                                                            <div className="spinner">
                                                                <div className="bounce1"></div>
                                                                <div className="bounce2"></div>
                                                                <div className="bounce3"></div>
                                                            </div>
                                                        ) : t('Formulario.Registrarme')
                                                    }
                                                </BotonEnviar>
                                            </Col>
                                            <p className="mt-5 text-center mx-auto w-100 normal-test">
                                                {t('Formulario.TYC.Uno')}<br/>{t('Formulario.TYC.Dos')}
                                                <Link href="/politicas-de-privacidad">
                                                    <a target="_blank">{t('Formulario.TYC.Tres')}</a>
                                                </Link>
                                                {t('Formulario.TYC.Cuatro')}
                                            </p>
                                            </>
                                        )
                                    }
                                    <div className="mt-4 w-100">
                                        <Link href="/login">
                                            <NoTengoCuenta className="normal-test">{t('Formulario.YaTengoCuenta')}</NoTengoCuenta>
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
 
Signup.with18nextTranslation = async () => ({
    namespacesRequired: ['auth'],
  });
   
  export default withTranslation('auth')(Signup);