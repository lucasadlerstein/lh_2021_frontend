import React from 'react';
import styled from '@emotion/styled';
import {Container, Row, Col} from 'reactstrap';
import Link from 'next/link';

import {withTranslation} from '../../i18n';

const Fondo = styled.section`
    background-color: var(--colorSecundario);
    padding: 5rem 0;
    overflow-x: hidden;
`;
const LogoEmpresa = styled.img`
    height: 8rem;
    @media (max-width: 768px){
        margin: 3rem auto;
    }
    @media (min-width: 768px){
        transform: translate(18%, 45%);
    }
`;
const TituloH1 = styled.h1`
    color: white;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: bold;
    @media (min-width: 768px){
        max-width: 85%;
    }
`;
const Descripcion = styled.p`
    color: white;
    font-size: 2.5rem;
    font-weight: 300;
    @media (min-width: 768px){
        max-width: 70%;
    }
`;
const Speaker = styled.h3`
    color: white;
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    &:before {
        position: relative;
        content: url('/img/iconos/hombre.svg');
        bottom: -5px;
        margin-right: 1rem;
    }
    @media (min-width: 768px){
        max-width: 70%;
    }
`;
const BotonInscribirme = styled.button`
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

const FlexContenedor = styled.div`
    @media (min-width: 768px){
        display: flex;
        position: relative;
    }
`;

const SolapaBlanca = styled.div`
    background-color: white;

    @media (max-width: 768px ){
        margin-top: 5rem;
        border-radius: 15rem;
        text-align: center;
    }

    @media (min-width: 768px){
        border-top-left-radius: 15rem;
        border-bottom-left-radius: 15rem;
        height: 15rem;
        width: 50%;
        position: absolute;
        top: 50%;
        left: 100%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

`;

const BannerPrincipal = ({slug, titulo, desc, nombre, nombre2, nombre3, nombre4, logo, empresa, funcionBotonInscribirme, inscripto, t}) => {
    return (
        <Fondo>
            <Container>
                <FlexContenedor>
                    <div>
                        <TituloH1>{titulo}</TituloH1>
                        <Descripcion>{desc}</Descripcion>
                        <Speaker>
                            {nombre}
                            {
                                (nombre2.trim() !== '') ? `, ${nombre2}` : null
                            }
                            {
                                (nombre3.trim() !== '') ? `, ${nombre3}` : null
                            }
                            {
                                (nombre4.trim() !== '') ? `, ${nombre4}` : null
                            }
                        </Speaker>
                        {
                            (inscripto) ? (
                                null
                            ) : (
                                <BotonInscribirme onClick={() => funcionBotonInscribirme(1)} className="btn-lh btn-prim fs-2">{t('Charla.Inscribirme')}</BotonInscribirme>
                            )
                        }
                    </div>
                    {
                        (logo === '' || logo === null || logo === undefined ) ? null : (
                            <SolapaBlanca>
                                <LogoEmpresa src={`https://p.api.latamhospitals.com/static/${logo}`} alt={empresa} />
                            </SolapaBlanca>
                        )
                    }
                </FlexContenedor>
            </Container>
        </Fondo>
    );
}
 
export default withTranslation('charla')(BannerPrincipal);