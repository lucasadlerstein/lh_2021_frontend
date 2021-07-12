import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';
import {ListaIntereses} from '../../InteresesListado.js'
import clienteAxios from '../../config/axios';
import { useTranslation } from 'react-i18next';

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
const Intereses = ({persona}) => {

    const [buscador, setBuscador] = useState('');
    const [misIntereses, setMisIntereses] = useState('covid');

    useEffect( () => {
        if ( persona ) {
            if(persona.intereses !== undefined) {
                setMisIntereses(persona.intereses)
            }
        }
        // eslint-disable-next-line
    }, [persona]);

    const handleChangeBuscador = e => { setBuscador(e.target.value); }

    async function clickInteres(intCode) {
        let intNow = misIntereses;
        if(intNow.includes(intCode)) {
            // setMisIntereses(intNow.replace(intCode, ''));
            intNow = intNow.replace(intCode, '');
        } else {
            // setMisIntereses(intNow.concat(' ', intCode));
            intNow = intNow.concat(' ', intCode);            
        }
        setMisIntereses(intNow);
        console.log(intNow)
        await clienteAxios.post(`/usuarios/cambiar-intereses`, {nuevos: intNow} )
            .then(resp => {
                if(localStorage.getItem('usuario')) {
                    let user = JSON.parse(localStorage.getItem('usuario'));
                    user.intereses = intNow;
                    localStorage.setItem('usuario', JSON.stringify(user));
                }
                console.log(resp)
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
                    <Titulo>Mis intereses</Titulo>
                </TituloBox>
                <SubTitulo>Al hacer clic podrás elegir tus intereses</SubTitulo>
                <SubTitulo className="mt-0">para tener una mejor experiencia en LATAM Hospitals.</SubTitulo>
                <p className="text-white">Si está con fondo blanco, no está seleccionado.</p>
                <Buscador type="text" name="buscador" value={buscador} onChange={handleChangeBuscador} placeholder="Buscador por palabra clave" />
                <Row className="text-center mx-auto">
                    {ListaIntereses.map(interes => {
                        if (buscador === '' ||
                            interes.ES.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(buscador.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()) ||
                            interes.EN.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(buscador.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()) ||
                            interes.PR.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(buscador.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()) ||
                            interes.COD.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(buscador.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()) ) {
                                
                                return (
                                    <InteresInd
                                        className={misIntereses.includes(interes.COD) ? 'bg-interesado' : null}
                                        key={interes.COD}
                                        onClick={() => clickInteres(interes.COD)}
                                            >{interes.ES}
                                    </InteresInd>
                                )
                            }
                    })}
                </Row>

                
            </Container>
        </Fondo>
    );
}
 
export default Intereses;