import React, {useState, useEffect} from 'react';
import {Container} from 'reactstrap';
import ContenidoTematica from './ContenidoTematica.js';
import ContenidoFecha from './ContenidoFecha.js';
import Buscador from './Buscador.js';
import clienteAxios from '../../config/axios';
import styled from '@emotion/styled';
import {conferenciasEmpresas2020, mastertalks2020} from '../../arrEventos2020.js';

const BotonCambiarFiltro = styled.button`
    background-color: transparent;
    padding: .5rem 2rem;
    border: none;
    font-size: 2.5rem;
    color: var(--colorPrimario);
    transition: all .3s ease;
    &:focus {
        outline: none;
    }
    &:hover {
        color: var(--colorSecundario);
    }
`;

const FondoBuscador = styled.div`
    background-color: var(--colorSecundario);
`;

const Input = styled.input`
    background-color: white;
    color: var(--colorPrimario);
    border-radius: 3rem;
    font-size: 1.8rem;
    border: 2px solid var(--colorPrimario);
    padding: 2rem 1.5rem;
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
    @media (min-width: 991px){
        max-width: 70%;
        text-align: center;

    }
`;


const ContenidoAgenda = () => {
    
    const [orden, setOrden] = useState('fecha');
    const [eventos, setEventos] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    
    useEffect(() => {
        async function traerEventos() {
            await clienteAxios.get('/charlas/agenda')
                .then(respuesta => {
                    console.log(respuesta);
                    const ordenado = respuesta.data.resp.sort(function(a, b){
                        if(a.hora < b.hora) return -1;
                        if(a.hora > b.hora) return 1;
                    })
                    setEventos(ordenado);
                    // setCargando(false);
                })
                .catch(err => {
                    console.log(err)
                })
        }
        traerEventos();
        // eslint-disable-next-line
    }, []);

    
    const handleChange = e => {
        setBusqueda(e.target.value)
    }

    return (
        <>
            <FondoBuscador>
                <Container className="py-5r text-center">
                    <Input type="text" name="busqueda" value={busqueda} onChange={handleChange} placeholder="Busque por rubro, especialidad, profesión, título, speaker" />
                </Container>
            </FondoBuscador>
            <div className="py-5r">
                <Container style={{display: 'flex'}}>
                    <img width="40px" src="/img/iconos/n_filtro.svg" alt="Cambiar filtro a fecha o temática" />
                    <BotonCambiarFiltro
                        onClick={() => setOrden('fecha')}
                        style={orden === 'fecha' ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}
                    >Fecha</BotonCambiarFiltro>
                    <BotonCambiarFiltro
                        onClick={() => setOrden('tematica')}
                        style={orden === 'tematica' ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}
                    >Temática</BotonCambiarFiltro>
                </Container>
                { (orden === 'tematica') ? <ContenidoTematica busqueda={busqueda} eventos={eventos} /> : <ContenidoFecha busqueda={busqueda} eventos={eventos} /> }
            </div>
        </>
    );
}
 
export default ContenidoAgenda;