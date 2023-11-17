import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Sidebar({ profile }) { 
// Modifichiamo profile in profileList

    return (
        <>
            <Container className='boxContainer'>
                <Row>
                    <Col>
                        <h5>Persone che potresti conoscere</h5>
                        <p>Dalla scuola o dall'università</p>
                    </Col>
                </Row>
                {profile.map((p) =>
                    <Row>
                        <Col>
                            <Image />
                            <p>{p.name} {p.surname}</p>
                            <p>{p.title}</p>
                            <Button variant="primary">Messaggio</Button>{' '}
                        </Col>
                    </Row>
                )}
            <Row>
                <Col>
                    <Image />
                </Col>
                <Col>
                    <p>Nome e Cognome</p>
                    <p>Ruolo dell'utente</p>
                    <Button variant="primary">Messaggio</Button>{' '}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image />
                </Col>
                <Col>
                    <p>Nome e Cognome</p>
                    <p>Ruolo dell'utente</p>
                    <Button variant="primary">Messaggio</Button>{' '}
                </Col>
            </Row>
        </Container >
        </>
    );
}