import React from 'react';
import { Container } from 'react-bootstrap';
import Subheader from '../Header/Subheader';

export default function SubLayout(props) {
  return (
    <div>
      <Subheader />
      <Container style={{ paddingTop: '1rem' }}>{props.children}</Container>
    </div>
  );
}
