import Link from 'next/link';
import { StyledLogo, StyledLogoProps } from '~/components/Primitives/Logo.styles';
import { Text } from '~/components/Primitives/Text';
import { VisuallyHidden } from '~/components/VisuallyHidden';
import { Routes } from '~/constants/routes';

export type LogoProps = Pick<StyledLogoProps, 'css'>;

export const Logo = ({ css }: LogoProps) => {
  return (
    <Link href={Routes.Root} passHref>
      <StyledLogo css={css}>
        <Text size='heading-14-uppercase'>H</Text>
        <VisuallyHidden>Henesys.gg</VisuallyHidden>
      </StyledLogo>
    </Link>
  );
};
