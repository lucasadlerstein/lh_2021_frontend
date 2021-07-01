import React from 'react';
import styled from '@emotion/styled';
import {Container, Row, Col} from 'reactstrap';
import Link from 'next/link';

import {withTranslation} from '../../i18n';

const Fondo = styled.div`
    margin-top: 5rem!important;
    background-color: var(--colorSecundario);
`;

const Imagen = styled.img`
    position: relative;
    bottom: 0;
`;

const CabeceraAgenda = ({t}) => {
    return (
        <Fondo>
            <Container>
                <Row>
                    <Col xs={12} lg={9}>
                        <h2 style={{marginTop: '8rem'}} className="text-uppercase text-white fs-3">
                            Revive gratis todas nuestras MasterTalks y Conferencias aquí abajo
                        </h2>
                        {/* <Link href="/#newsletter">
                            <a className="btn-lh btn-blanco fs-2 bor-rad-5">{t('Agenda.Inscribirme')}</a>
                        </Link> */}
                    </Col>
                    <Col xs={12} lg={3}>
                        <Imagen src="/img/IlustracionAgenda.png" alt="Agenda Latam Hospitals" />
                    </Col>
                </Row>
            </Container>
        </Fondo>
    );
}
 
export default withTranslation('componentes')(CabeceraAgenda);