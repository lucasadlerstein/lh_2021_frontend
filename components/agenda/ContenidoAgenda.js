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


const ContenidoAgenda = () => {
    
    const [orden, setOrden] = useState('fecha');
    const [eventos, setEventos] = useState([]);
    
    useEffect(() => {
        async function traerEventos() {
            await clienteAxios.get('/charlas/agenda')
                .then(respuesta => {
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

    return (
        <>
            <Buscador />
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
                { (orden === 'tematica') ? <ContenidoTematica eventos={eventos} /> : <ContenidoFecha eventos={eventos} /> }
            </div>
        </>
    );
}
 
export default ContenidoAgenda;