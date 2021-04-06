import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {Container, Row, Col} from 'reactstrap';
import {withTranslation} from '../../i18n';
import {AlertaSwal} from '../../helpers/helpers';
import clienteAxios from '../../config/axios';

const Fondo = styled.div`
    background-color: var(--colorPrimario);
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
    margin-top: 2rem;
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
        width: 75%;
    }
`;


const Inscripcion = ({id, charla, titulo, dia, inscriptos, zoom_link, t}) => {

    const [persona, setPersona] = useState({
        charla: id,
        nombre: '',
        apellido: '',
        pais: '',
        email: '',
        celular: '',
        cargo: '',
        institucion: '',
    });
    const [enviando, setEnviando] = useState(false);

    useEffect(() => {
        const chequearInscripcion = async () => {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const inscripto = urlParams.get('inscripto');
            if(inscripto === 'exito') {
                AlertaSwal('Excelente', 'Inscripto con éxito', 'success', 1500);
            }
            setTimeout(() => {
                history.replaceState && history.replaceState(
                    null, '', location.pathname + location.search.replace(/[\?&]inscripto=[^&]+/, '').replace(/^&/, '?')
                );
            }, 1500);
        }
        chequearInscripcion();

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
        persona.charla = id;
        persona.nombre_charla = titulo;
        persona.dia_charla = dia;
        persona.inscriptos = inscriptos;
        persona.zoom_link = zoom_link;

        // Validar
        if(persona.nombre === '' || persona.apellido === '' || persona.email === '') {
            AlertaSwal('Error', 'Todos los campos son obligatorios', 'error', 3000);
            return;
        }

        setEnviando(true);

        // Guardar en LS
        localStorage.setItem('persona', JSON.stringify(persona));
        
        // Guardar en BDD

        try {
            const guardarDB = await clienteAxios.post('/inscripciones/', persona);
            if(guardarDB.data.inscripto === true) {
                window.location.href = `?inscripto=exito`;
            } else {
                AlertaSwal('Error', 'No pudimos inscribirte', 'error', 3000);
            }
            setEnviando(false);
        } catch (error) {
            AlertaSwal('Error', 'No pudimos inscribirte', 'error', 3000);
            setEnviando(false);
        }
    }


    return ( 
        <Fondo className="py-10" id="inscripcion">
            <Container className="text-center">
                <h2 className="text-white">{t('Charla.Inscripcion.Titulo')}<br/>"{charla}"</h2>
                <Formulario onSubmit={enviarFormulario}>
                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <Input type="text" required name="nombre" value={persona.nombre} onChange={handleChange} placeholder={t('Charla.Inscripcion.Nombre')} />
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Input type="text" required name="apellido" value={persona.apellido} onChange={handleChange} placeholder={t('Charla.Inscripcion.Apellido')} />
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Input type="text" required name="pais" value={persona.pais} onChange={handleChange} placeholder={t('Charla.Inscripcion.Pais')} />
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Input type="email" required name="email" value={persona.email} onChange={handleChange} placeholder={t('Charla.Inscripcion.Email')} />
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Input type="tel" required name="celular" value={persona.celular} onChange={handleChange} placeholder={t('Charla.Inscripcion.Celular')} />
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Input type="text" required name="cargo" value={persona.cargo} onChange={handleChange} placeholder={t('Charla.Inscripcion.Cargo')} />
                        </Col>
                        <Col xs={12} md={12}>
                            <Input type="text" required name="institucion" value={persona.institucion} onChange={handleChange} placeholder={t('Charla.Inscripcion.Institucion')} />
                        </Col>
                        <Col xs={12} md={12}>
                            <BotonEnviar type="submit">
                                {
                                    (enviando === true) ? (
                                        <div className="spinner">
                                            <div className="bounce1"></div>
                                            <div className="bounce2"></div>
                                            <div className="bounce3"></div>
                                        </div>
                                    ) : t('Charla.Inscripcion.Boton') 
                                }                            
                            </BotonEnviar>
                        </Col>
                    </Row>
                </Formulario>
            </Container>
        </Fondo>
    );
}
 
export default withTranslation('charla')(Inscripcion);