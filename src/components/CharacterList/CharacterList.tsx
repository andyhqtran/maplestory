import React from 'react';
import { useLocalStorage } from 'react-use';

import { Box } from '~/components/Box';
import { Button } from '~/components/Button';
import { CharacterListItem } from '~/components/CharacterList/CharacterListItem';
import { Text } from '~/components/Text';
import { useCharacters } from '~/hooks/useCharacters';

export const CharacterList = () => {
  const { characters, createCharacter, updateCharacter } = useCharacters();

  return (
    <Box as='nav' css={{ display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
      <Text as='h2' css={{ mb: 12, color: '$gray800' }} size='heading-12-uppercase'>
        Characters
      </Text>
      {characters.map((character) => {
        return <CharacterListItem key={character.id} name={character.name} />;
      })}
      <Button
        onClick={() => {
          updateCharacter({
            avatar: '',
            id: 'test-id',
            name: 'Obsu-2',
            class: 'Buccaneer',
          });
        }}
        size='small'
      >
        Update character
      </Button>
      <Button
        onClick={() => {
          createCharacter({
            avatar: 'test-id',
            class: 'Buccaneer',
            name: 'Obsu',
          });
        }}
        size='small'
      >
        Create character
      </Button>
    </Box>
  );
};
