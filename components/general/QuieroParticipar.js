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
    width: 100%;
    margin: 1rem 0;

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
    textarea {
        background-color: var(--colorPrimario);
        color: #d1d1d1;
        border-radius: 3rem;
        font-size: 1.8rem;
        border: none;
        padding: 1rem 1.5rem;
        max-width: 100%;
        width: 100%;
        margin: 1rem 0;

        &:focus {
            outline: none;
        }

        @media (max-width: 991px){
            margin-bottom: 1rem;
        }
    }
`;

const QuieroParticipar = ({t}) => {

    const [loadingEmpresa, setLoadingEmpresa] = useState(false);
    const [persona, setPersona] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        empresa: '',
        cargo: '',
        pais: '',
        mensaje: ''
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
            setPersona({
                ...persona,
                mensaje: ''
            })
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

        setLoadingEmpresa(true);

        // Validar
        if(persona.nombre === '' || persona.apellido === '' || persona.email === '' || persona.telefono === '' || persona.empresa === '' || persona.cargo === '' || persona.pais === '' || persona.mensaje === '') {
            AlertaSwal('Error', 'Todos los campos son obligatorios', 'error', 2500);
            return;
        }

        // Guardar en LS
        localStorage.setItem('persona', JSON.stringify(persona));
        // localStorage.setItem('suscripto', true);

        const datosContacto = {
            empresa: persona.empresa,
            rubro: persona.cargo,
            pais: persona.pais,
            nombre: `${persona.nombre} ${persona.apellido}: ${persona.telefono}`,
            asunto: 'Participar de Latam Hospitals',
            email: persona.email,
            mensaje: persona.mensaje
        }

        // TODO: ENVIAR DATOS.
        await clienteAxios.post('contacto/empresa', datosContacto)
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
        <Fondo id="quiero-participar">
            <Container className="py-5r text-center">
                <h2 className="text-white">¿Quieres que tu empresa<br />participe de la edición 2021?<br/>Ponte en contacto con nosotros.</h2>
                <Formulario onSubmit={enviarFormulario}>
                    <Row>
                        <Col xs={12} md={6} lg={3}>
                            <Input type="text" required name="nombre" value={persona.nombre} onChange={handleChange} placeholder="Nombre" />
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <Input type="text" required name="apellido" value={persona.apellido} onChange={handleChange} placeholder="Apellido" />
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <Input type="email"  name="email" value={persona.email} onChange={handleChange} placeholder="Email" />
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <Input type="tel"  name="telefono" value={persona.telefono} onChange={handleChange} placeholder="Teléfono" />
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Input type="text"  name="empresa" value={persona.empresa} onChange={handleChange} placeholder="Empresa" />
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Input type="text"  name="cargo" value={persona.cargo} onChange={handleChange} placeholder="Cargo" />
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Input type="text"  name="pais" value={persona.pais} onChange={handleChange} placeholder="País" />
                        </Col>
                        <Col xs={12} md={6} lg={12}>
                            <textarea name="mensaje" value={persona.mensaje} onChange={handleChange} placeholder="Mensaje"></textarea>
                        </Col>
                        <Col xs={12} md={12} lg={12}>
                            <BotonEnviar type="submit">
                                {
                                    (loadingEmpresa === true) ? (
                                        <div class="spinner">
                                            <div class="bounce1"></div>
                                            <div class="bounce2"></div>
                                            <div class="bounce3"></div>
                                        </div>
                                    ) : 'Quiero participar' 
                                }
                            </BotonEnviar>
                        </Col>
                    </Row>
                </Formulario>
            </Container>
        </Fondo>
    );    
}
 
export default withTranslation('common')(QuieroParticipar);