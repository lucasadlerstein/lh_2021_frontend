import React from 'react';
import styled from '@emotion/styled';

const Titulo = styled.h1`
    text-transform: uppercase;
    font-size: 4rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 4rem;
`;

const Texto = styled.p`
    margin: 1rem auto;
    width: 80%;
    font-size: 2rem;
    strong {
        font-weight: bold;
    }
`;

const ComoSolicitar = () => {
    return (
        <div className="py-10 container">
            <Titulo>¿Cómo solicitar mi certificado?</Titulo>
            <Texto><strong>Paso 1:</strong> Abonar el monto correspondiente según tu país.</Texto>
            <Texto>
                <strong>Paso 2:</strong> Enviar un email a <a href="mailto:certificados@latamhospitals.com">certificados@latamhospitals.com</a> con la siguiente información:<br/>
                - Comprobante de pago.<br/>
                - Nombre, Apellido, Email con el que participó.<br/>
                - Nombre de la/s conferencia/s para recibir el certificado.
            </Texto>
            <Texto><strong>Importante:</strong> el valor es por cada certificado.</Texto>
        </div>
    );
}
 
export default ComoSolicitar;