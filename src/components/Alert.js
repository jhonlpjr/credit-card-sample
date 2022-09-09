import React from 'react';
import { Fragment } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function Alerta(props) {
    return (
        <Fragment>
            {
                props.resCode == '1' ?
                    <Alert key='success' variant='primary' show={props.visible} >
                        <Alert.Heading>Pago Exitoso</Alert.Heading>
                        <p>
                            {props.description}
                        </p>
                    </Alert> : <Alert key='warning' variant='warning' show={props.visible} >
                        <Alert.Heading>Pago Fallido</Alert.Heading>
                        <p>
                            {props.description}
                        </p>
                    </Alert>
            }
        </Fragment>
    );
}
