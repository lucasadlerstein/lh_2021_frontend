import React, {useState} from 'react';
import {Container} from 'reactstrap';
import styled from '@emotion/styled';
import {withTranslation} from '../../i18n';

const Fondo = styled.div`
    background-color: var(--colorSecundario);
`;

const Input = styled.input`
    background-color: white;
    color: var(--colorPrimario);
    border-radius: 3rem;
    font-size: 1.8rem;
    border: 2px solid var(--colorPrimario);
    padding: 2rem 1.5rem;
    max-width: 100%;
    width: 100%;
    margin: 1rem 0;
    font-weight: bold;

    &:focus {
        outline: none;
    }

    @media (max-width: 991px){
        margin-bottom: 1rem;
    }
    @media (min-width: 991px){
        max-width: 70%;
        text-align: center;

    }
`;

const Buscador = ({t}) => {
    const [busqueda, setBusqueda] = useState('');

    const handleChange = e => {
        setBusqueda(e.target.value)
    }

    return (
        <Fondo>
            <Container className="py-5r text-center">
                <Input type="text" name="busqueda" value={busqueda} onChange={handleChange} placeholder={t('Buscador')} />
            </Container>
        </Fondo>
    );
}
 
Buscador.with18nextTranslation = async () => ({
    namespacesRequired: ['agenda'],
});

export default withTranslation('agenda')(Buscador);