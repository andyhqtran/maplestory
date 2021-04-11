import React from 'react';
import { useMountedState } from 'react-use';
import { v4 as uuidv4 } from 'uuid';

import { Box } from '~/components/Box';
import { Button } from '~/components/Button';
import { CharacterCard } from '~/components/CharacterCard';
import { Text } from '~/components/Text';
import { useCharacters } from '~/hooks/useCharacters';

export const CharacterList = () => {
  const isMounted = useMountedState();
  const { activeCharacter, characters, createCharacter, deleteCharacter, setActiveCharacter } = useCharacters();

  const testCharacter = { name: 'Character', icon: ' IconName', id: uuidv4() };

  if (!isMounted()) {
    return null;
  }

  return (
    <Box as='section' css={{ mt: 64, mb: 48 }}>
      <Text as='h2' css={{ mb: 12 }} size='heading-32'>
        Characters
      </Text>
      <Box css={{ display: 'flex', mb: 12, mx: -12, p: 12, overflow: 'auto' }}>
        {characters?.map((character) => {
          const isActiveCharacter = activeCharacter?.id === character.id;
          return (
            <CharacterCard
              css={{ mr: 24 }}
              isActive={isActiveCharacter}
              onClick={() => setActiveCharacter(character)}
              onDelete={(event) => {
                event.stopPropagation();
                !isActiveCharacter && deleteCharacter(character.id);
              }}
              onEdit={(event) => {
                event.stopPropagation();
              }}
              key={character.id}
              {...character}
            />
          );
        })}
      </Box>
      <Button onClick={() => createCharacter(testCharacter)} size='medium'>
        Add new character
      </Button>
    </Box>
  );
};
