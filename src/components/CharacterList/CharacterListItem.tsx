import { Menu, MenuButton, MenuButtonProps, MenuItem, MenuList } from '@reach/menu-button';
import React, { FunctionComponent } from 'react';
import { useToasts } from 'react-toast-notifications';

import { Button, ButtonProps } from '~/components/Button';
import { DotsVerticalIcon } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { Text } from '~/components/Text';
import { useCharacters } from '~/hooks/useCharacters';

export type CharacterListItemProps = ButtonProps & {
  id: string;
  isSelected?: boolean;
  name: string;
};

export const CharacterListItem = ({ css, id, isSelected, name, ...restOfProps }: CharacterListItemProps) => {
  const { deleteCharacter } = useCharacters();
  const { addToast } = useToasts();

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
              <MenuItem
                onSelect={() => {
                  deleteCharacter(id);
                  addToast(`Successfully deleted ${name}`);
                }}
              >
                Delete
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Button>
  );
};
