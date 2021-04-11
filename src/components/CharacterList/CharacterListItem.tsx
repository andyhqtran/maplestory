import React from 'react';

import { Button, ButtonProps } from '~/components/Button';
import { Text } from '~/components/Text';

export type CharacterListItemProps = ButtonProps & {
  isSelected?: boolean;
  name: string;
};

export const CharacterListItem = ({ css, isSelected, name, ...restOfProps }: CharacterListItemProps) => {
  return (
    <Button
      css={{
        backgroundColor: isSelected ? '$gray100' : 'transparent',
        justifyContent: 'flex-start',
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
    </Button>
  );
};
