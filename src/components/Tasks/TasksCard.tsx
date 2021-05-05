import Image from 'next/image';
import React, { ReactNode } from 'react';
import { Box } from '~/components/Primitives/Box';
import { Button, ButtonProps } from '~/components/Primitives/Button';

import { Card, CardProps } from '~/components/Primitives/Card';
import { Text } from '~/components/Primitives/Text';
import { Boss, Event, Task } from '~/types/graphcms';

export type TasksCardProps = Omit<ButtonProps, 'size'> & {
  description?: ReactNode;
  id: Boss['id'] | Event['id'] | Task['id'];
  image: {
    url: string;
  };
  isSelected?: boolean;
  name: Boss['name'] | Event['name'] | Task['name'];
};

export const TasksCard = ({ css, description, id, image, isSelected, name, ...restOfProps }: TaskCardProps) => {
  return (
    <Button
      css={{
        justifyContent: 'flex-start',
        backgroundColor: '$gray100',
        height: 'auto',
        border: 0,
        px: 16,
        py: 12,
        textAlign: 'left',
        opacity: isSelected ? 0.32 : 1,

        '&:hover': {
          backgroundColor: '$gray200',
        },

        ...(css as {}),
      }}
      {...restOfProps}
    >
      {image && (
        <Box css={{ mr: 16, pointerEvents: 'none' }}>
          <Image height={40} src={image.url} width={40} />
        </Box>
      )}
      <Box>
        <Text as='h3' size='heading-14'>
          {name}
        </Text>
        {description && (
          <Text as='p' css={{ color: '$gray600' }} size='body-12'>
            {description}
          </Text>
        )}
      </Box>
    </Button>
  );
};
