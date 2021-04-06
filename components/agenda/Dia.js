import React, {useContext, useEffect, useState} from 'react';
import styled from '@emotion/styled';
import EventoIndividual from './EventoIndividual';
import EventoIndividualPremium from './EventoIndividualPremium';
import agendaContext from '../../context/agendaContext';

const Contenedor = styled.div`
    border: 8px solid var(--colorPrimario);
    padding: 3rem;
    border-radius: 5rem;
    margin: 0 auto;
    width: 90%;
`;

const Dia = ({eventos, diaProp}) => {

    const AgendaContext = useContext(agendaContext);
    const { dia } = AgendaContext;

    const [hayAlgo, setHayAlgo] = useState(true);

    useEffect(() => {
        if (document.querySelector('.evento-individual')) {
            setHayAlgo(true);
        } else {
            setHayAlgo(false);
        }
    }, [dia])

    return (
        <Contenedor>
            {
                eventos.map((evento, index) => {
                    if (evento.fecha === (diaProp + 1)) {
                        if(evento.e_plan === 'avanzado' || evento.e_plan === 'premium' ) {
                            return (
                                <EventoIndividualPremium key={evento.id} evento={evento}  />
                            )
                        } else {
                            return (
                                <EventoIndividual key={evento.id} evento={evento}  />
                            )
                        }
                    } 
                })
            }
            {!hayAlgo ? (
                <div className="container text-center py-5r">
                    <p className="m-0 p-0 fs-3">Estamos terminando de definir los horarios de las actividades de este día.</p>
                </div>
            ) : null}
        </Contenedor>
    );
}
 
export default Dia;