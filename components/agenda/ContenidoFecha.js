import React, {useEffect, useState} from 'react';
import FranjaContenido from './FranjaContenido';

const ContenidoFecha = ({eventos, busqueda}) => {

    const [dia18, setDia18] = useState([]);
    const [dia19, setDia19] = useState([]);
    const [dia20, setDia20] = useState([]);
    const [dia21, setDia21] = useState([]);
    const [dia22, setDia22] = useState([]);

    useEffect( () => {

        async function dividirEventos() {
            // vaciarStates()
            await eventos.forEach(ev => {
                if(ev.fecha === '2021-10-18') {
                    setDia18(dia18 => [...dia18, ev ]);
                } else if(ev.fecha === '2021-10-19') {
                    setDia19(dia19 => [...dia19, ev ])
                } else if(ev.fecha === '2021-10-20') {
                    setDia20(dia20 => [...dia20, ev ])
                } else if(ev.fecha === '2021-10-21') {
                    setDia21(dia21 => [...dia21, ev ])
                } else if(ev.fecha === '2021-10-22') {
                    setDia22(dia22 => [...dia22, ev ])
                }
            })
        }
        if(eventos.length > 0) {
            dividirEventos();
        }
        function vaciarStates() {
            setDia18([]);
            setDia19([]);
            setDia20([]);
            setDia21([]);
            setDia22([]);
        }

        // eslint-disable-next-line
    }, [eventos])
    
    return (
        <>
            <FranjaContenido busqueda={busqueda} eventosMostrar={dia18} titulo={'18 DE OCTUBRE'} />
            <FranjaContenido busqueda={busqueda} eventosMostrar={dia19} titulo={'19 DE OCTUBRE'} />
            <FranjaContenido busqueda={busqueda} eventosMostrar={dia20} titulo={'20 DE OCTUBRE'} />
            <FranjaContenido busqueda={busqueda} eventosMostrar={dia21} titulo={'21 DE OCTUBRE'} />
            <FranjaContenido busqueda={busqueda} eventosMostrar={dia22} titulo={'22 DE OCTUBRE'} />
        </>
    );
}
 
export default ContenidoFecha;