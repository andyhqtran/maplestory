import Dialog, { DialogOverlay } from '@reach/dialog';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import { Box } from '~/components/Box';
import { Button } from '~/components/Button';
import { CharacterListItem } from '~/components/CharacterList/CharacterListItem';
import { CreateCharacterForm } from '~/components/Form/CreateCharacterForm';
import { PlusIcon } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { Input } from '~/components/Input';
import { Text } from '~/components/Text';
import { MSClass } from '~/constants/maplestory';
import { useCharacters } from '~/hooks/useCharacters';

export const CharacterList = () => {
  const [isDialogOpened, setIsDialogOpened] = useState(false);
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
            setIsDialogOpened(true);
          }}
          size='micro'
        >
          <PlusIcon size='micro' />
        </IconButton>
      </Box>
      {characters.map((character) => {
        return (
          <CharacterListItem
            id={character.id}
            key={character.id}
            name={character.name}
            isSelected={activeCharacter?.id === character.id}
            onClick={() => updateActiveCharacter(character.id)}
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
