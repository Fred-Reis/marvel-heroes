import styled from 'styled-components';

import heroeBackground from 'src/assets/heroeBackground.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: url(${heroeBackground}) no-repeat center top;
  background-size: resize;
`;
