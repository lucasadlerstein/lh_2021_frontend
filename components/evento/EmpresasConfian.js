import React from 'react';
import styled from '@emotion/styled';
import {Container} from 'reactstrap';
import {withTranslation} from '../../i18n';

const Fondo = styled.div`
    background-image: url('img/fondo-empresas.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 50rem;
`;

const EmpresasConfian = ({t}) => {
    return (
        <Fondo>
            <Container className="text-center py-10">
                <h2 className="text-white">{t('Empresas.Titulo')}</h2>
            </Container>
        </Fondo>
    );
}
 
export default withTranslation('evento')(EmpresasConfian);