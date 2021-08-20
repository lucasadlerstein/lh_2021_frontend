import React from 'react';
import {Container} from 'reactstrap';
import styled from '@emotion/styled';
import {withTranslation} from '../../i18n';

const Iframe = styled.iframe`
    width: 95%;
    min-height: 20rem;
    height: 100%;
    @media (min-width: 768px){
        width: 85%;
        min-height: 56rem;
    }
    margin-top: 2rem;
`;

const GrabacionYoutube = ({id, t}) => {
    return (
        <div className="py-5r">
            <Container className="text-center">
                <h2>{t('Charla.VerGrabacion')}</h2>
                <Iframe src={`https://www.youtube.com/embed/${id}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
            </Container>
        </div>
    );
}
 
export default withTranslation('charla')(GrabacionYoutube);