import React from 'react';
import { Container , Row, Col, Image, Stack } from 'react-bootstrap';
import expImage from '../img/job-position.png';


const SchedaEsperienza = ({ experiences }) => {
  return (
    <div>
      <Container className='boxContainer'>
        <Row>
          <Col>
            <h4>Esperienza</h4>
          </Col>
        </Row>

        {/* Riga di esperienza */}
        <Row className='my-4'>
          <Col xs={1}>
            <Image style={{ width: 64 }} src={expImage} rounded />
          </Col>
          <Col xs={10}>
            <Stack gap={0}>
              <div style={{ fontWeight: 'bold'}}>Job Role</div>
              <div>Company/organization</div>
              <div>Data di inizio - Data di fine</div>
              <div>Città, Regione, Stato</div>
              <div className='mt-2'>Descrizione dell'esperienza Labore quis aliqua reprehenderit do commodo eiusmod ea sunt.</div>
            </Stack>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default SchedaEsperienza;