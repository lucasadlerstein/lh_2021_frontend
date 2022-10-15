import React from 'react';
import styled from '@emotion/styled';
import {Container, Row, Col} from 'reactstrap';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Fondo = styled.div`
    background-color: var(--colorSecundario);
    @media (max-width: 540px){
        text-align: center;
    }
`;

const ImagenOrador = styled(LazyLoadImage)`
    border-radius: 100%;
    height: 25rem;
    width: 25rem;
    object-fit: cover;
    -webkit-box-shadow: -7px 7px 36px -8px rgba(0,0,0,0.45);
    -moz-box-shadow: -7px 7px 36px -8px rgba(0,0,0,0.45);
    box-shadow: -7px 7px 36px -8px rgba(0,0,0,0.45);
    transition: all .5s ease;
    &:hover {
        -webkit-box-shadow: -7px 7px 36px -8px rgba(0,0,0,0.75);
        -moz-box-shadow: -7px 7px 36px -8px rgba(0,0,0,0.75);
        box-shadow: -7px 7px 36px -8px rgba(0,0,0,0.75);
    }
`;

const Nombre = styled.h4`
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: bold;
    color: white;

`;

const ColumnaOrador = styled(Col)`
    text-align: right;
    @media (max-width: 540px){
        text-align: center;
        margin-top: 5rem;
    }
`;

const BtnLinkedin = styled.a`
    img {
        margin-top: 1rem;
        width: 5rem!important;
        transition: all .3s ease;
    }
    &:hover{
        img {
            transform: rotate(360deg);
        }
    }
`;

const SobreElSpeaker = ({nombre, cv, linkedin, foto}) => {
    return (
        <>
            <Fondo className="py-10">
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            {
                                (foto !== null && foto !== undefined && foto !== '') ? (
                                    <ImagenOrador src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/static/${foto}`} alt={nombre} />
                                ) : null
                            }
                        </Col>
                        <ColumnaOrador xs={12} lg={6}>
                            <Nombre>{nombre}</Nombre>
                            <p className="fs-2 text-white">{cv}</p>
                            {(linkedin !== null && linkedin !== undefined && linkedin !== '') ? (
                                <BtnLinkedin href={linkedin} target="_blank">
                                    <LazyLoadImage src="/img/logos/linkedin.svg" alt={`Linkedin - ${nombre}`} />
                                </BtnLinkedin>
                            ) : null}
                        </ColumnaOrador>
                    </Row>
                </Container>
            </Fondo>

        </>
    );
}
 
export default SobreElSpeaker;