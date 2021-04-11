import React from 'react';
import { Button, ButtonProps } from '~/components/Button';

export type TabsItemProps = ButtonProps & {
  isSelected?: boolean;
};

export const TabsItem = ({ isSelected, ...restOfProps }: TabsItemProps) => {
  return (
    <Button
      css={{
        backgroundColor: isSelected ? '$background' : 'transparent',
        border: 0,
        mr: 4,

        '&:last-child': {
          mr: 0,
        },
      }}
      {...restOfProps}
    />
  );
};
