import React from 'react';
import FranjaContenidoAnterior from './FranjaContenidoAnterior';
import {Container} from 'reactstrap';
import {conferenciasEmpresas2020, camarasInstituciones2020, mastertalks2020} from '../../arrEventos2020.js';
import styled from '@emotion/styled';
import Link from 'next/link';
import {withTranslation} from '../../i18n';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
 
const Titulo = styled.h2`
    color: var(--colorPrimario);
    font-weight: bold;
    font-size: 3rem;
    text-transform: uppercase;
`;

const Contenido2020 = ({t}) => {
    return (
        <div className="py-5r">
            <div className="text-center pb-5"> 
                <Link href="/agenda">
                    <a className="btn-lh btn-prim bor-rad-5 text-center text-uppercase" style={{padding: '1rem 3rem'}}>
                        {t('VerAgenda2021')}
                    </a>
                </Link>
            </div>
            <Titulo className="text-center">{t('2020.Titulo')}</Titulo>
            <LazyLoadComponent>
                <FranjaContenidoAnterior eventosMostrar={conferenciasEmpresas2020} titulo={t('Items.ConfEmpresas')} />
            </LazyLoadComponent>
            <LazyLoadComponent>
                <FranjaContenidoAnterior eventosMostrar={mastertalks2020} titulo={t('Items.Mastertalks')} />
            </LazyLoadComponent>
            <LazyLoadComponent>
                <FranjaContenidoAnterior eventosMostrar={camarasInstituciones2020} titulo={t('Items.CamarasInstituciones')} />
            </LazyLoadComponent>
        </div>
    );
}
 
Contenido2020.with18nextTranslation = async () => ({
    namespacesRequired: ['agenda'],
});

export default withTranslation('agenda')(Contenido2020);