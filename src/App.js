import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './component/Navbar';
import Profile from './component/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          {/* Feed Principale */}
          <Col xs={10}>
            <Profile />
          </Col>

          {/* Sidebar */}
          <Col md={3}>
          {/* Qui inserisci le connessioni e altre informazioni secondarie */}
          </Col>
        </Row>
      </Container>
    </>

  );
}

export default App;
