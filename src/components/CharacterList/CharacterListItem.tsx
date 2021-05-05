import React, { useState } from 'react';

import { Button, ButtonProps } from '~/components/Primitives/Button';
import { DotsVerticalIcon, PencilIcon, TrashIcon } from '~/components/Primitives/Icon';
import { IconButton } from '~/components/Primitives/IconButton';
import { Menu } from '~/components/Primitives/Menu/Menu';
import { Text } from '~/components/Primitives/Text';

export type CharacterListItemProps = ButtonProps & {
  id: string;
  isSelected?: boolean;
  name: string;
  onDelete: () => void;
};

export const CharacterListItem = ({ css, id, isSelected, name, onDelete, ...restOfProps }: CharacterListItemProps) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <Button
      css={{
        backgroundColor: isSelected || isMenuExpanded ? '$gray100' : 'transparent',
        justifyContent: 'space-between',
        width: 'calc(100% + 24px)',
        height: 32,
        border: 0,
        px: 12,
        mb: 8,
        ml: -12,
        color: isSelected || isMenuExpanded ? '$gray800' : '$gray600',

        '&:hover': {
          backgroundColor: '$gray100',
          color: '$gray800',

          [`& ${IconButton}`]: {
            opacity: 1,
          },
        },

        '&:focus-visible': {
          boxShadow: '0 0 0 2px $colors$blue800',
        },

        ...(css as {}),
      }}
      {...restOfProps}
    >
      <Text css={{ color: 'inherit' }} size='body-14'>
        {name}
      </Text>
      <Menu
        items={[
          {
            label: 'Edit',
            leftAdornment: <PencilIcon size='micro' />,
            onSelect: () => console.log('Character', 'Edit'),
          },
          {
            label: 'Delete',
            leftAdornment: <TrashIcon size='micro' />,
            onSelect: onDelete,
          },
        ]}
        onChange={(isExpanded) => setIsMenuExpanded(isExpanded)}
        trigger={
          <IconButton css={{ mr: -4, opacity: isMenuExpanded ? 1 : 0 }} size='tiny'>
            <DotsVerticalIcon size='tiny' />
          </IconButton>
        }
      />
    </Button>
  );
};
