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
  characters: Character[];
  createCharacter: (character: Omit<Character, 'id'>) => void;
  deleteCharacter: (id: Character['id']) => void;
  updateCharacter: (character: Character) => void;
};

enum ActionType {
  Create = 'CREATE',
  Delete = 'DELETE',
  Fetch = 'FETCH',
  Update = 'UPDATED',
}

type Action =
  | { type: ActionType.Create; character: Character }
  | { type: ActionType.Delete; id: string }
  | { type: ActionType.Fetch; characters: Character[] }
  | { type: ActionType.Update; character: Character };

export const CharactersContext = createContext<State>({
  characters: [],
  createCharacter: noop,
  deleteCharacter: noop,
  updateCharacter: noop,
});

const initialState: Omit<State, 'createCharacter' | 'deleteCharacter' | 'updateCharacter'> = {
  characters: [],
};

const reducer = (state: Omit<State, 'createCharacter' | 'deleteCharacter' | 'updateCharacter'>, action: Action) => {
  switch (action.type) {
    case ActionType.Create:
      return {
        ...state,
        characters: [...state.characters, action.character],
      };
    case ActionType.Delete:
      return {
        ...state,
        characters: state.characters.filter((character) => character.id === action.id),
      };
    case ActionType.Fetch:
      return {
        ...state,
        characters: action.characters,
      };
    case ActionType.Update:
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
  const [characters, setCharacters] = useLocalStorageState<Character[]>('characters', []);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setCharacters([
      {
        avatar: 'test',
        class: 'Buccaneer',
        id: 'test-id',
        name: 'Obsu',
      },
    ]);
  }, []);

  useEffect(() => {
    dispatch({ type: ActionType.Fetch, characters });
  }, []);

  const createCharacter = (character: Omit<Character, 'id'>) => {
    const newCharacter = {
      id: uuidv4(),
      ...character,
    };

    dispatch({ type: ActionType.Create, character: newCharacter });

    setCharacters([...(characters ?? []), newCharacter]);
  };

  const deleteCharacter = (id: Character['id']) => {
    dispatch({ type: ActionType.Delete, id });

    setCharacters(characters.filter((character) => character.id !== id));
  };

  const updateCharacter = (character: Character) => {
    dispatch({ type: ActionType.Update, character });
    const characterIndex = characters.findIndex((currentCharacter) => currentCharacter.id === character.id);

    setCharacters([...characters.slice(0, characterIndex), character, ...state.characters.slice(characterIndex + 1)]);
  };

  return (
    <CharactersContext.Provider
      value={{
        ...state,
        createCharacter,
        deleteCharacter,
        updateCharacter,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
