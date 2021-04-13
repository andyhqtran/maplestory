import Dialog, { DialogOverlay } from '@reach/dialog';
import React, { useState } from 'react';

import { Box } from '~/components/Box';
import { CharacterListItem } from '~/components/CharacterList/CharacterListItem';
import { CreateCharacterForm } from '~/components/Form/CreateCharacterForm';
import { PlusIcon } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { Text } from '~/components/Text';
import { useCharacters } from '~/hooks/useCharacters';

export const CharacterList = () => {
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const { characters, deleteCharacter } = useCharacters();

  return (
    <Box as='nav' css={{ display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
      <Box as='header' css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 12 }}>
        <Text as='h2' css={{ color: '$gray800' }} size='heading-12-uppercase'>
          Characters
        </Text>
        <IconButton
          onClick={() => {
            setIsDialogOpened(true);
          }}
          size='micro'
        >
          <PlusIcon size='micro' />
        </IconButton>
      </Box>
      {characters?.map((character) => {
        return (
          <CharacterListItem
            id={character.id}
            key={character.id}
            name={character.name}
            onDelete={() => deleteCharacter(character.id)}
          />
        );
      })}

      <DialogOverlay isOpen={isDialogOpened}>
        <Dialog aria-label='Character creation' onDismiss={() => setIsDialogOpened(false)}>
          <Text as='h1' css={{ mb: 12 }} size='heading-20'>
            Character creation
          </Text>
          <CreateCharacterForm onSubmit={() => setIsDialogOpened(false)} />
        </Dialog>
      </DialogOverlay>
    </Box>
  );
};
