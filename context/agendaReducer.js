import { DIA_ANTERIOR, DIA_SIGUIENTE } from '../types/index';

const Reducer = (state, action) => {
    switch(action.type) {

        case DIA_ANTERIOR:
            if (state.dia === 7) {
                return {
                    ...state,
                    dia: 4
                }
            } else {
                return {
                    ...state,
                    dia: state.dia - 1
                }
            }

        case DIA_SIGUIENTE:
            if(state.dia === 4) {
                return {
                    ...state,
                    dia: 7
                }
            } else {
                return {
                    ...state,
                    dia: state.dia + 1
                }
            }

        default:
            return state;
    }
}
 
export default Reducer;