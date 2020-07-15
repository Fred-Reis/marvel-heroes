import styled from 'styled-components';

import homeBackground from 'src/assets/homeBackground.png';

export const Header = styled.header`
  height: 200px;
  width: 100%;
  position: fixed;
  flex: 1;
  background-color: #ed1d24;
  z-index: -1;

  @media (max-width: 780px) {
    height: 100px;
  }
`;

export const Container = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;
  display: flex;
  background: url(${homeBackground}) no-repeat center top;
  /* background-attachment: fixed; */
  align-items: center;

  padding: 70px;

  input {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 36px;
    width: 250px;
    border-radius: 18px;
    color: #fff;
    font-weight: bold;
    padding: 0 15px 0 15px;

    background-color: #ff8f95;
    border: 2px solid #a6141c;
  }

  img {
    width: 100%;
  }

  ul {
    display: flex;
  }
`;

export const Card = styled.div`
  height: 540px;
  width: 304px;
  background-color: #ff8f95;
  border-radius: 35px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25),
    -10px -10px 10px rgba(255, 255, 255, 0.25);

  border: 2px solid #fff;

  img {
    margin-top: -2px;
    height: 480px;
    border: 2px solid #fff;
    border-radius: 35px;
    object-fit: cover;
  }

  h1 {
    color: #a6141c;
    text-align: center;
  }
`;

export const BackCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 540px;
  width: 304px;
  background-color: #ff8f95;
  border-radius: 35px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25),
    -10px -10px 10px rgba(255, 255, 255, 0.25);

  border: 2px solid #fff;

  h1 {
    color: #a6141c;
    text-align: center;
    margin-top: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    height: 460px;
    margin-top: auto;
    border: 2px solid #fff;
    border-radius: 33px;
    box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.25);
    padding: 20px;

    p {
      height: 300px;

      color: #fff;

      overflow: hidden;
      text-overflow: ellipsis;
    }

    a {
      text-decoration: none;
      height: 50px;
      background-color: #ed1d24;
      color: #fff;
      width: 100%;
      border: none;
      border-radius: 35px;
      margin-top: auto;
      font-weight: bold;
      font-size: 20px;
      align-items: center;
      justify-content: center;
      display: flex;
    }
  }
`;
