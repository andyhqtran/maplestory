import React, { useState } from 'react';
import { Box, BoxProps } from '~/components/Primitives/Box';

import { Button, ButtonProps } from '~/components/Primitives/Button';
import { DotsVerticalIcon, PencilIcon, TrashIcon } from '~/components/Primitives/Icon';
import { IconButton } from '~/components/Primitives/IconButton';
import { Menu } from '~/components/Primitives/Menu/Menu';
import { Text } from '~/components/Primitives/Text';

export type CharacterListItemProps = BoxProps &
  Pick<ButtonProps, 'onClick'> & {
    id: string;
    isSelected?: boolean;
    name: string;
    onDelete: () => void;
  };

export const CharacterListItem = ({
  css,
  id,
  isSelected,
  name,
  onClick,
  onDelete,
  ...restOfProps
}: CharacterListItemProps) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <Box
      css={{
        position: 'relative',
        backgroundColor: isSelected || isMenuExpanded ? '$gray100' : 'transparent',
        justifyContent: 'space-between',
        width: 'calc(100% + 24px)',
        height: 32,
        border: 0,
        borderRadius: 4,
        mb: 8,
        ml: -12,
        color: isSelected || isMenuExpanded ? '$gray800' : '$gray600',

        '&:hover': {
          backgroundColor: '$gray100',
          color: '$gray800',

          [`& ${Button}`]: {
            pr: 36,
          },

          [`& ${IconButton}`]: {
            opacity: 1,
          },
        },

        ...(css as {}),
      }}
      {...restOfProps}
    >
      <Button
        css={{
          justifyContent: 'flex-start',
          backgroundColor: 'transparent',
          width: '100%',
          border: 0,
          pr: isMenuExpanded ? 36 : 12,
          pl: 12,

          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
        onClick={onClick}
      >
        <Text
          css={{ color: 'inherit', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          size='body-14'
        >
          {name}
        </Text>
      </Button>
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
          <IconButton
            css={{
              position: 'absolute',
              top: '50%',
              right: 12,
              mr: -4,
              opacity: isMenuExpanded ? 1 : 0,
              transform: 'translateY(-50%)',

              '&:focus-visible': {
                opacity: 1,

                [`~ ${Button}`]: {
                  pr: 36,
                },
              },
            }}
            size='tiny'
          >
            <DotsVerticalIcon size='tiny' />
          </IconButton>
        }
      />
    </Box>
  );
};
