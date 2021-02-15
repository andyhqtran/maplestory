import React, { SyntheticEvent } from 'react';
import { Box } from '~/components/Box';

import { Card, CardProps } from '~/components/Card';
import { Text } from '~/components/Text';
import { Character } from '~/hooks/useCharacters';

export type CharacterCardProps = CardProps &
  Character & {
    isActive: boolean;
    onDelete: (event: SyntheticEvent) => void;
  };

export const CharacterCard = ({ css, icon, id, isActive, onDelete, name, ...restOfProps }: CharacterCardProps) => {
  return (
    <Card
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 24,
        py: 16,
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: isActive ? '$blue800' : 'transparent',
        cursor: 'pointer',
        /** @todo https://github.com/modulz/stitches/issues/375 */
        ...(css as {}),
      }}
      {...restOfProps}
    >
      {/** @todo Add images by @drawwithkristi */}
      <Box css={{ backgroundColor: '$gray700', width: '100%', height: 100, mb: 12, borderRadius: 12 }} />

      <Text as='h3' variant='heading-16'>
        {name}
      </Text>

      {/** @todo Add IconButton for character actions */}
      {!isActive && <button onClick={onDelete}>Delete</button>}
    </Card>
  );
};
