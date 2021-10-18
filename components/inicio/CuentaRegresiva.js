import React from 'react';
import Countdown from "react-countdown";
import styled from '@emotion/styled';
import clienteAxios from '../../config/axios';
import {withTranslation} from '../../i18n';
import ImageFilterFrames from 'material-ui/svg-icons/image/filter-frames';

const Contenedor = styled.div`
    text-align: center;
    background-color: var(--colorVioletaOscuro);
    p {
        color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 2.8rem;
        font-weight: 700;
        margin-top: 1rem;
    }

    span {
        font-size: 1.6rem;
        font-weight: 300;
    }

    @media (min-width: 768px ){
        p {
            font-size: 7rem;
        }
        span {
            font-size: 2rem;
            font-weight: 300;
        }
    }
`;

const Fecha = styled.p`
    text-transform: uppercase;
    font-size: 3.5rem!important;
    font-weight: 700!important;
    margin: 0!important;
    @media (min-width: 768px ){
        font-size: 5rem!important;
    }
`;

const Zoom = styled.button`
    border: 2px solid transparent;
    border-radius: 5rem;
    padding: 1rem 4rem;
    transition: all .3s ease;
    &:hover {
        border: 2px solid var(--colorPrimario);
        padding: 1rem 4rem;
        border-radius: 5rem;
    }
    &:focus {
        outline: none;
    }

`;

const CuentaRegresiva = ({fechaYHora, zoomLink, idCharla, inscripto, t}) => {
    
    function mostrarBotonZoom() {
        const fechaEvento = new Date(fechaYHora);
        const ahora = Date.now();
        const diffTime = Math.abs(fechaEvento - ahora);
        const diffMin = Math.floor(diffTime / (1000 * 60)); 
        // console.log(diffTime + " milisegundos");
        // console.log(diffMin + " minutos");
        if (diffMin < 30) {
            return true;
        } else {
            return false;
        }
    }

    async function ingresarAlEventoBtn(e) {
        e.preventDefault();
        await clienteAxios.put(`/certificados/visita/${idCharla}`)
            .then( resp => {
                window.open(zoomLink, '_blank').focus();
            })
    }
    
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // completado
            if(inscripto) {
                return (
                    <Zoom className="btn-lh btn-blanco fs-2" onClick={(e) => ingresarAlEventoBtn(e)}>
                        {t('CuentaRegresiva.BotonZoom')}
                    </Zoom>
                )
            } else {
                return null;
            }
        } else {
          // Render countdown
          return (
            <>
                <Fecha>{t('CuentaRegresiva.Titulo')}</Fecha>
                <p>{days}<span>{t('CuentaRegresiva.Dias')}</span> {hours}<span>{t('CuentaRegresiva.Horas')}</span> {minutes}<span>{t('CuentaRegresiva.Minutos')}</span> {seconds}<span>{t('CuentaRegresiva.Segundos')}</span></p>
                {
                    (mostrarBotonZoom() && inscripto) ? (
                        <Zoom className="btn-lh btn-blanco fs-2" onClick={(e) => ingresarAlEventoBtn(e)}>
                            {t('CuentaRegresiva.BotonZoom')}
                        </Zoom>
                    ) : null
                }
            </>
          );
        }
    };

    return (
        <>
            <Contenedor className="py-5r">
                <Countdown date={fechaYHora} renderer={renderer}>
                </Countdown>
            </Contenedor>
        </>
    );
}
 
export default withTranslation('inicio')(CuentaRegresiva);