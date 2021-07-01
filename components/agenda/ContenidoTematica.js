import React, {useEffect, useState} from 'react';
import FranjaContenido from './FranjaContenido';


const ContenidoTematica = ({eventos}) => {
    
    const [persona, setPersona] = useState({
        nombre: '',
        intereses: ''
    })

    useEffect(() => {
        if(localStorage.getItem('usuario')) {
            const user = JSON.parse(localStorage.getItem('usuario'));
            setPersona(user);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <FranjaContenido eventosMostrar={eventos} titulo={`Recomendado para ${persona.nombre}`} />
            <FranjaContenido eventosMostrar={eventos} titulo={'Medicina alternativa'} />
            <FranjaContenido eventosMostrar={eventos} titulo={'Cuidado del medio ambiente'} />
            <FranjaContenido eventosMostrar={eventos} titulo={'COVID-19'} />
        </>
    );
}
 
export default ContenidoTematica;