import React from 'react';
import PokeList from './PokeList';

const PokemonIndexList = ({display, options, selectedValue, allValue, onOptionSelected, listOfPokemon, btnSize, totalPages, activePage, onSelect, openModal}) => {

  let style ={ display: 'none' }

  if (display) {
    style.display = 'initial'
  } else {
    style.display = 'none'
  }

  return (
    <div style={style} >
      <PokeList
        listOfPokemon={listOfPokemon}
        openModal={openModal} />
    </div>
  )
}

export default PokemonIndexList;
