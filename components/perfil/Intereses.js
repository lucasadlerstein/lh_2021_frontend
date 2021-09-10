import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';
import {ListaIntereses} from '../../InteresesListado.js'
import clienteAxios from '../../config/axios';
import {withTranslation, i18n} from '../../i18n';

const Fondo = styled.div`
    background-image: url('img/fondo-banners.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

const TituloBox = styled.div`
    display: flex;
`;

const Titulo = styled.h2`
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1.5rem;
    margin-left: 2rem;
    @media (max-width: 768px){
        text-align: left;
    }
`;

const SubTitulo = styled.p`
    font-size: 2.5rem;
    color: white;
    margin: 1rem 0 0 0;
`;

const Buscador = styled.input`
    background-color: white;
    color: var(--colorPrimario);
    border-radius: 1.5rem;
    font-size: 1.8rem;
    border: 2px solid var(--colorPrimario);
    padding: 1rem 2rem;
    max-width: 100%;
    width: 100%;
    margin: 1rem 0;
    font-weight: bold;
    max-width: 100%;

    &:focus {
        outline: none;
    }

    @media (min-width: 768px){
        max-width: 50%;
    }
`;

const InteresInd = styled.button`
    background-color: white;
    color: var(--colorPrimario);
    display: block;
    width: fit-content;
    padding: 1rem 2rem;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 1rem;
    margin: .2rem;
    transition: all .3s ease;
    &:hover {
        background-color: #b8b8b8;
    }
    &:focus {
        outline: none;
    }
    @media (max-width: 540px){
        width: 100%;
    }
`;
const Intereses = ({persona, t}) => {

    const [buscador, setBuscador] = useState('');
    const [misIntereses, setMisIntereses] = useState([]);

    useEffect( () => {
        if ( persona ) {
            if(persona.intereses !== undefined) {
                setMisIntereses(JSON.parse(persona.intereses))
            }
        }
        // eslint-disable-next-line
    }, [persona]);

    const handleChangeBuscador = e => { setBuscador(e.target.value); }

    async function clickInteres(intCode) {
        let intNow = misIntereses;
        if (intNow === null) {
            intNow = [];
        }
        if(intNow.includes(intCode)) {
            intNow = intNow.filter(e => e !== intCode);
            document.querySelector(`#${intCode}`).classList.remove('bg-interesado');
        } else {
            document.querySelector(`#${intCode}`).classList.add('bg-interesado');
            intNow.push(intCode);
        }
        setMisIntereses(intNow);

        await clienteAxios.post(`/usuarios/cambiar-intereses`, {nuevos: JSON.stringify(intNow)} )
            .then(resp => {
                if(localStorage.getItem('usuario')) {
                    let user = JSON.parse(localStorage.getItem('usuario'));
                    user.intereses = JSON.stringify(intNow);
                    localStorage.setItem('usuario', JSON.stringify(user));
                }
            }) 
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Fondo id="intereses">
            <Container className="mx-auto py-5r">
                <TituloBox>
                    <svg fill="white" height="4.9rem"  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter"><g><path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" /></g></g><g id="Layer_1"/></svg>                 
                    <Titulo>{t('Intereses.Titulo')}</Titulo>
                </TituloBox>
                <SubTitulo>{t('Intereses.SubTitulo.Uno')}</SubTitulo>
                <SubTitulo className="mt-0">{t('Intereses.SubTitulo.Dos')}</SubTitulo>
                <p className="text-white">{t('Intereses.SubTitulo.Tres')}</p>
                <Buscador type="text" name="buscador" value={buscador} onChange={handleChangeBuscador} placeholder={t('Intereses.SubTitulo.Buscador')} />
                <Row className="text-center mx-auto">
                    {ListaIntereses.map(interes => {
                        if (buscador === '' ||
                            interes.ES.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(buscador.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()) ||
                            interes.EN.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(buscador.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()) ||
                            interes.PR.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(buscador.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()) ||
                            interes.COD.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(buscador.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()) ) {
                                
                                return (
                                    <InteresInd
                                        className={(misIntereses) ? (misIntereses.includes(interes.COD) ? 'bg-interesado' : null) : null}
                                        key={interes.COD}
                                        id={interes.COD}
                                        onClick={() => clickInteres(interes.COD)}
                                            >   {
                                                    (i18n.language === 'es' ? interes.ES : i18n.language === 'en' ? (interes.EN !== '' ? interes.EN : interes.ES ) : (interes.PR !== '' ? interes.PR : interes.ES ))
                                                }
                                    </InteresInd>
                                )
                            }
                    })}
                </Row>

                
            </Container>
        </Fondo>
    );
}
 
Intereses.with18nextTranslation = async () => ({
    namespacesRequired: ['perfil'],
});

export default withTranslation('perfil')(Intereses);