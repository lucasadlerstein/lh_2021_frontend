import React from 'react';
import styled from '@emotion/styled';
import {Container} from 'reactstrap';
import {withTranslation} from '../../i18n';

const Fondo = styled.div`
    background-image: url('img/fondo-participan.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

const Contenido = styled.div`
    @media (min-width: 540px){
        width: 75%;
    }
`;

const MisionObjetivos = ({t}) => {
    return (
        <Fondo>
            <Container className="py-10">
                <h2 className="text-white">{t('Mision.Titulo')}</h2>
                <Contenido>
                    <p className="fs-2 text-white mb-5">
                        {t('Mision.ParrafoUno')}
                    </p>
                    <p className="fs-2 text-white mb-5">
                        {t('Mision.ParrafoDos')}
                    </p>
                    <p className="fs-2 text-white mb-5">
                        {t('Mision.ParrafoTres')}
                    </p>
                </Contenido>
            </Container>
        </Fondo>
    );
}
 
export default withTranslation('evento')(MisionObjetivos);