import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './component/Navbar';
import Profile from './component/Profile';
import Biografia from './component/Biografia';
import Sidebar from './component/Sidebar';
import SchedaEsperienza from './component/SchedaEsperienza'
//import MyProfile from './me/mecontext'
import {useState } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import LoadProfile from './component/LoadProfile';

function App() {
  const experiences = [
    {
      role: 'Lead Product Designer',
      company: 'NinjaOne',
      location: 'Austin, Texas, United States',
      achievements: [
        'Contributed across 6 teams within a 600+ person organization.',
        'Grew a non-existent design function to 3 ICs, a design system and cross-product instrumentation.',
        // altri punti elenco qui...
      ],
    },
    {
      role: 'Product Advisor',
      company: 'Socialwyze',
      location: 'Dallas, Texas, United States',
      achievements: [
        'Our mission was to connect the homeless, formerly incarcerated, veterans, and displaced workers with...',
        // altri punti elenco qui...
      ],
    },
    // altri oggetti esperienza qui...
  ];
  const [profile, setProfile] = useState()
  return (
    <>
      <Navbar />
      <Container fluid>
        <LoadProfile profile={profile} setProfile={setProfile}/>
        <Row>
          {/* Feed Principale */}
          <Col xs={8}>
            <Profile />
            <Biografia />
            <SchedaEsperienza experiences={experiences} />
          </Col>

          {/* Sidebar */}
          <Col xs={4}>
            {/* Qui inserisci le connessioni e altre informazioni secondarie */}
            <Sidebar />
          </Col>
        </Row>
      </Container>
      {/* <MyProfile.Provider value={{ profile, setProfile }}></MyProfile.Provider> */}
    </>

  );
}

export default App;
