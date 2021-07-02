import React from 'react';
import FranjaContenido from './FranjaContenido';
import {Container} from 'reactstrap';
import {conferenciasEmpresas2020, camarasInstituciones2020, mastertalks2020} from '../../arrEventos2020.js';

const Contenido2020 = () => {
    return (
        <Container className="py-5r">
            <FranjaContenido eventosMostrar={conferenciasEmpresas2020} titulo={'CONFERENCIAS DE EMPRESAS'} />
            <FranjaContenido eventosMostrar={camarasInstituciones2020} titulo={'CÁMARAS E INSTITUCIONES'} />
            <FranjaContenido eventosMostrar={mastertalks2020} titulo={'MASTERTALKS'} />
        </Container>
    );
}
 
export default Contenido2020;