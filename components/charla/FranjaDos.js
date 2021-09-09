import React, {useState} from 'react';
import styled from '@emotion/styled';
import {Container, Row, Col} from 'reactstrap';
import {withTranslation} from '../../i18n';
import Link from 'next/link';
import { google, outlook, office365, yahoo, ics } from 'calendar-link';

const Dura = styled.p`
    margin: 1rem 0;
    font-weight: bold;
    &:before {
        position: relative;
        content: url('/img/iconos/clock.svg');
        width: 50px;
        bottom: -3px;
        margin-right: 1rem;
    }
`;

const FranjaDos = ({duracion, titulo, fechaEvento, horaEvento, descripcionEvento, inscripto, t}) => {

    const dias = [
        {
          dia: 1,
          fecha: '23 de Noviembre',
          iFecha: [2020, 11, 23],
          inicia: '20201123T',
          start: '2020/11/23 '
        },
        {
          dia: 2,
          fecha: '24 de Noviembre',
          iFecha: [2020, 11, 24],
          inicia: '20201124T',
          start: '2020/11/24 '
        },
        {
          dia: 3,
          fecha: '25 de Noviembre',
          iFecha: [2020, 11, 25],
          inicia: '20201125T',
          start: '2020/11/25 '
        },
        {
          dia: 4,
          fecha: '26 de Noviembre',
          iFecha: [2020, 11, 26],
          inicia: '20201126T',
          start: '2020/11/26 '
        },
        {
          dia: 5,
          fecha: '27 de Noviembre',
          iFecha: [2020, 11, 27],
          inicia: '20201127T',
          start: '2020/11/27 '
        },
        {
          dia: 6,
          fecha: '28 de Noviembre',
          iFecha: [2020, 11, 28],
          inicia: '20201128T',
          start: '2020/11/28 '
        },
        {
          dia: 7,
          fecha: '29 de Noviembre',
          iFecha: [2020, 11, 29],
          inicia: '20201129T',
          start: '2020/11/29 '
        },
        {
          dia: 8,
          fecha: '30 de Noviembre',
          iFecha: [2020, 11, 30],
          inicia: '20201130T',
          start: '2020/11/30 '
        },
        {
          dia: 9,
          fecha: '01 de Diciembre',
          iFecha: [2020, 12, 1],
          inicia: '20201201T',
          start: '2020/12/01 '
        },
        {
          dia: 10,
          fecha: '02 de Diciembre',
          iFecha: [2020, 12, 2],
          inicia: '20201202T',
          start: '2020/12/02 '
        }
    ]

    const [showCalendar, setShowCalendar] = useState(false);
    const [linkGoogle, setLinkGoogle] = useState(null);
    const [icsArchivo, setIcsArchivo] = useState(null);
    const [linkOutlook, setLinkOutlook] = useState(null);


    const mostrarCalendario = () => {
        botonEvento();
        setShowCalendar(!showCalendar);
    }

    function botonEvento() {
        const event = {
            title: titulo,
            description: descripcionEvento,
            start: "2019-12-29 18:00:00 -0300",
            duration: [duracion, "minutes"],
        };

        const eventOutlook = {
            title: titulo,
            description: descripcionEvento,
            start: "2019-12-29 18:00:00 -0300",
            duration: [duracion, "minutes"],
        };

        // let fechaInicia = '';
    
        // dias.forEach(day => {
        //     if(day.dia === fechaEvento) {
        //         fechaInicia = day.start;
        //     }
        // });

        console.log(fechaEvento.replaceAll('-', '/'))

        event.start = fechaEvento.replaceAll('-', '') + 'T' + horaEvento.slice(0, 2) + '' + horaEvento.slice(3, 5) + '000300Z';
        eventOutlook.start = fechaEvento.replaceAll('-', '/') + horaEvento.slice(0, 2) + ':' + horaEvento.slice(3, 5) + ':00 +0000';

        setLinkGoogle(google(event));
        setLinkOutlook(outlook(eventOutlook));
        setIcsArchivo(ics(event));

        console.log(event)
    }

    return (
        <Container className="py-5r">
            <Row>
                <Col xs={12} lg={2} className="text-center">
                    <Dura className="fs-2">{duracion} min</Dura>
                </Col>
                <Col xs={12} lg={7} className="text-center">
                    
                    {
                        (inscripto) ? (
                            (showCalendar === false) ? (
                                <button onClick={mostrarCalendario} className="btn-lh btn-prim fs-2 bor-rad-5 no-border" style={{display: 'inline-block'}}>{t('Charla.Calendario')}</button>
                            ) : (
                                <>
                                    <Link href={linkGoogle}>
                                        <a className="btn-lh btn-prim bor-rad-5 no-border m-2" target="_blank" rel="nofollow">Google Calendar</a>
                                    </Link>
                                    <Link href={icsArchivo}>
                                        <a className="btn-lh btn-prim bor-rad-5 no-border m-2" rel="nofollow">Apple Calendar</a>
                                    </Link>
                                    <button onClick={botonEvento('google')} className="btn-lh btn-prim bor-rad-5 no-border m-2">Apple Calendar</button>
                                    <Link href={linkOutlook}>
                                        <a className="btn-lh btn-prim bor-rad-5 no-border m-2" target="_blank" rel="nofollow">Outlook Calendar</a>
                                    </Link>
                                </>
                            )
                        ) : null
                    }
                    
                </Col>
                <Col xs={12} lg={3} className="text-center">
                    <p className="fs-2 font-weight-bold" style={{margin: '1rem 0'}}>{t('Charla.Cupos')}</p>
                </Col>
            </Row>
        </Container>
    );
}
 
export default withTranslation('charla')(FranjaDos);