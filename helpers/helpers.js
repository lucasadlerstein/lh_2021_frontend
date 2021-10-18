import Swal from 'sweetalert2';

export function AlertaSwal(title, text, icon, timer) {
    Swal.fire({title, text, icon, timer});
}

export function getLocationAndTimeZone(hora, pais, codigo) {
    switch (pais) {
        case "Bolivia":
        case "Cuba":
        case "Paraguay":
        case "Puerto Rico":
        case "Republica Dominicana":
        case "República Dominicana":
        case "Venezuela":
            return {
                obj: {
                    hora: (Number(hora.slice(0,2)) - 1) + hora.slice(2,5),
                    localizacion: pais,
                    codigo,
                    diferencia: -1
                }
            } 

        case "Colombia":
        case "Ecuador":
        case "Mexico":
        case "Panamá":
        case "México":
        case "Panama":
        case "Peru":
        case "Perú":
            return {
                obj: {
                    hora: (Number(hora.slice(0,2)) - 2)  + hora.slice(2,5),
                    localizacion: pais,
                    codigo,
                    diferencia: -2
                }
            } 

        case "Costa Rica":
        case "El Salvador":
        case "Guatemala":
        case "Honduras":
        case "Nicaragua":
            return {
                obj: {
                    hora: (Number(hora.slice(0,2)) - 3)  + hora.slice(2,5),
                    localizacion: pais,
                    codigo,
                    diferencia: -3
                }
            } 

        case "Espana":
        case "España":
        case "Spain":
            return {
                obj: {
                    hora: (Number(hora.slice(0,2)) + 4)  + hora.slice(2,5),
                    localizacion: pais,
                    codigo,
                    diferencia: 4
                }
            }

        case "Argentina":
        case "Brasil":
        case "Brazil":
        case "Chile":
        case "Uruguay":
            return {
                obj: {
                    hora,
                    localizacion: pais,
                    codigo,
                    diferencia: 0
                }
            }
            
        default:
            return {
                obj: {
                    hora,
                    localizacion: 'Arg/Bra/Chi/Par/Uru',
                    codigo: 'Arg',
                    diferencia: 0
                }
            }
    }
}