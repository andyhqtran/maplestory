import React from 'react';

import { Box, BoxProps } from '~/components/Box';
import { Text } from '~/components/Text';

export type CharacterListItemProps = BoxProps & {
  isSelected?: boolean;
  name: string;
};

export const CharacterListItem = ({ css, isSelected, name }: CharacterListItemProps) => {
  return (
    <Box
      as='button'
      css={{
        display: 'block',
        backgroundColor: isSelected ? '$gray100' : 'transparent',
        width: 'calc(100% + 24px)',
        height: 32,
        border: 0,
        borderRadius: 4,
        px: 12,
        mb: 8,
        ml: -12,
        color: isSelected ? '$gray800' : '$gray600',
        textAlign: 'left',
        cursor: 'pointer',
        outline: 'none',

        '&:hover, &:focus': {
          backgroundColor: '$gray100',
          color: '$gray800',
        },

        ...(css as {}),
      }}
    >
      <Text css={{ color: 'inherit' }} size='body-14'>
        {name}
      </Text>
    </Box>
  );
};

export const CharacterListItemSkeleton = () => {
  return <Box />;
};
