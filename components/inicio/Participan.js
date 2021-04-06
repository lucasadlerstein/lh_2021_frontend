import React from 'react';
import styled from '@emotion/styled';
import {Container, Row, Col} from 'reactstrap';

import {withTranslation} from '../../i18n';

const Fondo = styled.div`
    background-image: url('img/fondo-participan.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

const Imagen75 = styled.img`
    width: 75%;
`;

const Imagen40 = styled.img`
    width: 100%;
    @media (min-width: 540px){
        width: 80%;
    }
    @media (min-width: 991px){
        width: 65%;
    }
`;

const Division = styled.div`
    background-color: var(--colorVioletaOscuro);
    height: 1rem;
`;

const Participan = ({t}) => {
    return (
        <>
            <Division id="empresas"></Division>

            <div>
                <Container className="py-5r">
                    <h2 className="text-center mb-5">{t('Instituciones.Titulo.1')}</h2>
                    <Row>
                        <Col xs={6} md={5} lg={5} className="text-center my-auto mx-auto">
                            <Imagen75 alt="Merck" src="img/logos/empresas/02_MERCK_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={5} lg={5} className="text-center my-auto mx-auto">
                            <Imagen75 alt="BG Analizadores" src="img/logos/empresas/03_BG_Analizadores_logo_Latam_Hospitals-min.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto">
                            <Imagen75 alt="Diestro - Medical Device Technology" src="img/logos/empresas/04_DIESTRO_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto">
                            <Imagen75 alt="Siemens Healthineers" src="img/logos/empresas/01_SIEMENS_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto">
                            <Imagen75 alt="Diagnochile" src="img/logos/empresas/05_DIAGNOCHILE_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto">
                            <Imagen75 alt="Seido - Consultora Chile" src="img/logos/empresas/06_SEIDO_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto">
                            <Imagen75 alt="Optimedical" src="img/logos/empresas/logo_optimedical.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto">
                            <Imagen75 alt="NOVA" src="img/logos/empresas/NOVA.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto">
                            <Imagen75 alt="Sebia" src="img/logos/empresas/sebia.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 style={{width: '65%'}} alt="Binding Site" src="img/logos/empresas/binding-site-logo.svg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 style={{width: '65%'}} alt="MindRay" src="img/logos/empresas/mindray.png" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container className="py-5r">
                    <h2 className="text-center mb-5">{t('Instituciones.Titulo.2')}</h2>
                    <Row>
                        <Col xs={6} md={3} lg={3} className="text-center m-auto">
                            <img alt="CADIME - Camara de Instituciones de Diagnostico Medico" src="img/logos/camaras/01_CADIME_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={3} lg={3} className="text-center m-auto">
                            <img alt="UAPE" src="img/logos/camaras/03_UAPE_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={3} lg={3} className="text-center  m-auto">
                            <img alt="CAPRODI" src="img/logos/camaras/02_CAPRODI_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={3} lg={3} className="text-center m-auto">
                            <img alt="CALAB" src="img/logos/camaras/04_CALAB.png" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container className="py-5r">
                    <h2 className="text-center mb-5">{t('Instituciones.Titulo.3')}</h2>
                    <Row>
                        <Col xs={6} md={4} lg={4} className="text-center">
                            <Imagen75 alt="ABA" src="img/logos/instituciones/01_ABA_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center">
                            <Imagen75 alt="CUBRA" src="img/logos/instituciones/02_CUBRA_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center">
                            <Imagen75 alt="FBA" src="img/logos/instituciones/03_FBA_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center">
                            <Imagen75 alt="COFyBCF" src="img/logos/instituciones/04_COFyBCF_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center">
                            <Imagen75 alt="SATI" src="img/logos/instituciones/05_SATI_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center">
                            <Imagen75 alt="SMLC" src="img/logos/instituciones/06_SMLC_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="mx-auto text-center my-auto">
                            <Imagen75 alt="RED INTENSIVA" src="img/logos/instituciones/07_REDINTENSIVA_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="mx-auto text-center my-auto">
                            <Imagen75 alt="ANMAT" src="img/logos/instituciones/Logo_ANMAT.png" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Fondo>
                <Container className="py-5r">
                    <h2 className="text-white text-center mb-5">{t('Instituciones.Titulo.4')}</h2>
                    <Row>
                        <Col xs={12} md={12} lg={12} className="text-center">
                            <img alt="EL CRONISTA" src="img/logos/media-partners/01_EL_CRONISTA_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center">
                            <Imagen40 alt="BIO REVIEW" src="img/logos/media-partners/02_BIOREVIEW_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center">
                            <Imagen40 alt="WORLD DIAGNOSTICS" src="img/logos/media-partners/03_WORLDIAGNOSTICS_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center mx-auto">
                            <Imagen40 alt="Novedades bioquimicas" src="img/logos/media-partners/novedades-bioquimicas-logo-min.png" />
                        </Col>
                    </Row>
                </Container>
            </Fondo>
        </>      
    );
}
 
export default withTranslation('componentes')(Participan);