import styled, { css } from "styled-components";

const PokemonContainer = styled.div`
  height : 100%;
  width : 80%;
  display : flex;
  justify-content : center;
  flex-wrap : wrap;
  margin: 0 auto;
`;

const Buttons = styled.div`
  display : flex;
  height: 200px;
  width: 80%;
  margin: 0 auto;
  align-items : center;
  justify-content: space-around;

  button
  {
    height: 80px;
    width : 300px;
    font-size : 1.8rem;
    background : #ef5350;
    color : white;
    cursor : pointer;
  }
`;

const PokemonHeader = styled.div`
  margin: -10px 0 60px;
  background : #ef5350;
  width: 100%;
  height: 200px;
  display: flex;
  align-items : center;
  
  p
  {
    width : 90%;
    margin: 0 auto;
    font-size : 3rem;
    color : white;
  }
`;

const LoadingHeader = styled.h1`
  color : white;
  font-size : 4rem;
`;

export { PokemonContainer, Buttons, PokemonHeader, LoadingHeader };