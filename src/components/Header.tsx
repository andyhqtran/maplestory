import { StyledHeader, StyledHeaderProps } from '~/components/Header.styles';
import { Container } from '~/components/Primitives/Container';

export type HeaderProps = StyledHeaderProps;

export const Header = ({ children, css }: HeaderProps) => {
  return (
    <StyledHeader css={css}>
      <Container css={{ display: 'flex', alignItems: 'center' }}>{children}</Container>
    </StyledHeader>
  );
};
