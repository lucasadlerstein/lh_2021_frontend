import React from 'react';
import styled from '@emotion/styled';
import {Row, Col, Container} from 'reactstrap';
import Scripts from './Scripts';

const FooterPersonalizado = styled.footer`
    background-color: var(--colorNegroFooter);
    min-height: 15rem;
    padding: 5rem 0;
`;

const InfoContacto = styled.div`
    color: white;
    font-size: 1.8rem;
    p {
        font-weight: bold;
        margin: 0;
        text-transform: uppercase;
    }
    a {
        color: white;
        margin: 0;
    }
    @media (max-width: 540px){
        text-align: center;
    }
`;

const Redes = styled.div`
    display: flex;
    justify-content: flex-end;

    &:last-child {
        margin-right: 0;
    }
    a {
        margin-right: 1.5rem;
        width: 4rem;
        transition: all .5s ease;
    }

    a:hover {
        transform: rotate(360deg);
    }

    @media (max-width: 540px){
        margin-top: 2rem;
        justify-content: center;
    }
`;

const LogosRealizadores = styled.div`
    background-color: black;
    padding: 1.5rem 0;
    
    div {
        margin: 0 auto;
        width: 90%;
        display: flex;
        justify-content: center;

        a {
            margin: 0 1rem;
        }
    }
    img {
        height: 3.5rem;
    }
    @media (min-width: 768px){
        div {
            width: 60%;
        }
        img {
            height: 4rem;
        }
    }

`;

const Footer = () => {
    return (
        <>
            <FooterPersonalizado>
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <InfoContacto>
                                <p>Latam Hospitals</p>
                                <a href="mailto:contacto@latamhospitals.com">contacto@latamhospitals.com</a>
                            </InfoContacto>
                        </Col>
                        <Col xs={12} md={6}>
                            <Redes>
                                <a href="https://www.linkedin.com/company/latam-hospitals" target="_blank" rel="noreferrer noopener">
                                    <img src="/img/logos/linkedin.svg" />
                                </a>
                                <a href="https://www.facebook.com/LATAM-Hospitals-111728267365705" target="_blank" rel="noreferrer noopener">
                                    <img src="/img/logos/facebook.svg" />
                                </a>
                                <a href="https://www.instagram.com/latam.hospitals" target="_blank" rel="noreferrer noopener">
                                    <img src="/img/logos/instagram.svg" />
                                </a>
                                <a href="http://wa.me/5491144169158" target="_blank" rel="noreferrer noopener">
                                    <img src="/img/logos/whatsapp.svg" />
                                </a>
                            </Redes>
                        </Col>
                    </Row>
                </Container>
            </FooterPersonalizado>
            <LogosRealizadores>
                <div>
                    <a href="https://www.infoque.com.ar" target="_blank">
                        <img src="/img/logos/Logo_Infoque.png" alt="Logo Infoque" />
                    </a>
                    <a href="https://www.midiainnovation.com" target="_blank">
                        <img src="/img/logos/MIDIA-LOGO.png" alt="Logo Midia" />
                    </a>
                    <a href="https://infinidad.com.ar" target="_blank">
                        <img src="/img/logos/Logo_Infinidad.png" alt="Logo Infinidad" />
                    </a>
                </div>
            </LogosRealizadores>
            <Scripts />
        </>
    );
}
 
export default Footer;