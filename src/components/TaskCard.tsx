import Image from 'next/image';
import React from 'react';
import { Box } from '~/components/Box';

import { Card, CardProps } from '~/components/Card';
import { Text } from '~/components/Text';
import { Boss, Event, Task } from '~/types/graphcms';

export type TaskCardProps = CardProps & {
  id: Boss['id'] | Event['id'] | Task['id'];
  image: {
    url: string;
  };
  isSelected?: boolean;
  name: Boss['name'] | Event['name'] | Task['name'];
};

export const TaskCard = ({ css, id, image, isSelected, name, ...restOfProps }: TaskCardProps) => {
  return (
    <Card
      css={{
        display: 'flex',
        alignItems: 'center',
        px: 16,
        py: 16,
        cursor: 'pointer',
        opacity: isSelected ? 0.32 : 1,
        '&:hover': {
          backgroundColor: '$gray200',
        },
        /** @todo https://github.com/modulz/stitches/issues/375 */
        ...(css as {}),
      }}
      {...restOfProps}
    >
      {image && (
        <Box css={{ mr: 8 }}>
          <Image height={32} src={image.url} width={32} />
        </Box>
      )}
      <Text as='h3' variant='heading-16'>
        {name}
      </Text>
    </Card>
  );
};
