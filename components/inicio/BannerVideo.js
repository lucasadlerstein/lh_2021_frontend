import React from 'react';
import styled from '@emotion/styled';
import {Container, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const Fondo = styled.div`
    background-image: url('img/fondo-banners.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

const BannerVideo = () => {

    return (
        <Fondo>
            <Container className="py-5r">
                <video autoPlay loop muted style={{width: '100%'}} controls>
                    <source src="img/metricas_lh_2020.mp4" type="video/mp4" />
                    Your browser does not support video.
                </video>
            </Container>
        </Fondo>
    );
}
 
export default BannerVideo;
