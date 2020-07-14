import React from 'react';
import { useHistory, Link } from 'react-router-dom';

// import { Container } from './styles';

const Heroe: React.FC = () => {
  return <Link to="/">{process.env.REACT_APP_PUBLIC_KEY}</Link>;
};

export default Heroe;
