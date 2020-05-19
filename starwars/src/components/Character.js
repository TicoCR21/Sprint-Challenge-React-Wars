// Write your Character component here
import React from 'react';
import { PokemonCard, PokemonHeader, PokemonImage, PokemonDescription } from "./Styles";

export default function( { name, url, abilities, hp, types } )
{
  let x = 0;
  console.log( types );  
  return (
    <PokemonCard key = { name }>
      <PokemonHeader>
        <h1>{ name } </h1>
        <h3>HP <span>{ hp }</span> </h3>
      </PokemonHeader>
      
      <PokemonImage> 
        <img src = { url } alt = { name } />
      </PokemonImage>

      <hr />

      <PokemonDescription>
          <div className="pokemonType">
            { types.map( type =>
                {  
                    x++;
                    return <p  key = { x } > { type } </p>
                } 
            ) }
          </div>

          <div className="abilities">
              <h3>Abilities</h3>
              <ul>
                { abilities.map( ability =>
                    {  
                        x++;
                        return <li  key = { x } > { ability } </li>
                    } ) }
              </ul>
          </div>
      </PokemonDescription>

      
    </PokemonCard>
  );
}