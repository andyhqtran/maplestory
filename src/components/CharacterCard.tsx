import React, { SyntheticEvent } from 'react';

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
        px: 24,
        py: 16,
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: isActive ? '$blue800' : 'transparent',
        /** @todo https://github.com/modulz/stitches/issues/375 */
        ...(css as {}),
      }}
      {...restOfProps}
    >
      <Text as='h3' variant='heading-16'>
        {name}
      </Text>
      {!isActive && <button onClick={onDelete}>Delete</button>}
    </Card>
  );
};
