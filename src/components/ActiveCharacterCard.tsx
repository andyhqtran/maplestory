import React from 'react';
import { Box } from '~/components/Box';
import { Card } from '~/components/Card';
import { Text } from '~/components/Text';

import { useCharacters } from '~/hooks/useCharacters';

export const ActiveCharacterCard = () => {
  const { activeCharacter } = useCharacters();

  if (!activeCharacter) return null;

  return (
    <Card
      as='article'
      css={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifySelf: 'flex-end',
        mx: -12,
        p: 12,
      }}
    >
      <Box css={{ backgroundColor: '$background', width: '100%', height: 120, borderRadius: 4, mb: 12 }} />
      <Text size='heading-14'>{activeCharacter.name}</Text>
      <Text size='body-12'>{activeCharacter.class}</Text>
    </Card>
  );
};
