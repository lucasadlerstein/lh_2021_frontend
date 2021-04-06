import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {Container, Row, Col} from 'reactstrap';
import clienteAxios from '../../config/axios';
import {withTranslation} from '../../i18n';
import {AlertaSwal} from '../../helpers/helpers';

const Fondo = styled.section`
    background-image: url('img/fondo-banners.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

const Input = styled.input`
    background-color: var(--colorPrimario);
    color: #d1d1d1;
    border-radius: 3rem;
    font-size: 1.8rem;
    border: none;
    padding: 1rem 1.5rem;
    max-width: 100%;

    &:focus {
        outline: none;
    }

    @media (max-width: 991px){
        margin-bottom: 1rem;
    }
`;

const BotonEnviar = styled.button`
    background-color: white;
    color: var(--colorPrimario);
    font-size: 2.5rem;
    font-weight: bold;
    border: none;
    padding: 1rem 3rem;
    border-radius: 3rem;  
    margin-top: 5rem;
    transition: all .3s ease;

    &:focus {
        outline: none;
    }

    &:hover {
        padding: 1rem 5rem;
    }

    @media (max-width: 768px){
        margin-top: 3rem;
    }
`;

const Formulario = styled.form`
    margin: 5rem auto 0 auto;
    @media (min-width: 991px){
        width: 95%;
    }
`;

const Newsletter = ({t}) => {

    const [persona, setPersona] = useState({
        nombre: '',
        apellido: '',
        email: '',
        profesion: ''
    });

    useEffect(() => { 
        const chequearSuscripcion = async () => {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const suscripto = urlParams.get('suscripto');
            if(suscripto === 'exito') {
                AlertaSwal('Excelente', 'Suscripto con éxito', 'success', 1500);
            }
            setTimeout(() => {
                history.replaceState && history.replaceState(
                    null, '', location.pathname + location.search.replace(/[\?&]suscripto=[^&]+/, '').replace(/^&/, '?')
                );
            }, 1500);
        }
        chequearSuscripcion();

        if(localStorage.getItem('persona')) {
            setPersona(JSON.parse(localStorage.getItem('persona')))
        }
        // eslint-disable-next-line
    }, []);

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
            AlertaSwal('Error', 'Todos los campos son obligatorios', 'error', 2500);
            return;
        }

        // Guardar en LS
        localStorage.setItem('persona', JSON.stringify(persona));
        localStorage.setItem('suscripto', true);

        // Guardar en BDD
        await clienteAxios.post('/news', persona)
            .then(resp => {
                if(resp.data.suscripto === true) {
                    window.location.href = '?suscripto=exito';
                } else if (resp.data.error === "SequelizeUniqueConstraintError") {
                    AlertaSwal('', 'Ya te has suscripto previamente', 'warning', 2500);
                } else {
                    AlertaSwal('Error', 'Vuelve a intentarlo en unos minutos', 'error', 2500);
                }
            })
            .catch(error => {
                AlertaSwal('Error', 'No pudimos suscribirte', 'error', 2500);
            })

    }

    return (
        <Fondo id="newsletter">
            <Container className="py-5r text-center">
                <h2 className="text-white">{t('Newsletter.Titulo.1')}<br/>{t('Newsletter.Titulo.2')}</h2>
                <Formulario onSubmit={enviarFormulario}>
                    <Row>
                        <Col xs={12} md={6} lg={3}>
                            <Input type="text" required name="nombre" value={persona.nombre} onChange={handleChange} placeholder={t('Newsletter.Nombre')} />
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <Input type="text" required name="apellido" value={persona.apellido} onChange={handleChange} placeholder={t('Newsletter.Apellido')} />
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <Input type="email"  name="email" value={persona.email} onChange={handleChange} placeholder={t('Newsletter.Email')} />
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <Input type="text"  name="profesion" value={persona.profesion} onChange={handleChange} placeholder={t('Newsletter.Profesion')} />
                        </Col>
                        <Col xs={12} md={12} lg={12}>
                            <BotonEnviar type="submit">{t('Newsletter.Boton')}</BotonEnviar>
                        </Col>
                    </Row>
                </Formulario>
            </Container>
        </Fondo>
    );    
}
 
export default withTranslation('common')(Newsletter);