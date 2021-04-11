import { useContext } from 'react';
import { CharactersContext } from '~/context/characters';

export const useCharacters = () => {
  const { characters, createCharacter, deleteCharacter, updateCharacter } = useContext(CharactersContext);

  return { characters, createCharacter, deleteCharacter, updateCharacter };
};
