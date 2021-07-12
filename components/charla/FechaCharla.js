import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {getLocationAndTimeZone} from '../../helpers/helpers';
import axios from 'axios';

const Franja = styled.div`
    padding: 2rem 0;
    text-align: center;
    p {
        margin: 0;
        font-size: 3rem;
        color: var(--colorPrimario);
        font-weight: 600;
        span {
            font-weight: 600;
        }
    }
    @media (min-width: 540px){
        display: flex;
        justify-content: center;
    }
`;

const TimeZone = styled.p`
    margin: 0 0 0 1rem!important;
    font-size: 1.8rem!important;
    font-weight: 300!important;
    display: flex;
    align-items: center;
    @media (max-width: 540px ){
        justify-content: center;
    }
`;

const FechaCharla = ({fecha, hora}) => {

  const [horaActualizada, setHoraActualizada] = useState({
    hora: hora,
    localizacion: 'Arg/Bra/Chi/Par/Uru'
  })

  const dateOptions = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const fechaJS = new Date(Date.parse(fecha.replace(/-/g, '/')));

    useEffect(() => {
      async function chequearZonaHoraria() {
        if(localStorage.getItem('pais-lh')) {
          const localPais = JSON.parse(localStorage.getItem('pais-lh'));
          const resultadoHora = getLocationAndTimeZone(hora, localPais.localizacion, localPais.codigo);
            setHoraActualizada({
              hora: resultadoHora.obj.hora,
              localizacion: resultadoHora.obj.localizacion
            })
        } else {
          try {
            await axios('https://api.ipgeolocation.io/ipgeo?apiKey=9c394e1f6cb745b88cb87a2dafad9b5e')
              .then(resp => {
                const resultadoHora = getLocationAndTimeZone(hora, resp.data.country_name, resp.data.country_code2);
                setHoraActualizada({
                  hora: resultadoHora.obj.hora,
                  localizacion: resultadoHora.obj.localizacion
                })
                localStorage.setItem('pais-lh', JSON.stringify(resultadoHora.obj));
              })
          } catch (error) {
            console.log(error);
          }
        }
      }
      chequearZonaHoraria();
      // eslint-disable-next-line
    }, [])

    return (
      <Franja>
          <p>{fechaJS.toLocaleDateString("es-ES", dateOptions)}<span> - {horaActualizada.hora}hs</span></p>
          <TimeZone>({horaActualizada.localizacion})</TimeZone>
      </Franja>
    );
}
 
export default FechaCharla;