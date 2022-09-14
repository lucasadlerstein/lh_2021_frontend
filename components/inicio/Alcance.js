import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Link from 'next/link';
import styled from '@emotion/styled';

import {withTranslation} from '../../i18n';

const Subtitulo = styled.h5`
    font-size: 2.2rem;
    margin-top: 1rem;
    @media (min-width: 768px){
        width: 75%;
    }
`;

const Numero = styled.div`
    margin: 3rem 0;
    p {
        font-size: 5.3rem;
        margin: 0;
        font-weight: bold;
        line-height: 1;
    }

    span {
        font-size: 1.8rem;
        margin: 0;
        font-weight: 300;
    }

    @media (min-width: 768px){
        p {
            font-size: 8.9rem
        }
    }
`;


const Alcance = ({t}) => {
    return (
        <Container className="py-5r" style={{overflow: 'hidden'}}>
            <Row>
                <Col sm={12} md={8}>
                    <h2 className="mb-1">{t('Alcance.Titulo')}</h2>
                    <Subtitulo>{t('Alcance.Subtitulo')}</Subtitulo>
                    <Numero>
                        <p>+6.000</p>
                        <span>{t('Alcance.Personas')}</span>
                    </Numero>
                    <Link href="/agenda">
                        <a className="btn-lh btn-prim fs-2">{t('Alcance.BotonUno')}</a>
                    </Link>
                    {/* {t('Alcance.BotonUno')} */}
                    {/* <Link href="/contacto">
                        <a className="btn-lh btn-sec fs-2">Contáctenos</a>
                    </Link> */}
                </Col>
                <Col className="hide-mobile" sm={12} md={4}>
                    <img style={{margin: 'auto 0 -100px 0', width: '100%'}} src="img/IlustracionHome2.png" alt={t('Alcance.Titulo')}/>
                </Col>
            </Row>
        </Container>
    );
}
 
export default withTranslation('componentes')(Alcance);