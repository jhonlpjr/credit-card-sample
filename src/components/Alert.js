import React from 'react';
import { Fragment } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function Alerta(props) {
    return (
        <Fragment>
            {
                props.errorCode == '1' ?
                    <Alert key='success' variant='primary' show={props.visible} >
                        <Alert.Heading>Pago Exitoso</Alert.Heading>
                        <p>
                            {props.errorText}
                        </p>
                    </Alert> : <Alert key='warning' variant='warning' show={props.visible} >
                        <Alert.Heading>Pago Fallido</Alert.Heading>
                        <p>
                            {props.errorText}
                        </p>
                    </Alert>
            }
        </Fragment>
    );
}
