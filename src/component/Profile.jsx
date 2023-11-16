import React, {useState} from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../img/avatar-placeholder.png';
import coverImage from '../img/profile-cover.webp';
import { BsFillVolumeUpFill } from "react-icons/bs";
import { BsCheckLg } from 'react-icons/bs';
import ModalEx from './ModalForm';

export default function Profile() {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    };

    return (
        <>
        <Container>
          <Row>
          {/* Immagine di copertina */}
            <Image src={coverImage} fluid />
            <Col>
              <Image src={profileImage} className='profileImage' style={{marginTop: '-200px'}}/>
            </Col>
            
          </Row>
        
            <Row style={{padding: 24}}> 
                         
              <Col xs={12} sm={4} md={3} lg={12}>
                <Row xs={4}>
                </Row>
                
                <h2>Nome e Cognome Utente <BsFillVolumeUpFill /></h2>
                <h5>Titolo Professionale</h5>
                <p>Milano, Lombardia, Italia</p>
              </Col>
              
              <Col xs={12} sm={8} md={9} lg={10}>
                
              </Col>
            </Row>
  
            <Row>
              <Col>
                <Button variant="primary">Messaggio</Button>{' '}
                <Button variant="secondary" onClick={handleFollowClick}> 
              {isFollowing ? <BsCheckLg /> : null} Segui</Button>{' '}
                <ModalEx variant="outline-primary" />
              </Col>
            </Row>
            </Container>
            </>
    );
  }
