import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const ApartadoMerck = () => {
    return (
        <>
            <div className="py-10 text-center">
                <img src="/img/MilliQ_logo_VYellow.png" alt="MILLI Q" />
            </div>

            <div className="py-5r pt-0">
                <Container>
                    <Row>
                        <Col sm={12} lg={4}>
                            <iframe width="100%" height="250" src="https://www.youtube.com/embed/Ee8vm5ORg2w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                        <Col sm={12} lg={4}>
                            <iframe width="100%" height="250" src="https://www.youtube.com/embed/fAFxFlBr4Fo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                        <Col sm={12} lg={4}>
                            <iframe width="100%" height="250" src="https://www.youtube.com/embed/EtA1L1TdMB0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <Container className="text-center">
                    <Row>
                        <Col xs={12} lg={6}>
                            <h5 style={{
                                marginTop: '3rem',
                                fontSize: '2rem'
                            }}>Minimice la complejidad. Amplifique el foco.</h5>
                            <iframe src="//www.slideshare.net/slideshow/embed_code/key/bBsaqtLSenhdkQ" width="668" height="714" frameborder="0" marginWidth="0" marginHeight="0" scrolling="no"
                            style={{border: '1px solid #ccc', borderWidth: '1px', margin: '2rem auto', maxWidth: '100%'}} 
                            allowfullscreen> </iframe>
                        </Col>
                        <Col xs={12} lg={6}>
                            <h5 style={{
                                marginTop: '3rem',
                                fontSize: '2rem'
                            }}>Minimize a complexidade. Aumente o seu foco.</h5>
                            <iframe src="//www.slideshare.net/slideshow/embed_code/key/1ynw0FqHoxINal" width="668" height="714" frameborder="0" marginWidth="0" marginHeight="0" scrolling="no"
                            style={{border: '1px solid #ccc', borderWidth: '1px', margin: '2rem auto', maxWidth: '100%'}} 
                            allowfullscreen> </iframe>
                        </Col>
                        <Col xs={12} lg={6}>
                            <h5 style={{
                                marginTop: '3rem',
                                fontSize: '2rem'
                            }}>Gama Milli-Q. CLX 7000</h5>
                            <iframe src="//www.slideshare.net/slideshow/embed_code/key/w1AXhXHaCo3KUs" width="668" height="714" frameborder="0" marginWidth="0" marginHeight="0" scrolling="no"
                            style={{border: '1px solid #ccc', borderWidth: '1px', margin: '2rem auto', maxWidth: '100%'}} 
                            allowfullscreen> </iframe>
                        </Col>
                        <Col xs={12} lg={6}>
                            <h5 style={{
                                marginTop: '3rem',
                                fontSize: '2rem'
                            }}>Milli-Q Série. CLX 7000</h5>
                            <iframe src="//www.slideshare.net/slideshow/embed_code/key/3G5B5txoYZfDxR" width="668" height="714" frameborder="0" marginWidth="0" marginHeight="0" scrolling="no"
                            style={{border: '1px solid #ccc', borderWidth: '1px', margin: '2rem auto', maxWidth: '100%'}} 
                            allowfullscreen> </iframe>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        </>
                    
    );
}
 
export default ApartadoMerck;