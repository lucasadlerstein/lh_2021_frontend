import React from 'react';
import FranjaContenidoAnterior from './FranjaContenidoAnterior';
import {Container} from 'reactstrap';
import {conferenciasEmpresas2020, camarasInstituciones2020, mastertalks2020} from '../../arrEventos2020.js';
import styled from '@emotion/styled';
import {withTranslation} from '../../i18n';
 
const Titulo = styled.h2`
    color: var(--colorPrimario);
    font-weight: bold;
    font-size: 3rem;
    text-transform: uppercase;
`;

const Contenido2020 = ({t}) => {
    return (
        <div className="py-5r">
            <Titulo className="text-center">{t('2020.Titulo')}</Titulo>
            
            <FranjaContenidoAnterior eventosMostrar={conferenciasEmpresas2020} titulo={t('Items.ConfEmpresas')} />
            <FranjaContenidoAnterior eventosMostrar={mastertalks2020} titulo={t('Items.Mastertalks')} />
            <FranjaContenidoAnterior eventosMostrar={camarasInstituciones2020} titulo={t('Items.CamarasInstituciones')} />
        </div>
    );
}
 
Contenido2020.with18nextTranslation = async () => ({
    namespacesRequired: ['agenda'],
});

export default withTranslation('agenda')(Contenido2020);