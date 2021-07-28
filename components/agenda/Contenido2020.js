import React from 'react';
import FranjaContenidoAnterior from './FranjaContenidoAnterior';
import {Container} from 'reactstrap';
import {conferenciasEmpresas2020, camarasInstituciones2020, mastertalks2020} from '../../arrEventos2020.js';
import styled from '@emotion/styled';
 
const Titulo = styled.h2`
    color: var(--colorPrimario);
    font-weight: bold;
    font-size: 3rem;
    text-transform: uppercase;
`;

const Contenido2020 = () => {
    return (
        <div className="py-5r">
            <Titulo className="text-center">REVIVE LAS CONFERENCIAS Y MASTERTALKS DEL 2020</Titulo>
            
            <FranjaContenidoAnterior eventosMostrar={conferenciasEmpresas2020} titulo={'CONFERENCIAS DE EMPRESAS'} />
            <FranjaContenidoAnterior eventosMostrar={mastertalks2020} titulo={'MASTERTALKS'} />
            <FranjaContenidoAnterior eventosMostrar={camarasInstituciones2020} titulo={'CÁMARAS E INSTITUCIONES'} />
        </div>
    );
}
 
export default Contenido2020;
