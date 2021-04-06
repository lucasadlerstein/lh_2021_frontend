import React, {useEffect, useContext, useState} from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import {Container, Row, Col} from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Dia from './Dia';
import DiasSteper from './DiasSteper';
import agendaContext from '../../context/agendaContext';
import clienteAxios from '../../config/axios';
import {withTranslation} from '../../i18n';
import {AlertaSwal} from '../../helpers/helpers';

const BotonNavegar = styled.button`
    position: absolute;
    z-index: 500;
    width: 20;
    height: 20;
    cursor: pointer;
    border:none;
    background-color: transparent;
    transition: all .5s ease;
    img {
        width: 2rem;
    }
    &:focus {
        outline: none;
    }
    @media (min-width: 540px){
        width: 30;
        height: 30;
        img {
            width: 3rem;
        }

    }
`;

const ButtonNext = styled(BotonNavegar)`
    top: calc(50% - 3rem);
    right: -2.5rem;
    @media (min-width: 768px){
        right: 0;
    }
    &:hover {
        right: -10px;
    }
`;

const ButtonPrev = styled(BotonNavegar)`
    top: calc(50% - 3rem);
    left: -2.5rem;
    @media (min-width: 768px){
        left: 0;
    }
    img {
        transform: rotate(180deg);
    }
    &:hover {
        left: -10px;
    }
`;

const ConenedorAgenda = styled.div`
    margin: 0 auto;
    width: 90%;
    position: relative;
`;

const FondoPopUp = styled.div`
    z-index: 999;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(30px);
`;

const Input = styled.input`
    background-color: var(--colorSecundario);
    color: white;
    border-radius: 3rem;
    font-size: 1.8rem;
    border: none;
    padding: 1rem 2rem;
    margin-bottom: 3rem;

    &::placeholder {
        color: #a7a7a7;
    }

    &:focus {
        outline: none;
    }

    @media (max-width: 768px){
        margin: 1rem auto;
        display: block;
    }
`;

const BotonEnviar = styled.button`
    background-color: white;
    border: 2px solid var(--colorPrimario);
    color: var(--colorPrimario);
    font-size: 2.5rem;
    font-weight: bold;
    padding: 1rem 3rem;
    border-radius: 3rem;  
    margin-top: 2rem;
    transition: all .3s ease;
    text-align: center;

    &:focus {
        outline: none;
    }

    &:hover {
        padding: 1rem 5rem;
        border: 2px solid var(--colorPrimario);
    }

    @media (max-width: 768px){
        margin-top: 3rem;
    }
`;

const Formulario = styled.form`
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    max-height: 100%;
    background-color: white;
    border-radius: 1rem;
    padding: 7rem 2rem;
    overflow: scroll;
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
    @media (min-width: 1145px){
        max-width: 100rem;
    }
`;

const AgendaComponente = ({t}) => {

    const AgendaContext = useContext(agendaContext);
    const { dia, diaSiguiente, diaAnterior } = AgendaContext;

    const [eventos, setEventos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [popUpSuscripcion, setPopUpSuscripcion] = useState(false);
    const [persona, setPersona] = useState({
        nombre: '',
        apellido: '',
        email: '',
        profesion: '',
    });
    const [enviando, setEnviando] = useState(false);

    useEffect(() => {
        async function traerEventos() {
            try {
                const respuesta = await clienteAxios.get('/charlas/agenda');
                const ordenado = respuesta.data.resp.sort(function(a, b){
                    if(a.hora < b.hora) return -1;
                    if(a.hora > b.hora) return 1;
                })
                setEventos(ordenado);
                setCargando(false);                    
            } catch (error) {
                
            }
        }
        function chequearSuscripcion() {
            if(!(localStorage.getItem('suscripto'))) {
                setTimeout(() => {
                    setPopUpSuscripcion(true);
                }, 10000);
            }
        }
        function chequearSuscripcionExitosa() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const suscripto = urlParams.get('suscripto');
            if(suscripto === 'exito') {
                AlertaSwal('Excelente', 'Suscripción realizada con éxito', 'success', 1500);
            }
            setTimeout(() => {
                history.replaceState && history.replaceState(
                    null, '', location.pathname + location.search.replace(/[\?&]suscripto=[^&]+/, '').replace(/^&/, '?')
                );
            }, 1500);
        }
        traerEventos();
        chequearSuscripcion();
        chequearSuscripcionExitosa();
        // eslint-disable-next-line
    }, [])

    function clickFlecha(tipo) {
        if(tipo === 'sig' && dia < 9) {
            diaSiguiente();
        } else if (tipo === 'ant' && dia >= 1) {
            diaAnterior();
        }
    }

    const handleChange = e => {
        setPersona({
            ...persona,
            [e.target.name]: e.target.value
        })
    }

    const enviarFormulario = async e => {
        e.preventDefault();

        // Validar
        if(persona.nombre === '' || persona.apellido === '' || persona.email === '') {
            AlertaSwal('Error', 'Todos los campos son obligatorios', 'error', 3000);
            return;
        }

        setEnviando(true);

        // Guardar en LS
        localStorage.setItem('persona', JSON.stringify(persona));
        localStorage.setItem('suscripto', true);
        
        // Guardar en BDD

        await clienteAxios.post('/news', persona)
            .then(resp => {
                if(resp.data.suscripto === true) {
                    window.location.href = "?suscripto=exito";
                    setPopUpSuscripcion(false);
                } else if (resp.data.error === "SequelizeUniqueConstraintError") {
                    AlertaSwal('', 'Ya te has suscripto previamente', 'warning', 2500);
                    setPopUpSuscripcion(false);
                    localStorage.setItem('suscripto', true);
                } else {
                    AlertaSwal('Error', 'Vuelve a intentarlo en unos minutos', 'error', 2500);
                    setPopUpSuscripcion(false);
                }
            })
            .catch(error => {
                AlertaSwal('Error', 'No pudimos suscribirte', 'error', 2500);
                setPopUpSuscripcion(false);

            })
        setEnviando(false);
    }

    return (
        <>
            <section id="agenda" className="py-10">
                <Container>
                    <DiasSteper />
                    <ConenedorAgenda>
                        <ButtonPrev onClick={() => clickFlecha('ant')}>
                            <img src="img/iconos/flecha.png" alt="flecha anterior" />
                        </ButtonPrev>
                        {
                            (cargando === true) ? (
                                <div className="spinner my-5">
                                    <div className="bounce1"></div>
                                    <div className="bounce2"></div>
                                    <div className="bounce3"></div>
                                </div>
                            ) : (
                                <Dia diaProp={dia} eventos={eventos} />
                            )
                        }
                        <ButtonNext onClick={() => clickFlecha('sig')}>
                            <img src="img/iconos/flecha.png" alt="flecha siguiente" />
                        </ButtonNext>
                    </ConenedorAgenda>
                </Container>
                {
                    (popUpSuscripcion === true) ? (
                        <FondoPopUp>
                            <Formulario onSubmit={enviarFormulario} className="container">
                                <h2 className="mb-5 text-center">Para acceder a la agenda y anotarte en las actividades tienes que suscribirte.</h2>
                                <Row>
                                    <Col xs={12} md={6} className="text-right">
                                        <Input type="text" required name="nombre" value={persona.nombre} onChange={handleChange} placeholder={t('Newsletter.Nombre')} />
                                    </Col>
                                    <Col xs={12} md={6} className="text-left">
                                        <Input type="text" required name="apellido" value={persona.apellido} onChange={handleChange} placeholder={t('Newsletter.Apellido')} />
                                    </Col>
                                    <Col xs={12} md={6} className="text-right">
                                        <Input type="email" required name="email" value={persona.email} onChange={handleChange} placeholder={t('Newsletter.Email')} />
                                    </Col>

                                    <Col xs={12} md={6} className="text-left">
                                        <Input type="text" required name="profesion" value={persona.profesion} onChange={handleChange} placeholder={t('Newsletter.Profesion')} />
                                    </Col>

                                    <Col xs={12} md={12} className="text-center">
                                        <BotonEnviar type="submit" className="text-center">
                                            {
                                                (enviando === true) ? (
                                                    <div className="spinner">
                                                        <div className="bounce1"></div>
                                                        <div className="bounce2"></div>
                                                        <div className="bounce3"></div>
                                                    </div>
                                                ) : t('Newsletter.Boton') 
                                            }
                                        </BotonEnviar>
                                    </Col>
                                </Row>
                            </Formulario>
                        </FondoPopUp>
                    ) : null
                }
            </section>
        </>
    );
}
 
export default withTranslation('common')(AgendaComponente);