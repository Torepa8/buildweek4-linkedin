import React, {useState} from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../img/avatar-placeholder.png';
import coverImage from '../img/profile-cover.webp';
import { BsFillVolumeUpFill } from "react-icons/bs";
import ModalEx from './ModalForm';

export default function Profile() {
   
    return (
        <>
        <Container className='boxContainer'>
          <Row>
          {/* Immagine di copertina */}
            <Image src={coverImage} fluid />
            <Col className='px-4'>
              <Image src={profileImage} className='profileImage' style={{width: 156, marginTop: -124}}/>
            </Col>
            
          </Row>
        
            <Row style={{padding: 24}}> 
                         
              <Col xs={12} sm={4} md={3} lg={12}>
                <Row xs={4}>
                </Row>
                
                <h2>Nome e Cognome Utente <BsFillVolumeUpFill /></h2>
                <h5>Titolo Professionale</h5>
                <p>Milano, Lombardia, Italia</p>
                <p className='fw-semibold text-primary'>795 follower • Più di 500 collegamenti</p>

                <Button className='me-1' style={{borderRadius: 999, fontWeight: 'bold'}} variant="primary">Disponibile per</Button>{' '}
                <ModalEx className='me-1'  variant="outline-primary" />
                <Button className='ms-2' style={{borderRadius: 999, fontWeight: 'bold'}} variant="outline-secondary">Altro</Button>{' '}
                               
              </Col>
              
              <Col xs={12} sm={8} md={9} lg={10}>
                
              </Col>
            </Row>
  
            <Row>
              <Col>
              
              </Col>
            </Row>
            </Container>
            </>
    );
  }
