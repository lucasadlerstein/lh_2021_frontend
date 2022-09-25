import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {Row, Col} from 'reactstrap';
import Link from 'next/link';
import {withTranslation} from '../../i18n';
import {AlertaSwal, getLocationAndTimeZone} from '../../helpers/helpers';
import clienteAxios from '../../config/axios';

const Item = styled.div`
    border-top: 1px solid var(--colorPrimario);
    padding: 2rem 0;
    text-align: center;
    &:last-of-type {
        border-bottom: 1px solid var(--colorPrimario);
    }
`;

const Hora = styled.p`
    font-weight: bold;
    color: var(--colorPrimario);
    font-size: 2.5rem;
    margin-top: 2rem;
    span {
        font-weight: 300;
        font-size: 1.8rem;
    }
    @media (max-width: 540px){
        text-align: center;
    }
`;

const Logo = styled.img`
    padding: 1rem;
`;

const FotoOrador = styled.div`
    text-align: center;
    @media (min-width: 540px){
        text-align: left;
    }
    img {
        height: 8rem;
        width: 8rem;
        border-radius: 100%;
        object-fit: cover;    
    }
`;

const Titulo = styled.h4`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: white;
    @media (max-width: 540px){
        margin-top: 2rem;
        text-align: center;
    }
`;

const Orador = styled.p`
    font-size: 2.5rem;
    margin: 0;
    @media (max-width: 540px){
        text-align: center;
    }
    color: white;

`;

const BotonInscripcion = styled.button`
    border-color: transparent;
    min-width: 10rem;
    width: 100%;
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
        margin-bottom: 1rem;
        max-width: 95%;
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
    max-height: 100%;
    background-color: white;
    border-radius: 1rem;
    padding: 5rem;

    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    overflow: scroll;
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
    
    @media (min-width: 991px){
        margin: auto;
    }
    @media (min-width: 1145px){
        max-width: 96rem;
    }
`;

const BotonCerrar = styled.button`
    position: fixed;
    top: 0;
    right: 1rem;
    background-color: transparent;
    font-size: 2.5rem;
    border-radius: 5rem;
    padding: 1rem;
    border: none;
    transition: all .5s ease;
    &:hover {
        transform: rotate(360deg);
    }
    &:focus {
        outline: none;
    }
    @media (min-width: 991px){
        top: 1rem;
    }
`;

const RowPersonalizada = styled(Row)`
    border: 3px solid var(--colorPrimario);
    border-radius: 2rem;
    overflow: hidden;
`;

const ColumnaInfoPremium = styled(Col)`
    background-color: var(--colorPrimario);
    padding: 2rem;
`;

const EventoIndividualPremium = ({t, evento}) => {
    const [diferenciaHoraria, setDiferenciaHoraria] = useState(0);
    const [codigoPais, setCodigoPais] = useState('AR');
    const [inscribirme, setInscribirme] = useState(false);
    const [persona, setPersona] = useState({
        charla: evento.id,
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

        async function chequearZonaHoraria() {
            if(localStorage.getItem('pais-lh')) {
              const localPais = JSON.parse(localStorage.getItem('pais-lh'));
              const resultadoHora = getLocationAndTimeZone('12:00:00', localPais.localizacion, localPais.codigo);
                setDiferenciaHoraria(resultadoHora.obj.diferencia);
                setCodigoPais(resultadoHora.obj.codigo);
            } else {
              try {
                await axios('https://api.ipgeolocation.io/ipgeo?apiKey=9c394e1f6cb745b88cb87a2dafad9b5e')
                  .then(resp => {
                    const resultadoHora = getLocationAndTimeZone('12:00:00', resp.data.country_name, resp.data.country_code2);
                    setDiferenciaHoraria(resultadoHora.obj.diferencia);
                    setCodigoPais(resultadoHora.obj.codigo);
                    localStorage.setItem('pais-lh', JSON.stringify(resultadoHora.obj));
                  })
              } catch (error) {
                console.log(error);
              }
            }
          }
          chequearZonaHoraria();
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
        persona.charla = evento.id;
        persona.nombre_charla = evento.es_titulo;
        persona.dia_charla = evento.fecha;
        persona.inscriptos = evento.inscriptos;
        persona.zoom_link = evento.zoom_link;

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
                window.location.href = `?inscripto=exito&charla?${evento.slug}`;
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
        <Item>
            {
                (inscribirme === true) ? (
                    <>
                        <FondoPopUp>
                        <Formulario onSubmit={enviarFormulario} className="container">
                            <h2 className="mb-5"><span>{t('Charla.Inscripcion.Titulo')}</span> "{evento.es_titulo}"</h2>
                            <BotonCerrar onClick={() => setInscribirme(false)}>X</BotonCerrar>
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
                        </FondoPopUp>
                    </>
                ) : null
            }
            <RowPersonalizada className="evento-individual">
                <Col xs={12} lg={3} className="text-left"> 
                <Hora>{
                    (diferenciaHoraria === 0) ? (
                        `${evento.hora.slice(0, -3)}hs`
                    ) : (
                        (diferenciaHoraria === -1) ? (
                            (Number(evento.hora.slice(0,2)) - 1) + evento.hora.slice(2,5)
                        ) : (
                            (diferenciaHoraria === -2) ? (
                                (Number(evento.hora.slice(0,2)) - 2) + evento.hora.slice(2,5)
                            ) : (
                                (diferenciaHoraria === -3) ? (
                                    (Number(evento.hora.slice(0,2)) - 3) + evento.hora.slice(2,5)
                                ) : (
                                    (diferenciaHoraria === 4) ? (
                                        (Number(evento.hora.slice(0,2)) + 4) + evento.hora.slice(2,5)
                                    ) : (
                                        `${evento.hora.slice(0, -3)}hs`
                                    )
                                )
                            )
                        )
                    )
                } <span>{`(${codigoPais})`}</span></Hora>
                    {
                        (evento.logo_empresa === null || evento.logo_empresa === '') ? 
                        (
                            (evento.orador_imagen === null || evento.orador_imagen === '') ? null : (
                                <FotoOrador>
                                    <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/static/${evento.orador_imagen}`} alt={evento.orador_nombre + ' ' + evento.orador_apellido} />
                                    {
                                        (evento.dos_orador_imagen === null || evento.dos_orador_imagen === '') ? null : (
                                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/static/${evento.dos_orador_imagen}`} className="m-3" alt={evento.dos_orador_nombre + ' ' + evento.dos_orador_apellido} />
                                        )
                                    }
                                    {
                                        (evento.tres_orador_imagen === null || evento.tres_orador_imagen === '') ? null : (
                                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/static/${evento.tres_orador_imagen}`} alt={evento.tres_orador_nombre + ' ' + evento.tres_orador_apellido} />
                                        )
                                    }
                                    {
                                        (evento.cuatro_orador_imagen === null || evento.cuatro_orador_imagen === '') ? null : (
                                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/static/${evento.cuatro_orador_imagen}`} className="m-3" alt={evento.cuatro_orador_nombre + ' ' + evento.cuatro_orador_apellido} />
                                        )
                                    }
                                </FotoOrador>
                            )
                            
                            
                        ) : (
                            <Logo src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/static/${evento.logo_empresa}`} alt={evento.nombre_empresa} />
                        )
                    }
                </Col>
                <ColumnaInfoPremium xs={12} lg={6} className="text-left">
                    <Titulo>{evento.es_titulo}</Titulo>
                    <Orador>{evento.orador_nombre + ' ' + evento.orador_apellido}</Orador>
                    {
                        (evento.dos_orador_nombre !== '') ? (
                            <Orador>{evento.dos_orador_nombre + ' ' + evento.dos_orador_apellido}</Orador>
                        ) : null
                    }
                    {
                        (evento.tres_orador_nombre !== '') ? (
                            <Orador>{evento.tres_orador_nombre + ' ' + evento.tres_orador_apellido}</Orador>
                        ) : null
                    }
                    {
                        (evento.cuatro_orador_nombre !== '') ? (
                            <Orador>{evento.cuatro_orador_nombre + ' ' + evento.cuatro_orador_apellido}</Orador>
                        ) : null
                    }
                </ColumnaInfoPremium>
                <ColumnaInfoPremium xs={12} lg={3}>
                    {/* <BotonInscripcion onClick={() => setInscribirme(true)} className="btn-lh btn-blanco bor-rad-5 my-4 d-block m-0">{t('Charla.Botones.Inscribirme')}</BotonInscripcion>
                    <Link href={(Number(evento.categoria) === 1) ? `/mastertalk/${evento.slug}` : `/conferencia/${evento.slug}`}>
                        <a className="btn-lh btn-blanco bor-rad-5 my-4 d-block mr-0" target="_blank">{t('Charla.Botones.MasInfo')}</a>
                    </Link> */}
                    <Link href={(Number(evento.categoria) === 1) ? `/mastertalk/${evento.slug}` : `/conferencia/${evento.slug}`}>
                        <a className="btn-lh btn-prim text-white bor-rad-5 my-4 d-block" target="_blank">Ver grabación</a>
                    </Link>
                </ColumnaInfoPremium>
            </RowPersonalizada>
        </Item>
    );
}
 
export default withTranslation('charla')(EventoIndividualPremium);