import { Menu, MenuButton, MenuButtonProps, MenuItem, MenuList } from '@reach/menu-button';
import React, { FunctionComponent } from 'react';

import { Button, ButtonProps } from '~/components/Primitives/Button';
import { DotsVerticalIcon } from '~/components/Primitives/Icon';
import { IconButton } from '~/components/Primitives/IconButton';
import { Text } from '~/components/Primitives/Text';

export type CharacterListItemProps = ButtonProps & {
  id: string;
  isSelected?: boolean;
  name: string;
  onDelete?: () => void;
};

export const CharacterListItem = ({ css, id, isSelected, name, onDelete, ...restOfProps }: CharacterListItemProps) => {
  return (
    <Button
      css={{
        backgroundColor: isSelected ? '$gray100' : 'transparent',
        justifyContent: 'space-between',
        width: 'calc(100% + 24px)',
        height: 32,
        border: 0,
        px: 12,
        mb: 8,
        ml: -12,
        color: isSelected ? '$gray800' : '$gray600',

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
      <Menu>
        {({ isOpen }) => (
          <>
            <IconButton
              as={MenuButton as FunctionComponent<Omit<MenuButtonProps, 'as' | 'children'>>}
              css={{ mr: -4, opacity: isOpen ? 1 : 0 }}
              size='tiny'
            >
              <DotsVerticalIcon size='tiny' />
            </IconButton>
            <MenuList>
              <MenuItem onSelect={() => console.log('update')}>Update</MenuItem>
              {onDelete && <MenuItem onSelect={onDelete}>Delete</MenuItem>}
            </MenuList>
          </>
        )}
      </Menu>
    </Button>
  );
};
