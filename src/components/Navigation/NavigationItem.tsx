import VisuallyHidden from '@reach/visually-hidden';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';

import { Box } from '~/components/Primitives/Box';
import { IconProps } from '~/components/Primitives/Icon';
import { IconButton } from '~/components/Primitives/IconButton';

export type NavigationItemProps = Pick<LinkProps, 'href'> & {
  icon: FunctionComponent<IconProps>;
  label: string;
};

export const NavigationItem = ({ href = '/', icon, label }: NavigationItemProps) => {
  const router = useRouter();
  const isActiveRoute = router.asPath === href;

  return (
    <Link href={href} passHref>
      <IconButton
        as='a'
        css={{
          borderRadius: 4,
          color: isActiveRoute ? '$gray800' : '$gray600',
          mb: 8,
          transition: 'color 0.2s ease',

          '&:last-child': {
            mb: 0,
          },
        }}
        size='small'
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        <Box as={icon} size='small' />
      </IconButton>
    </Link>
  );
};
