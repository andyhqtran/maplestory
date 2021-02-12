import { useLocalStorage } from 'react-use';
import { v4 as uuidv4 } from 'uuid';

export type Character = {
  name: string;
  icon: string;
  id: string;
};

// const initialData: Character[] = [{ name: 'Character', icon: ' IconName', id: uuidv4() }];

export const useCharacters = (initialState?: Character[]) => {
  const [characters, setCharacters, removeCharacters] = useLocalStorage<Character[]>('characters', initialState);
  const [activeCharacter, setActiveCharacter, removeActiveCharacter] = useLocalStorage<Character>(
    'activeCharacter',
    initialState?.[0],
  );

  const createCharacter = (character: Character) => {
    if (!activeCharacter) {
      setActiveCharacter(character);
    }

    setCharacters([...(characters || []), character]);
  };

  const deleteCharacter = (id: Character['id']) => {
    const filteredCharacters = characters?.filter((character) => character.id !== id) ?? [];
    const hasLessThanOneCharacters = filteredCharacters?.length < 1;

    if (hasLessThanOneCharacters) {
      removeCharacters();
    } else {
      setCharacters(filteredCharacters);
    }

    /** @todo Maybe remove weeklies when character is deleted? */
    // if (weeklies?.[id]) {
    //   const { [id]: removeWeekly, ...remainingWeeklies } = weeklies;

    //   setWeeklies(remainingWeeklies);
    // }
  };

  return {
    activeCharacter,
    characters,
    createCharacter,
    deleteCharacter,
    setActiveCharacter,
    removeActiveCharacter,
    removeCharacters,
  };
};
