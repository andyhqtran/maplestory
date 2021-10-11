import { StyledNavigation, StyledNavigationProps } from '~/components/Navigation.styles';
import { Text } from '~/components/Primitives/Text';

export type NavigationProps = Pick<StyledNavigationProps, 'children' | 'css'> & {
  label?: string;
};

export const Navigation = ({ children, css, label }: NavigationProps) => {
  return (
    <StyledNavigation css={css}>
      {label && (
        <Text as='p' css={{ marginBottom: 8, marginLeft: 12, color: '$gray600', fontWeight: '$bold' }} size='body-12'>
          Characters
        </Text>
      )}
      {children}
    </StyledNavigation>
  );
};

Navigation.toString = () => StyledNavigation.className;
