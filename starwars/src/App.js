import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GetPokemon from "./components/Character";
import axios from "axios";
import { PokemonContainer, Buttons, PokemonHeader, LoadingHeader } from "./AppStyles";

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
    setLoading( true );
    axios.get( baseURL )
      .then( response =>
        {
          response.data.results.map( pokemon => 
            {
              axios.get( pokemon.url )
                  .then( response2 =>
                  { 
                    setPokemons( prev => prev.concat( 
                      { 
                        name : pokemon.name, 
                        url : response2.data.sprites.front_default, 
                        abilities : response2.data.abilities.map( ability => ability.ability.name ),
                        hp : response2.data.stats[ 0 ].base_stat,
                        types : response2.data.types.map( type => type.type.name )
                      } ) );           
                  } )
                  .catch( response2 => console.log( "Something Went Wrong!!!" ) );
            } );

          setPreviousURL( response.data.previous );
          setNextURL( response.data.next );
          setLoading( false );
        } )
      .catch( response => console.log( "Something Went Wrong!!!" ) );
  }, [ baseURL ] );

  return (
    <ThemeProvider theme = { theme }>
      <PokemonHeader>
        <p>Pokemon Card Collection</p>
      </PokemonHeader>

      <Buttons>
        <button onClick = { e => 
        {
          e.preventDefault();
          if( previousURL )
          {
            setBaseURL( previousURL );
            setPokemons( [] );
          }
            
        } }>Back Page</button>
        
        { loading ? <LoadingHeader>Loading...</LoadingHeader> : "" }
        
        <button onClick = { e => 
        {
          e.preventDefault();
          if( nextURL )
          {
            setBaseURL( nextURL );
            setPokemons( [] );
          }
            

        } }>Next Page</button>
      </Buttons>

      <PokemonContainer>
        { pokemons !== [] ? pokemons.map( pokemon => GetPokemon( pokemon ) ) : "" }
      </PokemonContainer>
    </ThemeProvider>
  );
}

export default App;