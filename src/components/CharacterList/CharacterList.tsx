import React from 'react';
import { useToasts } from 'react-toast-notifications';

import { Box } from '~/components/Box';
import { CharacterListItem } from '~/components/CharacterList/CharacterListItem';
import { PlusIcon } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { Text } from '~/components/Text';
import { useCharacters } from '~/hooks/useCharacters';

export const CharacterList = () => {
  const { activeCharacter, characters, createCharacter, updateActiveCharacter } = useCharacters();
  const { addToast } = useToasts();

  return (
    <Box as='nav' css={{ display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
      <Box as='header' css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 12 }}>
        <Text as='h2' css={{ color: '$gray800' }} size='heading-12-uppercase'>
          Characters
        </Text>
        <IconButton
          onClick={() => {
            addToast('Successfully created character', { appearance: 'success' });
            createCharacter({
              avatar: 'test-id',
              class: 'Buccaneer',
              name: 'Obsu',
            });
          }}
          size='micro'
        >
          <PlusIcon size='micro' />
        </IconButton>
      </Box>
      {characters.map((character) => {
        return (
          <CharacterListItem
            key={character.id}
            name={character.name}
            isSelected={activeCharacter?.id === character.id}
            onClick={() => updateActiveCharacter(character.id)}
          />
        );
      })}
    </Box>
  );
};
