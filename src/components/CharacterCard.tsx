import VisuallyHidden from '@reach/visually-hidden';
import React, { SyntheticEvent } from 'react';
import { Box } from '~/components/Box';

import { Card, CardProps } from '~/components/Card';
import { IconButton } from '~/components/IconButton';
import { Text } from '~/components/Text';
import { Character } from '~/hooks/useCharacters';
import { PencilIcon, TrashIcon } from './Icon';

export type CharacterCardProps = CardProps &
  Character & {
    isActive: boolean;
    onDelete: (event: SyntheticEvent) => void;
    onEdit: (event: SyntheticEvent) => void;
  };

export const CharacterCard = ({
  css,
  icon,
  id,
  isActive,
  onDelete,
  onEdit,
  name,
  ...restOfProps
}: CharacterCardProps) => {
  return (
    <Card
      css={{
        minWidth: 320,
        p: 12,
        boxShadow: `0 0 0 4px ${isActive ? '$colors$blue800' : 'transparent'}`,
        cursor: 'pointer',
        /** @todo https://github.com/modulz/stitches/issues/375 */
        ...(css as {}),
      }}
      {...restOfProps}
    >
      <Box css={{ display: 'flex', alignItems: 'center', mb: 12 }}>
        <Box css={{ backgroundColor: '$gray100', width: 64, height: 64, borderRadius: 8, mr: 16 }} />

        <Box>
          <Text as='h3' css={{ mb: 4 }} size='heading-20'>
            {name}
          </Text>
          <Text css={{ color: '$gray600' }} size='body-14'>
            Last updated 2 hours ago
          </Text>
        </Box>
      </Box>

      <Text as='h4' css={{ mb: 8 }} size='heading-12-uppercase'>
        Completion status
      </Text>
      <Box css={{ backgroundColor: '$gray100', borderRadius: 12, overflow: 'hidden' }}>
        <Box css={{ backgroundColor: '$blue800', width: '50%', height: 12, borderRadius: 12 }} />
      </Box>
    </Card>
  );
};
