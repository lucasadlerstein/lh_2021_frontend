import React, {useEffect, useState} from 'react';
import FranjaContenido from './FranjaContenido';
import {withTranslation} from '../../i18n';

const ContenidoFecha = ({eventos, busqueda, t}) => {

    const [dia17, setDia17] = useState([]);
    const [dia18, setDia18] = useState([]);
    const [dia19, setDia19] = useState([]);
    const [dia20, setDia20] = useState([]);
    const [dia21, setDia21] = useState([]);
    const [dia22, setDia22] = useState([]);

    useEffect( () => {

        async function dividirEventos() {
            // vaciarStates()
            await eventos.forEach(ev => {
                if(ev.fecha === '2022-10-17') {
                    setDia17(dia17 => [...dia17, ev ]);
                } else if(ev.fecha === '2022-10-18') {
                    setDia18(dia18 => [...dia18, ev ]);
                } else if(ev.fecha === '2022-10-19') {
                    setDia19(dia19 => [...dia19, ev ])
                } else if(ev.fecha === '2022-10-20') {
                    setDia20(dia20 => [...dia20, ev ])
                } else if(ev.fecha === '2022-10-21') {
                    setDia21(dia21 => [...dia21, ev ])
                } else if(ev.fecha === '2022-10-22') {
                    setDia22(dia22 => [...dia22, ev ])
                }
            })
        }
        if(eventos.length > 0) {
            dividirEventos();
        }
        function vaciarStates() {
            setDia17([]);
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
            <FranjaContenido busqueda={busqueda} eventosMostrar={dia17} titulo={t('Fechas.17')} />
            <FranjaContenido busqueda={busqueda} eventosMostrar={dia18} titulo={t('Fechas.18')} />
            <FranjaContenido busqueda={busqueda} eventosMostrar={dia19} titulo={t('Fechas.19')} />
            <FranjaContenido busqueda={busqueda} eventosMostrar={dia20} titulo={t('Fechas.20')} />
            <FranjaContenido busqueda={busqueda} eventosMostrar={dia21} titulo={t('Fechas.21')} />
            <FranjaContenido busqueda={busqueda} eventosMostrar={dia22} titulo={t('Fechas.22')} />
        </>
    );
}

ContenidoFecha.with18nextTranslation = async () => ({
    namespacesRequired: ['agenda'],
});

export default withTranslation('agenda')(ContenidoFecha);