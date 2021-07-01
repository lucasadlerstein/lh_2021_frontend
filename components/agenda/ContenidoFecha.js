import React from 'react';
import FranjaContenido from './FranjaContenido';

const ContenidoFecha = ({eventos}) => {
    return (
        <>
            <FranjaContenido eventosMostrar={eventos} titulo={'18 DE OCTUBRE'} />
            <FranjaContenido eventosMostrar={eventos} titulo={'19 DE OCTUBRE'} />
            <FranjaContenido eventosMostrar={eventos} titulo={'20 DE OCTUBRE'} />
            <FranjaContenido eventosMostrar={eventos} titulo={'21 DE OCTUBRE'} />
            <FranjaContenido eventosMostrar={eventos} titulo={'22 DE OCTUBRE'} />


        </>
    );
}
 
export default ContenidoFecha;