import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SchedaEsperienza = ({ experiences }) => {
  return (
    <div>
      {experiences.map((exp, index) => (
        <Card key={index} className="mb-3">
          <Card.Header as="h5">{exp.role}</Card.Header>
          <Card.Body>
            <Card.Title>{exp.company}</Card.Title>
            <Card.Text>{exp.location}</Card.Text>
            <ListGroup variant="flush">
              {exp.achievements.map((achievement, index) => (
                <ListGroup.Item key={index}>{achievement}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default SchedaEsperienza;