import { ReactNode } from 'react';
import { StyledNavigation, StyledNavigationProps } from '~/components/Navigation.styles';
import { Box } from '~/components/Primitives/Box';
import { Text } from '~/components/Primitives/Text';

export type NavigationProps = Pick<StyledNavigationProps, 'children' | 'css'> & {
  label?: string;
  labelAdornment?: ReactNode;
};

export const Navigation = ({ children, css, label, labelAdornment }: NavigationProps) => {
  return (
    <StyledNavigation css={css}>
      {label && (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 8,
            paddingX: 12,
          }}
        >
          <Text as='p' css={{ color: '$gray600', fontWeight: '$bold' }} size='body-12'>
            Characters
          </Text>
          {labelAdornment}
        </Box>
      )}
      {children}
    </StyledNavigation>
  );
};

Navigation.toString = () => StyledNavigation.className;
