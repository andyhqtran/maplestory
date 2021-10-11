import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import { StyledNavigationItem, StyledNavigationItemAdornment } from '~/components/NavigationItem.styles';
import { Text } from '~/components/Primitives/Text';

export type NavigationItemProps = Pick<LinkProps, 'href'> & {
  adornmentLeft?: ReactNode;
  adornmentRight?: ReactNode;
  label: string;
};

export const NavigationItem = ({ adornmentLeft, adornmentRight, href = '/', label }: NavigationItemProps) => {
  return (
    <Link href={href} passHref>
      <StyledNavigationItem>
        {adornmentLeft && <StyledNavigationItemAdornment>{adornmentLeft}</StyledNavigationItemAdornment>}

        <Text css={{ flexGrow: 1, marginX: 8, color: 'inherit', fontWeight: 'inherit' }} size='body-14'>
          {label}
        </Text>
        {adornmentRight && <StyledNavigationItemAdornment>{adornmentRight}</StyledNavigationItemAdornment>}
      </StyledNavigationItem>
    </Link>
  );
};
