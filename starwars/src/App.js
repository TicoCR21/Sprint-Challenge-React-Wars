import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, css } from "styled-components"
import theme from "./theme/theme";
import axios from "axios";


const PokemonContainer = styled.div`
  height : 100%;
  width : 80%;
  display : flex;
  justify-content : center;
  flex-wrap : wrap;
  background : red;
  margin: 0 auto;
`;

const PokemonCard = styled.div`
  height: 700px;
  width : 700px;
  display : flex;
  justify-content : space-around;
  align-items : center;
  background : blue;
  margin : 40px; 

`;

function GetPokemon( { name, url } )
{

  return (
    <PokemonCard key = { name }>
      <div> 
        <img src = { url } alt = { name } />
      </div>
    </PokemonCard>
  );
}


const App = () => 
{
  // starting
  const [ loading,     setLoading     ] = useState( true                                );
  const [ pokemons,    setPokemons    ] = useState( []                                  );
  const [ baseURL,     setBaseURL     ] = useState( "https://pokeapi.co/api/v2/pokemon" );
  const [ previousURL, setPreviousURL ] = useState( null                                );
  const [ nextURL,     setNextURL     ] = useState( null                                ); 

  // pokemon info
  const pokemonImageURL = useState( "" );

  useEffect( () =>
  {
    axios.get( baseURL )
      .then( response =>
        {
          //console.log(  );
          response.data.results.map( pokemon => 
            {
              axios.get( pokemon.url )
                  .then( response2 =>
                  { 
                    //console.log( response2.data.sprites );
                    setPokemons( prev => prev.concat( { name : pokemon.name, url : response2.data.sprites.front_default } ) );           
                  } )
            } );

          setPreviousURL( response.data.previous );
          setNextURL( response.data.next );
          setLoading( false );
        } )
      .catch( response => console.log( "Something Went Wrong!!!" ) );
  }, [ baseURL ] );

  console.log( pokemons );

  
  return (
    <ThemeProvider theme = { theme }>
      <PokemonContainer>
        { pokemons !== [] ? pokemons.map( pokemon => GetPokemon( pokemon ) ) : "" }
      </PokemonContainer>
    </ThemeProvider>
  );
}

export default App;