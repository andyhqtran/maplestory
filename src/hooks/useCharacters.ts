import { useContext } from 'react';
import { CharactersContext } from '~/context/characters';

export const useCharacters = () => {
  return useContext(CharactersContext);
};
