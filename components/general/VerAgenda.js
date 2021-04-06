import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { withTranslation } from '../../i18n';

const Fondo = styled.div`
    background-color: #2f2535;
    text-align: center;
`;

const Boton = styled.a`
    text-transform: uppercase;
    font-size: 4rem;
    border-radius: 5rem;
    padding: 1rem 5rem;
    &:hover {
        font-size: 4rem;
        border-radius: 5rem;
        padding: 1rem 5rem;
    }
    @media (max-width: 540px){
        font-size: 3rem;
        margin: 1rem 2rem;
    }
`;

const VerAgenda = ({t}) => {
    return (
        <Fondo className="py-5r">
            <Link href="/agenda">
                <Boton className="btn-lh btn-blanco">{t('VerAgenda.Titulo')}</Boton>
            </Link>
        </Fondo>
    );
}
 
export default withTranslation('evento')(VerAgenda);