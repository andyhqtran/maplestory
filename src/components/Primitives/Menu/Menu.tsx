import { Menu as ReachMenu, MenuButton as ReachMenuButton } from '@reach/menu-button';
import React, { cloneElement, ReactElement, ReactNode } from 'react';
import { Box } from '~/components/Primitives/Box';

import { MenuItem, MenuItemProps } from '~/components/Primitives/Menu/MenuItem';
import { MenuList } from '~/components/Primitives/Menu/MenuList';
import { MenuStateManager } from '~/components/Primitives/Menu/MenuStateManager';
import { Text } from '~/components/Primitives/Text';

export type MenuProps = {
  items: {
    label: string;
    leftAdornment?: ReactNode;
    onSelect: MenuItemProps['onSelect'];
    rightAdornment?: ReactNode;
  }[];
  onChange: (isExpanded: boolean) => void;
  trigger: ReactElement;
};

export const Menu = ({ items, onChange, trigger }: MenuProps) => {
  return (
    <ReachMenu>
      {({ isExpanded }) => (
        <MenuStateManager isExpanded={isExpanded} onChange={onChange}>
          {cloneElement(trigger, {
            as: ReachMenuButton,
          })}
          <MenuList>
            {items.map((item, index) => {
              return (
                <MenuItem key={index} onClick={(event) => event.stopPropagation()} onSelect={item.onSelect}>
                  {item.leftAdornment && <Box css={{ flexShrink: 0, mr: 12 }}>{item.leftAdornment}</Box>}
                  <Text as='span' css={{ color: '$gray800' }} size='body-14'>
                    {item.label}
                  </Text>
                  {item.rightAdornment && <Box css={{ flexShrink: 0, ml: 12 }}>{item.rightAdornment}</Box>}
                </MenuItem>
              );
            })}
          </MenuList>
        </MenuStateManager>
      )}
    </ReachMenu>
  );
};
