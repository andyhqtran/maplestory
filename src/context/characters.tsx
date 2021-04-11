import { noop } from 'lodash';
import React, { createContext, ReactNode, useEffect, useReducer } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { v4 as uuidv4 } from 'uuid';

type Character = {
  avatar: string;
  class: string;
  id: string;
  name: string;
};

type State = {
  activeCharacter?: Character;
  characters: Character[];
  createCharacter: (character: Omit<Character, 'id'>) => void;
  deleteCharacter: (id: Character['id']) => void;
  updateActiveCharacter: (id: Character['id']) => void;
  updateCharacter: (character: Character) => void;
};

enum CharactersActionType {
  Create = 'CHARACTERS_CREATE',
  Delete = 'CHARACTERS_DELETE',
  Fetch = 'CHARACTERS_FETCH',
  Update = 'CHARACTERS_UPDATE',
}

type CharactersActions =
  | { type: CharactersActionType.Create; character: Character }
  | { type: CharactersActionType.Delete; id: Character['id'] }
  | { type: CharactersActionType.Fetch; characters: Character[] }
  | { type: CharactersActionType.Update; character: Character };

enum ActiveCharacterActionType {
  Fetch = 'ACTIVE_CARD_FETCH',
  Update = 'ACTIVE_CARD_UPDATE',
}

type ActiveCharacterActions =
  | { type: ActiveCharacterActionType.Fetch; character?: Character }
  | { type: ActiveCharacterActionType.Update; id: Character['id'] };

const initialState: State = {
  characters: [],
  createCharacter: noop,
  deleteCharacter: noop,
  updateActiveCharacter: noop,
  updateCharacter: noop,
};

export const CharactersContext = createContext(initialState);

const reducer = (
  state: Omit<State, 'createCharacter' | 'deleteCharacter' | 'updateCharacter'>,
  action: CharactersActions | ActiveCharacterActions,
) => {
  switch (action.type) {
    case ActiveCharacterActionType.Fetch:
      return {
        ...state,
        activeCharacter: action.character,
      };
    case ActiveCharacterActionType.Update:
      const character = state.characters.find((character) => character.id === action.id);

      return {
        ...state,
        activeCharacter: character,
      };
    case CharactersActionType.Create:
      return {
        ...state,
        characters: [...state.characters, action.character],
      };
    case CharactersActionType.Delete:
      return {
        ...state,
        characters: state.characters.filter((character) => character.id === action.id),
      };
    case CharactersActionType.Fetch:
      return {
        ...state,
        characters: action.characters,
      };
    case CharactersActionType.Update:
      const characterIndex = state.characters.findIndex((character) => character.id === action.character.id);

      return {
        ...state,
        characters: [
          ...state.characters.slice(0, characterIndex),
          action.character,
          ...state.characters.slice(characterIndex + 1),
        ],
      };
    default:
      throw new Error();
  }
};

export const CharactersProvider = ({ children }: { children: ReactNode }) => {
  const [activeCharacter, setActiveCharacter] = useLocalStorageState<Character | undefined>('active-character');
  const [characters, setCharacters] = useLocalStorageState<Character[]>('characters', []);

  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   setCharacters([
  //     {
  //       avatar: 'test',
  //       class: 'Buccaneer',
  //       id: 'test-id',
  //       name: 'Obsu',
  //     },
  //   ]);
  // }, []);

  useEffect(() => {
    dispatch({ type: ActiveCharacterActionType.Fetch, character: activeCharacter });
    dispatch({ type: CharactersActionType.Fetch, characters });
  }, []);

  const createCharacter = (character: Omit<Character, 'id'>) => {
    const newCharacter = {
      id: uuidv4(),
      ...character,
    };

    dispatch({ type: CharactersActionType.Create, character: newCharacter });

    setCharacters([...(characters ?? []), newCharacter]);
  };

  const deleteCharacter = (id: Character['id']) => {
    dispatch({ type: CharactersActionType.Delete, id });

    setCharacters(characters.filter((character) => character.id !== id));
  };

  const updateCharacter = (character: Character) => {
    dispatch({ type: CharactersActionType.Update, character });
    const characterIndex = characters.findIndex((currentCharacter) => currentCharacter.id === character.id);

    setCharacters([...characters.slice(0, characterIndex), character, ...state.characters.slice(characterIndex + 1)]);
  };

  const updateActiveCharacter = (id: Character['id']) => {
    dispatch({ type: ActiveCharacterActionType.Update, id });

    const character = characters.find((character) => character.id === id);

    setActiveCharacter(character);
  };

  return (
    <CharactersContext.Provider
      value={{
        ...state,
        createCharacter,
        deleteCharacter,
        updateActiveCharacter,
        updateCharacter,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
