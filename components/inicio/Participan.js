import React from 'react';
import styled from '@emotion/styled';
import {Container, Row, Col} from 'reactstrap';
import { LazyLoadImage } from "react-lazy-load-image-component";

import {withTranslation} from '../../i18n';

const Fondo = styled.div`
    background-image: url('img/fondo-participan.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

const Imagen75 = styled(LazyLoadImage)`
    width: 75%;
`;

const Imagen40 = styled(LazyLoadImage)`
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
                        <Col xs={6} md={6} lg={6} className="text-center my-auto mx-auto">
                            <Imagen75 alt="MERCK" src="img/logos/21/empresas/Empresa_03.jpg" />
                        </Col>
                        <Col xs={6} md={6} lg={6} className="text-center my-auto mx-auto">
                            <Imagen75 alt="BG ANALIZADORES" src="img/logos/21/empresas/Empresa_02.jpg" />
                        </Col>
                        <Col xs={6} md={6} lg={6} className="text-center my-auto mx-auto">
                            <Imagen75 style={{maxHeight: '10rem!important;', width: "auto"}} alt="Wiener Lab Group" src="img/logos/empresas/wiener_lab.png" />
                        </Col>
                        <Col xs={6} md={6} lg={6} className="text-center my-auto mx-auto">
                            <Imagen75 style={{maxHeight: '10rem!important;', width: "auto"}} alt="Roche" src="img/logos/empresas/roche.png" />
                        </Col>
                        <Col xs={6} md={6} lg={6} className="text-center my-auto mx-auto">
                            <Imagen75 style={{maxHeight: '10rem!important;', width: "auto"}} alt="Thermofisher" src="img/logos/empresas/Logo_thermofisher_latamhospitals.jpg" />
                        </Col>
                        <Col xs={6} md={6} lg={6} className="text-center my-auto mx-auto">
                            <Imagen75 style={{maxHeight: '10rem!important;', width: "auto"}} alt="Bioartis" src="img/logos/empresas/Logo_bioartis_latamhospitals.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 alt="Stamboulian" src="img/logos/21/empresas/Empresa_07.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 alt="Binding Site" src="img/logos/21/empresas/Empresa_08.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 alt="OPTIMedical" src="img/logos/21/empresas/Empresa_10.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 alt="Alifax" src="img/logos/21/empresas/Empresa_09.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 alt="Bernardo Lew" src="img/logos/21/empresas/Empresa_11.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 alt="Snibe" src="img/logos/21/empresas/Empresa_01.jpg" />
                        </Col>


                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 alt="Seido" src="img/logos/empresas/06_SEIDO_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 alt="Diestro" src="img/logos/empresas/04_DIESTRO_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 alt="Siemens" src="img/logos/empresas/01_SIEMENS_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 alt="Diagnostico Chile" src="img/logos/empresas/05_DIAGNOCHILE_logo_Latam_Hospitals-min.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 alt="Sebia" src="img/logos/empresas/sebia.jpg" />
                        </Col>
                        
                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 alt="Mindray" src="img/logos/21/empresas/Empresa_04.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 alt="Exo" src="img/logos/21/empresas/Empresa_05.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center my-auto mx-auto">
                            <Imagen75 alt="Nova Biomedical" src="img/logos/21/empresas/Empresa_06.jpg" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container className="py-5r">
                    <h2 className="text-center mb-5">{t('Instituciones.Titulo.2')}</h2>
                    <Row>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="SNA" src="img/logos/camaras/05_SNA.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="Sociedad brasilera de patologia" src="img/logos/camaras/06_brasilera_patologia.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="Sociedad Argentina de Hematología" src="img/logos/camaras/07_sociedad_hematologia.png" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="Hospital Italiano" src="img/logos/camaras/08_italiano.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="Cubra" src="img/logos/camaras/09_cubra.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="Programa de Acreditacao e Controle da Qualidade" src="img/logos/camaras/10_pacq_nuevo.png" />
                        </Col>


                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="ANMAT" src="img/logos/21/camaras/Camaras_Asociaciones_01.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="ALPCML" src="img/logos/21/camaras/Camaras_Asociaciones_02.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="ACC HSO" src="img/logos/21/camaras/Camaras_Asociaciones_03.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="Red Interamericana Informatica de Salud" src="img/logos/21/camaras/Camaras_Asociaciones_04.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="Sociedad Argentina de Diabetes" src="img/logos/21/camaras/Camaras_Asociaciones_05.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="APTM" src="img/logos/21/camaras/Camaras_Asociaciones_06.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="Asociacion medica peruana" src="img/logos/21/camaras/Camaras_Asociaciones_07.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="SAEM" src="img/logos/21/camaras/Camaras_Asociaciones_08.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="SATI" src="img/logos/21/camaras/Camaras_Asociaciones_09.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="ABA" src="img/logos/21/camaras/Camaras_Asociaciones_10.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="ACHA" src="img/logos/21/camaras/Camaras_Asociaciones_11.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="CAPRODI" src="img/logos/21/camaras/Camaras_Asociaciones_12.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="UAPE" src="img/logos/21/camaras/Camaras_Asociaciones_13.jpg" />
                        </Col>
                        <Col xs={6} md={4} lg={4} className="text-center m-auto">
                            <LazyLoadImage alt="CALAB" src="img/logos/21/camaras/Camaras_Asociaciones_14.jpg" />
                        </Col>
                        <Col xs={6} md={3} lg={3} className="text-center m-auto">
                            <LazyLoadImage alt="FBA" src="img/logos/21/camaras/Camaras_Asociaciones_15.jpg" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Fondo>
                <Container className="py-5r">
                    <h2 className="text-white text-center mb-5">{t('Instituciones.Titulo.4')}</h2>
                    <Row>
                        <Col xs={12} md={12} lg={12} className="text-center">
                            <LazyLoadImage alt="EL CRONISTA" src="img/logos/media-partners/01_EL_CRONISTA_logo_Latam_Hospitals-min.png" />
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