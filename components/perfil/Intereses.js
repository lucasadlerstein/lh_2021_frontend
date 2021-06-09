import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';

const Fondo = styled.div`
    background-image: url('img/fondo-participan.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

const TituloBox = styled.div`
    display: flex;
`;

const Titulo = styled.h2`
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1.5rem;
    margin-left: 2rem;
`;

const SubTitulo = styled.p`
    font-size: 2.5rem;
    color: white;
    margin: 1rem 0 0 0;
`;

const Intereses = () => {
    

    return (
        <Fondo>
            <Container className="mx-auto py-5">
                <TituloBox>
                    <svg fill="white" height="4.9rem"  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter"><g><path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" /></g></g><g id="Layer_1"/></svg>                 
                    <Titulo>Mis intereses</Titulo>
                </TituloBox>
                <SubTitulo>Al hacer clic podrás elegir tus intereses</SubTitulo>
                <SubTitulo className="mt-0">para tener una mejor experiencia en LATAM Hospitals.</SubTitulo>
                <p>Si está con fondo blanco, no está seleccionado.</p>


                
            </Container>
        </Fondo>
    );
}
 
export default Intereses;