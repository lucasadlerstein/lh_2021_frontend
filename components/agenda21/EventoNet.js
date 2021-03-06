import React from 'react';
import styled from '@emotion/styled';

const Titulo = styled.p`
    color: white;
`;

const EventoNet = ({imagen, titulo, link}) => {    

    // const EventoImg = styled.img`
    //     border-radius: 30px;
    //     width: 100%;
    //     height: 100%;
    //     /* padding: 3rem; */
    //     margin-left: .5rem!important;
    //     margin-right: .5rem!important;
    //     transition: all .3s ease;
    //     &:hover {
    //         transform: scale(1.07);
    //         position: relative;
    //         z-index: 999;
    //     }
    // `;

    // const EventoDIVNO = styled.div`
    //     background-image: url(${imagen});
    //     background-size: cover;
    //     background-position:  center center;
    //     background-repeat: no-repeat;
    //     border-radius: 30px;
    //     min-height: 60rem;
    //     width: 100%;
    //     height: auto!important;
    //     padding: 3rem;
    //     margin-left: .5rem;
    //     margin-right: .5rem;
    //     transition: all .3s ease;
    //     &:hover {
    //         transform: scale(1.07);
    //         position: relative;
    //         z-index: 999;
    //     }
    // `;

    const Evento = styled.div`
        margin-left: .5rem;
        margin-right: .5rem;
        transition: all .3s ease;
        &:hover {
            transform: scale(1.07);
            position: relative;
            z-index: 999;
        }
    `;

    const Imagen = styled.img`
        width: 100%;
        height: 100%;
        border-radius: 3rem;
    `;
    
    return (
        <a href={link} target="_blank">
            <Evento>
                <Imagen src={imagen} alt="Evento Latam Hospitals" />
                {/* <Titulo>Hola este es un titulo</Titulo> */}
            </Evento>
        </a>
    );
}
 
export default EventoNet;
