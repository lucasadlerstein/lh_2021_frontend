import React from 'react';
import Countdown from "react-countdown";
import styled from '@emotion/styled';

import {withTranslation} from '../../i18n';

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

const CuentaRegresiva = ({t}) => {

    const Completionist = () => null;
    
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return null;
        } else {
          // Render a countdown
          return (
            <p>{days}<span>{t('CuentaRegresiva.Dias')}</span> {hours}<span>{t('CuentaRegresiva.Horas')}</span> {minutes}<span>{t('CuentaRegresiva.Minutos')}</span> {seconds}<span>{t('CuentaRegresiva.Segundos')}</span></p>
          );
        }
    };

    return (
        <Contenedor className="py-5r">
            <Fecha>{t('CuentaRegresiva.Titulo')}</Fecha>
            <Countdown date={1606129200000} renderer={renderer}>
                {/* <Completionist /> */}
            </Countdown>    
        </Contenedor>
    );
}
 
export default withTranslation('inicio')(CuentaRegresiva);