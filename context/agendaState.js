import React, { useReducer } from 'react';
import agendaContext from './agendaContext';
import agendaReducer from './agendaReducer';
import { DIA_SIGUIENTE, DIA_ANTERIOR } from '../types/index';

const AgendaState = ({children}) => {

    const d = new Date();
    let diaDeHoy = 0;

    if(d.getMonth() === 10) {
        // NOVIEMBRE
        switch (d.getDate()) {
            case 23:
                diaDeHoy = 0;
                break;
            case 24:
                diaDeHoy = 1;         
                break;
            case 25:
                diaDeHoy = 2;         
                break;

            case 26:
                diaDeHoy = 3;         
                break;
            
            case 27:
                diaDeHoy = 4;         
                break;
                
            case 28:
                diaDeHoy = 7;         
                break;

            case 29:
                diaDeHoy = 7;         
                break;

            case 30:
                diaDeHoy = 7;         
                break;    

            default:
                diaDeHoy = 0;
                break;
        }
    } else if (d.getMonth() === 11) {
        // DICIEMBRE
        switch (d.getDate()) {
            case 1:
                diaDeHoy = 8;
                break;

            case 2:
                diaDeHoy = 9;
                break;
        
            default:
                diaDeHoy = 0;
                break;
        }
    } else {
        // OTRO
        diaDeHoy = 0;
    }

    const stateInicial = {
        dia: diaDeHoy
    }

    const [ state, dispatch ] = useReducer(agendaReducer, stateInicial);

    // Functions
    const diaSiguiente = () => {
        dispatch({
            type: DIA_SIGUIENTE
        });
    }

    const diaAnterior = () => {
        dispatch({
            type: DIA_ANTERIOR
        });
    }

    return (
        <agendaContext.Provider
            value={{
                dia: state.dia,
                diaSiguiente,
                diaAnterior
            }}
        >
            {children}
        </agendaContext.Provider>
    );
}
 
export default AgendaState;