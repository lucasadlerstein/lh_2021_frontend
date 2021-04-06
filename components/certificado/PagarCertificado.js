import React from 'react';
import styled from '@emotion/styled';
import {Row, Col, Container} from 'reactstrap';

const Fondo = styled.div`
    background-image: url('img/fondo-participan.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    position: relative;
    text-align: center;
`;

const PagarCertificado = () => {
    return (
        <Fondo className="py-10">
            <Container>
                <Row>
                    <Col className="no-mobile" lg={3}></Col>
                    <Col xs={12} lg={3} className="text-center">
                        <p className="text-white fs-2">Argentina</p>
                        <a href="https://mpago.la/1bay9jb " target="_blank" className="btn-lh btn-blanco fs-2 mx-0">Mercado Pago</a>
                        <p className="text-white mt-4">(AR$ 499,99)</p>
                    </Col>
                    <Col xs={12} lg={3} className="text-center">
                        <p className="text-white fs-2">América y Europa</p>
                        <a href="https://www.paypal.com/paypalme/LatamHospitals" target="_blank" className="btn-lh btn-blanco fs-2 mx-0">PayPal</a>
                        <p className="text-white mt-4">(U$D 4.99)</p>
                    </Col>
                    <Col className="no-mobile" lg={3}></Col>
                </Row>
            </Container>
        </Fondo>
    );
}
 
export default PagarCertificado;