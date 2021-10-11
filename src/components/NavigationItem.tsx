import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import {
  StyledNavigationItem,
  StyledNavigationItemAdornment,
  StyledNavigationItemAnchor,
  StyledNavigationItemProps,
} from '~/components/NavigationItem.styles';
import { Text } from '~/components/Primitives/Text';

export type NavigationItemProps = Pick<StyledNavigationItemProps, 'css'> &
  Pick<LinkProps, 'href'> & {
    adornmentLeft?: ReactNode;
    adornmentRight?: ReactNode;
    label: string;
  };

export const NavigationItem = ({ adornmentLeft, adornmentRight, css, href = '/', label }: NavigationItemProps) => {
  return (
    <StyledNavigationItem css={css}>
      {adornmentLeft && (
        <StyledNavigationItemAdornment css={{ left: 12 }}>{adornmentLeft}</StyledNavigationItemAdornment>
      )}
      <Link href={href} passHref>
        <StyledNavigationItemAnchor>
          <Text css={{ flexGrow: 1, marginX: 8, color: 'inherit', fontWeight: 'inherit' }} size='body-14'>
            {label}
          </Text>
        </StyledNavigationItemAnchor>
      </Link>
      {adornmentRight && (
        <StyledNavigationItemAdornment css={{ right: 12 }}>{adornmentRight}</StyledNavigationItemAdornment>
      )}
    </StyledNavigationItem>
  );
};
