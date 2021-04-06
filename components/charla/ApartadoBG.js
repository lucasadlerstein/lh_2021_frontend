import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const ApartadoBG = () => {
    return (
        <>
            {/* <div className="py-10 text-center m-auto" id="apartado">
                <Container>
                    <Row>
                        <Col xs={6} lg={3} className="m-auto">
                            <img src="/img/logos/empresas/03_BG_Analizadores_logo_Latam_Hospitals-min.jpg" />
                        </Col>
                        <Col xs={6} lg={3} className="m-auto">
                            <img src="/img/logos/empresas/LogoOPTI.jpg" />
                        </Col>
                        <Col xs={6} lg={3} className="m-auto">
                            <img style={{width: '75%'}} src="/img/logos/empresas/binding-site-logo.svg" />
                        </Col>
                        <Col xs={6} lg={3} className="m-auto">
                            <img style={{width: '75%'}} src="/img/logos/empresas/sebia.jpg" />
                        </Col>
                    </Row>
                </Container>
            </div> */}

            <div className="py-5r text-center" id="apartado">
                <Container>
                    <iframe width="80%" height="500" src="https://www.youtube.com/embed/6ZbmNXuxCqY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Container>
            </div>

            <div>
                <Container className="text-center">
                    <h5 style={{
                        marginTop: '3rem',
                        fontSize: '2rem'
                    }}>Portfolio BG Analizadores</h5>
                    <iframe src="//www.slideshare.net/slideshow/embed_code/key/GVI0Orn3ucXokj" width="668" height="714" frameborder="0" marginWidth="0" marginHeight="0" scrolling="no"
                    style={{border: '1px solid #ccc', borderWidth: '1px', margin: '2rem auto', maxWidth: '100%'}} 
                    allowfullscreen> </iframe>                    
                </Container>
            </div>
        </>
                    
    );
}
 
export default ApartadoBG;