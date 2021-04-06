import React, {useContext} from 'react';
import styled from '@emotion/styled';
import {Row, Col} from 'reactstrap';
import agendaContext from '../../context/agendaContext';
import { Carousel } from 'react-responsive-carousel';

const DiaSteper = styled.a`
    padding: 1rem 5rem;
    transition: all 1s ease;
    &:hover {
        padding: 1rem 5rem;
    }
`;

const ContenedorRow = styled(Row)`
    text-align: center;
    margin: 3rem auto;
    justify-content: space-around;
    width: 90%;
`;

const DiasSteper = () => {

    const AgendaContext = useContext(agendaContext);
    const { dia, diaSiguiente, diaAnterior } = AgendaContext;

    const dias = [
        {
            dia: '23 nov'
        },
        {
            dia: '24 nov'
        },
        {
            dia: '25 nov'
        },
        {
            dia: '26 nov'
        },
        {
            dia: '27 nov'
        },
        {
            dia: '28 nov'
        },
        {
            dia: '29 nov'
        },
        {
            dia: '30 nov'
        },
        {
            dia: '1 dic'
        },
        {
            dia: '2 dic'
        }
    ]

    return (
        <>
            <ContenedorRow>
                { (dia === 0) ? <Col sm={4}></Col> : null }
                
                {
                    dias.map((diaRecorriendo, index) => {

                        if(index === (dia - 1)) {
                            return (
                                <Col sm={4} key={index}>
                                    <DiaSteper className="btn-lh btn-prim bor-rad-5 fs-2 opacidad-5" onClick={() => diaAnterior()}>{diaRecorriendo.dia}</DiaSteper>
                                </Col>
                            )
                        }

                        if(index === dia) {
                            return (
                                <Col sm={4} key={index}>
                                    <DiaSteper className="btn-lh btn-prim bor-rad-5 fs-2">{diaRecorriendo.dia}</DiaSteper>
                                </Col>
                            )
                        }

                        if(index === (dia + 1)) {
                            return (
                                <Col sm={4} key={index}>
                                    <DiaSteper className="btn-lh btn-prim bor-rad-5 fs-2 opacidad-5" onClick={() => diaSiguiente()}>{diaRecorriendo.dia}</DiaSteper>
                                </Col>
                            )
                        }
                    })
                }
                { (dia === 9) ? <Col sm={4}></Col> : null }
            </ContenedorRow>
        </>
    );
}
 
export default DiasSteper;