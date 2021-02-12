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
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: isActive ? '$black' : 'transparent',
        /** @todo Fix this after Beta release of `@stitches/react` */
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
