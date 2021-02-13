import React from 'react'
import {Col, Form, Row} from "react-bootstrap";


const SelectInputForm = (props) =>
    (
        <Form.Group as={Row}>
            <Form.Label column sm={2}>{props.title}:</Form.Label>
            <Col sm={10}>
                <Form.Control as="select" defaultValue={""} onChange={props.onChangeValue}>
                    <option value={""} disabled>Choose...</option>
                    {props.items.map(item =>
                        <option key={item.id} value={item.id}>
                            {props.valuesToShow.map(value => {
                                if (value === "") {
                                    return ", "
                                } else {
                                    return item[value]
                                }
                            })}
                        </option>)}
                </Form.Control>
            </Col>
        </Form.Group>
    )


export default SelectInputForm