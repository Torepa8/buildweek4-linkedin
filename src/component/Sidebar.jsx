import React from 'react';
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Sidebar() {
    return (
        <>
        <Container className='boxContainer'>
            <Row>
                <Col>
                    <h5>Persone che potresti conoscere</h5>
                    <p>Dalla scuola o dall'università</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image/>
                </Col>
                <Col>
                    <p>Nome e Cognome</p>
                    <p>Ruolo dell'utente</p>
                    <Button variant="primary">Messaggio</Button>{' '}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image/>
                </Col>
                <Col>
                    <p>Nome e Cognome</p>
                    <p>Ruolo dell'utente</p>
                    <Button variant="primary">Messaggio</Button>{' '}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image/>
                </Col>
                <Col>
                    <p>Nome e Cognome</p>
                    <p>Ruolo dell'utente</p>
                    <Button variant="primary">Messaggio</Button>{' '}
                </Col>
            </Row>
        </Container>
        </>
    );
    }