import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Container } from './styles';

const Heroe: React.FC = () => {
  return (
    <Container>
      <Link to="/">{process.env.REACT_APP_TIMESTAMP}</Link>
    </Container>
  );
};

export default Heroe;
