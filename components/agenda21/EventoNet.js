import React from 'react';
import styled from '@emotion/styled';

const Titulo = styled.p`
    color: white;
`;

const EventoNet = ({imagen, titulo, link}) => {    

    const Evento = styled.div`
        background-image: url(${imagen});
        background-size: cover;
        background-position:  center center;
        background-repeat: no-repeat;
        border-radius: 30px;
        min-height: 60rem;
        padding: 3rem;
        margin-left: .5rem;
        margin-right: .5rem;
        transition: all .3s ease;
        &:hover {
            transform: scale(1.07);
            position: relative;
            z-index: 999;
        }
    `;
    
    return (
        <a href={link} target="_blank">
            <Evento>
                {/* <Titulo>Hola este es un titulo</Titulo> */}
            </Evento>
        </a>
    );
}
 
export default EventoNet;
