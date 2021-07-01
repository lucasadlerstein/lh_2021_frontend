import React from 'react';
import styled from '@emotion/styled';
import {Container, Row, Col} from 'reactstrap';

import {withTranslation} from '../../i18n';

const Fondo = styled.section`
    background-image: url('/img/fondo-mas-info-charla.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

const Informacion = styled.div`
    @media (min-width: 768px){
        width: 65%;
        text-align: left;
        margin: 0;
    }
`;

const MasInfo = ({funcionBotonInscribirme, descripcion, t}) => {
    return (
        <Fondo className="py-10">
            <Container>
                <Informacion>    
                    <h2 className="text-white">{t('Charla.QueTemas')}</h2>
                    <p className="text-white fs-2">{descripcion}</p>
                    <button onClick={() => funcionBotonInscribirme()} className="fs-2 btn-lh btn-sec btn-blanco no-border bor-rad-5" style={{marginTop: '2rem', padding: '1rem 5rem'}}>{t('Charla.Inscribirme')}</button>
                </Informacion>
            </Container>
        </Fondo>
    );
}
 
export default withTranslation('charla')(MasInfo);