import React, {useEffect, useState} from 'react';
import {Container} from 'reactstrap';
import styled from '@emotion/styled';
import { withTranslation } from '../../i18n';

const Titulo = styled.h1`
    text-transform: uppercase;
    font-size: 3.5rem;
    margin-top: .5rem;
`;

const Fecha = styled.p`
    /* font-weight: bold; */
    font-size: 2.5rem;
    color: var(--colorPrimario);
    margin: 1rem auto;
    width: 80%;
    margin-top: 5rem;
`;

const Redes = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;

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
        justify-content: center;
    }
`;


const Encuentro = ({t}) => {

    const [ancho, setAncho] = useState(150);

    useEffect(() => {
        setAncho(window.innerWidth);
        // eslint-disable-next-line
    }, [])

    return (
        <Container className="text-center mx-auto py-5">
            {
                (ancho > 768) ? <Fecha>{t('Franja.Fecha')}</Fecha> : <Fecha>18/10 - 22/10</Fecha>
            }
            <Titulo>{t('Franja.Titulo')}</Titulo>
            {
                (ancho > 768) ? <Fecha>{t('Franja.FechaDesktop')}</Fecha> : <Fecha>{t('Franja.FechaMobile')}</Fecha>
            }
            <Redes>
                <a href="https://www.linkedin.com/company/latam-hospitals" target="_blank" rel="noreferrer noopener">
                    <img src="/img/logos/linkedin-blue.svg" />
                </a>
                <a href="https://www.facebook.com/LATAM-Hospitals-111728267365705" target="_blank" rel="noreferrer noopener">
                    <img src="/img/logos/facebook-blue.svg" />
                </a>
                <a href="https://www.instagram.com/latam.hospitals" target="_blank" rel="noreferrer noopener">
                    <img src="/img/logos/instagram-blue.svg" />
                </a>
                {/* <a href="http://wa.me/5491144169158" target="_blank" rel="noreferrer noopener">
                    <img src="/img/logos/whatsapp-blue.svg" />
                </a> */}
            </Redes>
        </Container>
    );
}
 
export default withTranslation('inicio')(Encuentro);