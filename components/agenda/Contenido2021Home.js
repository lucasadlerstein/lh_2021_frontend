import React from 'react';
import FranjaContenidoHome from './FranjaContenidoHome';
import {Container} from 'reactstrap';
import {camarasInstituciones2021} from '../../camaras-e-instituciones.js';
import {conferenciasEmpresas2021} from '../../conferencias-empresas.js';
import {mastertalks2021} from '../../mastertalks.js';
import styled from '@emotion/styled';
import Link from 'next/link';
import {withTranslation} from '../../i18n';
 
const Titulo = styled.h2`
    color: var(--colorPrimario);
    font-weight: bold;
    font-size: 3rem;
    text-transform: uppercase;
`;

const Contenido2021Home = ({t}) => {
    return (
        <div className="py-5r">
            <div className="text-center pb-5"> 
                <Link href="/agenda">
                    <a className="btn-lh btn-prim bor-rad-5 text-center text-uppercase" style={{padding: '1rem 3rem'}}>
                        {t('VerAgenda2021')}
                    </a>
                </Link>
            </div>
            {/* <Titulo className="text-center">{t('2020.Titulo')}</Titulo> */}
            
            <FranjaContenidoHome eventosMostrar={conferenciasEmpresas2021} titulo={t('Items.ConfEmpresas')} />
            <FranjaContenidoHome eventosMostrar={mastertalks2021} titulo={t('Items.Mastertalks')} />
            <FranjaContenidoHome eventosMostrar={camarasInstituciones2021} titulo={t('Items.CamarasInstituciones')} />
        </div>
    );
}
 
Contenido2021Home.with18nextTranslation = async () => ({
    namespacesRequired: ['agenda'],
});

export default withTranslation('agenda')(Contenido2021Home);