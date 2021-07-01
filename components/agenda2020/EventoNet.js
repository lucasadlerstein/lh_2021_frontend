import React from 'react';
import styled from '@emotion/styled';

const Titulo = styled.p`
    color: white;
`;

const EventoNet = ({imagen, titulo}) => {    

    const Evento = styled.div`
        background-image: url(${imagen});
        background-size: cover;
        background-position:  center center;
        background-repeat: no-repeat;
        border-radius: 30px;
        min-height: 60rem;
        padding: 3rem;
    `;
    
    return (
        <Evento>
            {/* <Titulo>Hola este es un titulo</Titulo> */}
        </Evento>
    );
}
 
export default EventoNet;