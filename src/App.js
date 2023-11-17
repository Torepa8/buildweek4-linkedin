import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './component/Navbar';
import Profile from './component/Profile';
import Biografia from './component/Biografia';
import Sidebar from './component/Sidebar';
import SchedaEsperienza from './component/SchedaEsperienza'
import SchedaFormazione from './component/SchedaFormazione'

//import MyProfile from './me/mecontext'
import {useState } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import LoadProfile from './component/LoadProfile';

function App() {
  const [profile, setProfile] = useState()
  return (
    <>
      <Navbar />
      <Container fluid>
        <LoadProfile profile={profile} setProfile={setProfile}/>
        <Row>
          {/* Feed Principale */}
          <Col xs={9}>
            <Profile />
            <Biografia />
            <SchedaEsperienza/>
            <SchedaFormazione/>
          </Col>

          {/* Sidebar */}
          <Col xs={3}>
            <Sidebar profile={profile} setProfile={setProfile}/>
          </Col>
        </Row>
      </Container>
      {/* <MyProfile.Provider value={{ profile, setProfile }}></MyProfile.Provider> */}
    </>

  );
}

export default App;
