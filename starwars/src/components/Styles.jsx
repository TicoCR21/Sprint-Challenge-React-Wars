import styled, { css } from "styled-components";

const PokemonCard = styled.div`
  height: 700px;
  width : 700px;
  display : flex;
  flex-direction : column;
  margin : 40px;
  padding: 30px;
  border-radius : 30px;
  background: #FFD300;
`;

const PokemonHeader = styled.div`
  display : flex;

  h1
  {
    text-transform : capitalize;
    margin-left : 30px;
    width: 80%;
  }

  h3
  {
    align-self : flex-end;
    font-size : 1.2rem;
    
    span
    {
      font-size : 2rem;
    }
  }
`;

const PokemonImage = styled.div`
  background: linear-gradient( to left, rgba( 10, 10 , 10, 1 ), rgba( 218, 165, 32, 1 ) );

  width: 100%;
  height: 350px;
  display : flex;
  justify-content : center;
  
  img
  {
    width: 400px;
    height : 100%;
  }
`;

const PokemonDescription = styled.div`
    background: #FDA50F;

    h3
    {
        font-size : 2.1rem;
        letter-spacing: 1.2px;
        font-weight : 600;
        margin-left: 15px; 
    }

    ul
    {
        margin-top: -23px;
        margin-left: 25px; 
    }

    li
    {
        font-size : 1.8rem;
        text-transform : capitalize;
    }

    .pokemonType
    {
        display : flex;
        justify-content: center;
        margin: 20px 0;

        p
        {
            font-size : 2rem;
            padding: 20px 60px;
            margin: 0 30px;
            border-radius: 10px;  
            background : yellow;  
        }
    }
`;

export { PokemonCard, PokemonHeader, PokemonImage, PokemonDescription };