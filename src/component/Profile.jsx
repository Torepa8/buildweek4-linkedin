import React, {useState} from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Assicurati di avere le immagini nella cartella public del tuo progetto React
import profileImage from '../img/education.png';
import coverImage from '../img/profile-cover.webp';
import { BsFillVolumeUpFill } from "react-icons/bs";
import { BsCheckLg } from 'react-icons/bs';

export default function Profile() {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    };

    return (
        <>
        <Row>
        {/* Immagine di copertina */}
          <Col md={9} className="profile-section">
            <Image src={coverImage} fluid />
            </Col>
        </Row>
        
            <Row className="align-items-center">
              
              <Col xs={12} sm={4} md={3} lg={12}>
                <Row xs={4}>
                <Image border="light" src={profileImage} style={{ width: '2 rem' }} roundedCircle />
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
                <Button variant="outline-primary">Altro</Button>
              </Col>
            </Row>
            </>
    );
  }
