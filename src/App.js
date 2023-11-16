import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './component/Navbar';
import Profile from './component/Profile';
import Biografia from './component/Biografia';
import Sidebar from './component/Sidebar';
import MyProfile from './me/mecontext'
import {useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [profile, setProfile] = useState()
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          {/* Feed Principale */}
          <Col xs={8}>
            <Profile />
            <Biografia />
          </Col>

          {/* Sidebar */}
          <Col xs={4}>
            {/* Qui inserisci le connessioni e altre informazioni secondarie */}
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <MyProfile.Provider value={{ profile, setProfile }}></MyProfile.Provider>
    </>

  );
}

export default App;
