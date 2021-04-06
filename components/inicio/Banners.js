import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {Container, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Fondo = styled.div`
    background-image: url('img/fondo-banners.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

const ImagenCarrousel = styled.img`
    max-width: 100%;
    border-radius: 3rem!important;
    @media (min-width: 768px){
        max-width: 85%;
    }
`;

const VideoModal = styled.video`
    max-height: 100%;
    max-width: 100%;
    border-radius: 3rem!important;
    @media (min-width: 768px){
        max-width: 85%;
    }
    &:focus {
        outline: none;
    }
`;

const CarouselPersonalizado = styled(Carousel)`
    .carousel .slide {
        background-color: transparent;
    }
`;

const Banners = () => {

    const [indicadores, setIndicadores] = useState(false);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);  
    
    useEffect(() => {
        if(document.querySelector('.thumbs-wrapper')) {
            document.querySelector('.thumbs-wrapper').parentElement.remove();
        }

        if(window.innerWidth > 768) {
            setIndicadores(true);
        } else {
            setIndicadores(false);
        }

        // eslint-disable-next-line
    }, [])

    return (
        <Fondo>
            <Container className="py-5r">
                <CarouselPersonalizado showStatus={false} showIndicators={indicadores} stopOnHover={true} swipeable={true} interval={3000} infiniteLoop={true} showThumbs={false} autoPlay={true} transitionTime={1000} emulateTouch={true}>
                    
                    <button
                        style={{backgroundColor: 'transparent', border: 'none', padding: 0}}
                        onClick={toggle}          
                    >
                        <ImagenCarrousel src="img/banners/Banner_Video_LatamHospitals.jpg" />
                    </button>
                    <ImagenCarrousel src="img/banners/Mastertalk_01_Segre-01.jpg" alt="" />
                    <ImagenCarrousel src="img/banners/Mastertalk_02_Lozada-01.jpg" alt="" />
                    <ImagenCarrousel src="img/banners/Mastertalk_03_Melchor-01.jpg" alt="" />
                    <ImagenCarrousel src="img/banners/MasterTalk_04_Menendez_Montaner.jpg" alt="" />
                    <ImagenCarrousel src="img/banners/Mastertalk_05_Melchor-01.jpg" alt="" />
                    <ImagenCarrousel src="img/banners/Mastertalk_07_Varietti-01.jpg" alt="" />
                    <ImagenCarrousel src="img/banners/Mastertalk_08_Adlerstein-01.jpg" alt="" />
                    <ImagenCarrousel src="img/banners/Mastertalk_09_Nasanovsky-01.jpg" alt="" />
                    <ImagenCarrousel src="img/banners/Mastertalk_10_Muller-01.jpg" alt="" />
                    <ImagenCarrousel src="img/banners/Mastertalk_11_Selman-01.jpg" alt="" />
                </CarouselPersonalizado>
            </Container>
            <Modal centered={true} isOpen={modal} toggle={toggle} style={{backgroundColor: 'transparent', border: 'none'}}>
                {/* <ModalHeader toggle={toggle} style={{backgroundColor: 'white'}}></ModalHeader> */}
                <ModalBody className="text-center" style={{backgroundColor: 'transparent'}}> 
                    <VideoModal controls autoPlay>
                        <source src="img/video_latam_hospitals_portada.m4v" type="video/mp4" />
                        Your browser does not support the video tag.
                    </VideoModal>
                </ModalBody>
            </Modal>
        </Fondo>
    );
}
 
export default Banners;