import React, {useEffect, useState} from 'react';
import FranjaContenido from './FranjaContenido';
import FranjaContenidoTematica from './FranjaContenidoTematica';
import {ListaIntereses} from '../../InteresesListado.js';
import {CategoriasListado} from '../../CategoriasListado.js';
import {withTranslation, i18n} from '../../i18n';
import clienteAxios from '../../config/axios';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const ContenidoTematica = ({eventos, busqueda, t}) => {
    
    const [persona, setPersona] = useState({
        nombre: '',
        intereses: ''
    });
    const [interesesPersona, setInteresesPersona] = useState([]);

    const [interesesEnviar, setInteresesEnviar] = useState([]);
    const [conferencias, setConferencias] = useState([]);
    const [mastertalks, setMastertalks] = useState([]);
    const [patrocinados, setPatrocinados] = useState([]);
    const [agrupadosCategoria, setAgroupadosCategoria] = useState([]);

    // function agruparPorCategoriaTematica(eventos) {
    //     let eventosAgrupados = eventos.reduce((r, a) => {
    //         r[a.categoriaTematica] = [...r[a.categoriaTematica] || [], a];
    //         return r;
    //        }, {});
    //     setAgroupadosCategoria(eventosAgrupados);
    // }

    function agruparPorCategoriaTematica(eventos) {
        let eventosAgrupados = eventos.reduce((r, a) => {
            r[a.categoriaTematicaUno] = [...r[a.categoriaTematicaUno] || [], a];
            r[a.categoriaTematicaDos] = [...r[a.categoriaTematicaDos] || [], a];
            r[a.categoriaTematicaTres] = [...r[a.categoriaTematicaTres] || [], a];
            return r;
           }, {});
        setAgroupadosCategoria(eventosAgrupados);
    }

    useEffect(() => {
        let user;
        if(localStorage.getItem('usuario')) {
            user = JSON.parse(localStorage.getItem('usuario'));
            setPersona(user);
            console.log(user);
            setInteresesPersona(JSON.parse(user.intereses));
        }
        if(eventos) {
            agruparPorCategoriaTematica(eventos);

            eventos.forEach(ev => {
                if(Number(ev.categoria) === 2) {
                    // agregar a CONFERENCIAS
                    setConferencias(conferencias => [...conferencias, ev])
                } else {
                    // agregar a MASTERTALKS
                    setMastertalks(mastertalks => [...mastertalks, ev])
                }

                let isOk = 0;
                const interesesArray = JSON.parse(ev.intereses);
                interesesArray.forEach(inter00 => {
                    if(isOk === 0 && user?.intereses?.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(inter00.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase())) {
                        isOk = 1;
                        setInteresesEnviar(interesesEnviar => [...interesesEnviar, ev]);
                    }
                })

            })
        }
        // eslint-disable-next-line
    }, [eventos]);


    return (
        <>
            {
                (interesesPersona !== undefined && interesesPersona !== null) ? (
                    <LazyLoadComponent>
                        <FranjaContenido busqueda={busqueda} eventosMostrar={interesesEnviar} titulo={`${t('Tematicas.Recomendado')} ${persona.nombre}`} />
                    </LazyLoadComponent>
                ) : null
            }
            <LazyLoadComponent>
                <FranjaContenido busqueda={busqueda} eventosMostrar={patrocinados} titulo={t('Tematicas.Patrocinadas')} />
            </LazyLoadComponent>
            {
                CategoriasListado.map((categ, index) => (
                    <LazyLoadComponent>
                        <FranjaContenido key={index} busqueda={busqueda} eventosMostrar={agrupadosCategoria[categ.COD]} titulo={i18n.language === 'es' ? categ.ES : i18n.language === 'en' ? categ.EN : categ.PR} />
                    </LazyLoadComponent>
                ))
            }
            {/* {
                categorias.map(cat => (
                    <FranjaContenido key={cat.id} busqueda={busqueda} eventosMostrar={null} titulo={'Titulo'} />
                ))
            } */}
            <LazyLoadComponent>
                <FranjaContenido busqueda={busqueda} eventosMostrar={conferencias} titulo={t('Tematicas.Conferencias')} />
            </LazyLoadComponent>
            <LazyLoadComponent>
                <FranjaContenido busqueda={busqueda} eventosMostrar={mastertalks} titulo={t('Tematicas.Mastertalks')} />
            </LazyLoadComponent>

        </>
    );
}
 
ContenidoTematica.with18nextTranslation = async () => ({
    namespacesRequired: ['agenda'],
});

export default withTranslation('agenda')(ContenidoTematica);