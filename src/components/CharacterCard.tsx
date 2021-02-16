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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 200,
        px: 12,
        py: 12,
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
      <Box css={{ backgroundColor: '$gray700', width: '100%', height: 160, mb: 12, borderRadius: 12 }} />

      <Text as='h3' css={{ mb: 4 }} variant='heading-24'>
        {name}
      </Text>

      {/** @todo Add IconButton for character actions */}
      <Box css={{ display: 'flex' }}>
        <IconButton onClick={onEdit}>
          <VisuallyHidden>Edit {name}</VisuallyHidden>
          <PencilIcon size='small' />
        </IconButton>
        <IconButton onClick={onDelete}>
          <VisuallyHidden>Delete {name}</VisuallyHidden>
          <TrashIcon size='small' />
        </IconButton>
      </Box>
    </Card>
  );
};
