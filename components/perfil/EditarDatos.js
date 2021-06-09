import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';


const TituloBox = styled.div`
    display: flex;
`;

const Titulo = styled.h2`
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: bold;
    color: var(--colorPrimario);
    margin-bottom: 1.5rem;
    margin-left: 2rem;
`;

const SubTitulo = styled.p`
    font-size: 2.5rem;
    color: var(--colorPrimario);
    margin: 1rem 0 0 0;
`;

const Input = styled.input`
    background-color: white;
    color: var(--colorPrimario);
    border-radius: 3rem;
    font-size: 1.8rem;
    border: 2px solid var(--colorPrimario);
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

const BotonEnviar = styled.button`
    background-color: var(--colorPrimario);
    color: white;
    font-size: 1.8rem;
    font-weight: bold;
    border: none;
    /* padding: 1.2rem 2.5rem; */
    display: block;
    width: 100%;
    height: 5rem;
    border-radius: 3rem;  
    margin: 1rem 0;
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
    margin: 0 auto;
    @media (min-width: 991px){
        width: 95%;
    }
`;

const Select = styled.select`
    background-color: white;
    color: var(--colorPrimario);
    border-radius: 3rem;
    font-size: 1.8rem;
    border: 2px solid var(--colorPrimario);
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

const EditarDatos = () => {
    
    const [loadingForm, setLoadingForm] = useState(false);
    const [persona, setPersona] = useState({
        prefijo: '',
        nombre: '',
        apellido: '',
        profesion: '',
        email: '',
        celular: '',
        pais: '',
        cargo: '',
        empresa: ''
    })

    const handleChange = e => {
        setPersona({
            ...persona,
            [e.target.name]: e.target.value
        })
    }

    const enviarFormulario = async e => {
        e.preventDefault();
        return;

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

    const handleChangePrefijo = e => {
        setPersona({
            ...persona,
            prefijo: e.target.value
        })
    }


    return (
        <>
            <Container className="mx-auto py-5">
                <TituloBox>          
                    <svg fill="var(--colorPrimario)" height="4.9rem" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g><path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z"/><polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  "/><polygon points="20.273,37.028 18.642,46.28 27.913,44.654  "/><path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z"/></g></svg> 
                    <Titulo>Editar mis datos</Titulo>
                </TituloBox>
                <Formulario onSubmit={enviarFormulario}>
                    <Row>
                        <Col xs={12} sm={12} md={3} lg={2}>
                            <Select
                                onChange={(e) => handleChangePrefijo(e)}
                                value={persona.prefijo}
                            >
                                <option value="dr">Dr.</option>
                                <option value="dra">Dra.</option>
                            </Select>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <Input type="text" required name="nombre" value={persona.nombre} onChange={handleChange} placeholder="Nombre" />
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <Input type="text" required name="apellido" value={persona.apellido} onChange={handleChange} placeholder="Apellido" />
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <Input type="text"  name="profesion" value={persona.profesion} onChange={handleChange} placeholder="Profesión" />
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Input type="email"  name="email" value={persona.email} onChange={handleChange} placeholder="Email" />
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <Input type="tel"  name="celular" value={persona.celular} onChange={handleChange} placeholder="Teléfono" />
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Input type="text"  name="pais" value={persona.pais} onChange={handleChange} placeholder="País" />
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <Input type="text"  name="cargo" value={persona.cargo} onChange={handleChange} placeholder="Cargo" />
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Input type="text"  name="empresa" value={persona.empresa} onChange={handleChange} placeholder="Empresa" />
                        </Col>
                        <Col xs={12} md={4}>
                            <BotonEnviar type="submit">
                                {
                                    (loadingForm === true) ? (
                                        <div class="spinner">
                                            <div class="bounce1"></div>
                                            <div class="bounce2"></div>
                                            <div class="bounce3"></div>
                                        </div>
                                    ) : 'Guardar cambios' 
                                }
                            </BotonEnviar>
                        </Col>
                    </Row>
                </Formulario>

                
            </Container>
        </>
    );
}
 
export default EditarDatos;