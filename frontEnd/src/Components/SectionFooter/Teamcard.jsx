import React from 'react';
import { Card } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

function TeamCard({ name, description }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <FaUser />
      </Card.Body>
    </Card>
  );
}

export default TeamCard;