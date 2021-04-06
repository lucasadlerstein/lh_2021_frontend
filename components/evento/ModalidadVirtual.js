import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {Container} from 'reactstrap';
import {withTranslation} from '../../i18n';

const Fondo = styled.section`
    background-color: var(--colorSecundario);
    @media (min-width: 540px){
        text-align: right;
    }
`;

const Contenedor = styled(Container)`
    position: relative;
`;

const DivImagen = styled.div`
    display: none;  
    @media (min-width: 768px){
        display: block;
        position: absolute;
        width: 35%;
        bottom: -1px;
    }
`;

const Parrafo = styled.p`
    color: white;
    font-size: 2.2rem;
    &:last-of-type {
        margin-bottom: 4rem;
    }
    @media (min-width: 768px){
        max-width: 65%;
        margin: 0 0 2.5rem auto;
    }
`;


const ModalidadVirtual = ({t}) => {
    return (
        <Fondo>
            <Contenedor className="py-10">
                <DivImagen>
                    <img src="img/IlustracionEvento1.png" alt="" />
                </DivImagen>
                <div>
                    <h2 className="text-white">{t('Virtual.Titulo')}</h2>
                    <Parrafo>
                        {t('Virtual.ParrafoUno')}
                    </Parrafo>
                    <Parrafo>
                        {t('Virtual.ParrafoDos')}
                    </Parrafo>
                    <Link href="#newsletter">
                        <a className="btn-lh btn-blanco fs-2">{t('Virtual.BotonUno')}</a>
                    </Link>
                    <Link href="/agenda">
                        <a className="btn-lh btn-prim fs-2">{t('Virtual.BotonDos')}</a>
                    </Link>
                </div>
            </Contenedor>
        </Fondo>
    );
}
 
export default withTranslation('evento')(ModalidadVirtual);