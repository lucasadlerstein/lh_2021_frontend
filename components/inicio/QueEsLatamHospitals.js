import React from 'react';
import styled from '@emotion/styled';
import { Row, Col, Container } from 'reactstrap';
import Link from 'next/link';

import { withTranslation } from '../../i18n';

const ColumnaInfo = styled(Col)`
    padding-top: 4rem;

    p {
        font-size: 2.2rem;
        color: var(--colorPrimario);
    }
`;

const Imagen = styled.img`
    margin-bottom: -1px;
    margin-top: 2rem;
    width: 35rem;
`;

const QueEsLatamHospitals = ({textoA, textoB, t}) => {
    
    return (
        <Container className="pt-5">
            <Row>
                <ColumnaInfo md={6} lg={7}>
                    <h2>{t('QueEs.Titulo')}</h2>
                    <p>{textoA}</p>
                    <p style={{marginBottom: '3rem'}}>{textoB}</p>
                    <Link href="https://2020.latamhospitals.com/agenda">
                        <a className="btn-lh btn-prim fs-2">Ver contenidos del 2020</a>
                        {/* {t('QueEs.BotonUno')} */}
                    </Link>
                    {/* <Link href="#newsletter">
                        <a className="btn-lh btn-prim fs-2">{t('QueEs.BotonDos')}</a>
                    </Link> */}
                </ColumnaInfo>
                <Col md={6} lg={5}>
                    <Imagen src="img/IlustracionHome1.png" alt={t('QueEs.Titulo')} />
                </Col>
            </Row>
        </Container>
    );
}
 
export default withTranslation('componentes')(QueEsLatamHospitals);