import React, {useEffect, useState} from 'react';
import FranjaContenido from './FranjaContenido';
import FranjaContenidoTematica from './FranjaContenidoTematica';
import {ListaIntereses} from '../../InteresesListado.js';

const ContenidoTematica = ({eventos}) => {
    
    const [persona, setPersona] = useState({
        nombre: '',
        intereses: ''
    });
    const [interesesPersona, setInteresesPersona] = useState([]);

    const [interesesEnviar, setInteresesEnviar] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('usuario')) {
            const user = JSON.parse(localStorage.getItem('usuario'));
            setPersona(user);
            setInteresesPersona(JSON.parse(user.intereses));

            // const interesesUsuarioAhora = JSON.parse(user.intereses);
            // let nuevoEnviar = [];
            // interesesUsuarioAhora.forEach((interesAhora, indexInt) => {
            //     nuevoEnviar[indexInt] = {
            //         es: interesAhora.ES,
            //         en: interesAhora.EN,
            //         po: interesAhora.PO,
            //         eventos: []
            //     }
            //     eventos.forEach((ev, indexEv) => {
            //         if(ev.intereses.includes(interesAhora)) {
            //             // si el evento es parte de los intereses de la persona
            //             nuevoEnviar[indexInt].eventos.push(indexEv);
            //         }
            //     })
            // })
            // setInteresesEnviar(nuevoEnviar)
            // console.log(nuevoEnviar)






            // eventos.forEach(ev => {
            //     let isOk = 0;
            //     const interesesArray = JSON.parse(ev.intereses);
            //     interesesArray.forEach(inter00 => {
            //         if(isOk === 0 && user.intereses.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(inter00.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase())) {
            //             isOk = 1;
            //             setInteresesPersona(interesesPersona => [...interesesPersona, ev]);
            //         }
            //     })
            // })
        }
        
        // eslint-disable-next-line
    }, [eventos]);


    return (
        <>
            {/* {
                (interesesPersona.length === 0) ? null : <FranjaContenido eventosMostrar={interesesPersona} titulo={`Recomendado para ${persona.nombre}`} />
            } */}
            {
                (interesesPersona !== undefined) ? (
                    interesesPersona.map(interesP => (
                        <FranjaContenidoTematica eventosMostrar={eventos} titulo={interesP} codigoInteres={interesP} />
    
                    ))
                ) : null
            }
        </>
    );
}
 
export default ContenidoTematica;