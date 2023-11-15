import React, {useState} from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Biografia() {
    return (
        <>
        <Container className='boxContainer'>
            <Row>
                <Col>
                    <h4>Informazioni</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>Ad sint qui enim nostrud eiusmod dolor. Ullamco sit laborum mollit consequat. Ullamco aliqua culpa ullamco deserunt elit Lorem anim. Nulla consequat cupidatat ut sint cillum. Aliquip occaecat pariatur esse ut do minim voluptate eu Lorem nostrud ipsum.</p>
                </Col>
            </Row>
        </Container>
        </>
    );
    }