import React from 'react';
import { useHistory, Link } from 'react-router-dom';

// import { Container } from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  return <Link to="/heroe">{process.env.REACT_APP_TIMESTAMP}</Link>;
};

export default Home;
