import React, { useState } from 'react';

import { Box } from '~/components/Primitives/Box';
import { CharacterListItem } from '~/components/CharacterList/CharacterListItem';
import { CreateCharacterForm } from '~/components/Form/CreateCharacterForm';
import { PlusIcon } from '~/components/Primitives/Icon';
import { IconButton } from '~/components/Primitives/IconButton';
import { Text } from '~/components/Primitives/Text';
import { useCharacters } from '~/hooks/useCharacters';
import { Dialog } from '~/components/Primitives/Dialog/Dialog';

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

      <Dialog isOpen={isDialogOpened} onDismiss={() => setIsDialogOpened(false)} title='Character creation'>
        <CreateCharacterForm onSubmit={() => setIsDialogOpened(false)} />
      </Dialog>
    </Box>
  );
};
