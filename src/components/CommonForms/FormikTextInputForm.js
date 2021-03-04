import {Col, Form, Row} from "react-bootstrap";
import React from "react";
import {useField} from "formik";
import {ErrorLabel} from "../StyledComponents";

const FormikTextInputForm = ({label, ...props}) => {

    const [field, meta] = useField(props);

    return (
        <Form.Group as={Row}>
             <Form.Label column sm={2}>
                {label}
            </Form.Label>
            <Col sm={10}>
                <Form.Control {...field} {...props} type="text"/>
                {meta.touched && meta.error ? (
                    <ErrorLabel>{meta.error}</ErrorLabel>
                ) : null}
                {props.hintTextDown}
            </Col>
        </Form.Group>
        )
}



export default FormikTextInputForm