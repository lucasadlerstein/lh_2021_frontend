import React from 'react';
import FranjaContenidoHome22 from './FranjaContenidoHome22';
import {Container} from 'reactstrap';
import {empresas,mastertalks,instituciones} from '../../home2022.js';
import styled from '@emotion/styled';
import Link from 'next/link';
import {withTranslation} from '../../i18n';
 
const Titulo = styled.h2`
    color: var(--colorPrimario);
    font-weight: bold;
    font-size: 3rem;
    text-transform: uppercase;
`;

const Contenido2022Home = ({t}) => {
    return (
        <div className="py-5r">
            <div className="text-center pb-5"> 
                <Link href="/agenda">
                    <a target="_blank" className="btn-lh btn-prim bor-rad-5 text-center text-uppercase fs-3"  style={{padding: '1rem 3rem'}}>
                        {t('2022')}
                    </a>
                </Link>
            </div>
            <div className="text-center pb-5"> 
                <Link href="https://2021.latamhospitals.com/agenda">
                    <a target="_blank" className="btn-lh btn-prim bor-rad-5 text-center text-uppercase" style={{padding: '1rem 3rem'}}>
                        {t('VerAgendaCompleta')}
                    </a>
                </Link>
            </div>
            <Titulo className="text-center">{t('2020.Titulo22')}</Titulo>
            
            <FranjaContenidoHome22 eventosMostrar={empresas} titulo={t('Items.ConfEmpresas')} />
            <FranjaContenidoHome22 eventosMostrar={instituciones} titulo={t('Items.CamarasInstituciones')} />
            <FranjaContenidoHome22 eventosMostrar={mastertalks} titulo={t('Items.Mastertalks')} />
        </div>
    );
}
 
Contenido2022Home.with18nextTranslation = async () => ({
    namespacesRequired: ['agenda'],
});

export default withTranslation('agenda')(Contenido2022Home);