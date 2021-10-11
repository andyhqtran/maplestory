import { Header } from '~/components/Header';
import { Container } from '~/components/Primitives/Container';
import { RouteTabs } from '~/components/Primitives/RouteTabs';
import { Text } from '~/components/Primitives/Text';
import { Routes } from '~/constants/routes';
import { DefaultLayout, DefaultLayoutProps } from '~/layouts/DefaultLayout';

export type ToolsLayoutProps = Pick<DefaultLayoutProps, 'children'>;

export const ToolsLayout = ({ children }: ToolsLayoutProps) => {
  return (
    <DefaultLayout>
      <Header>
        <Text size='heading-24'>Tools</Text>
      </Header>
      <Container css={{ marginTop: 48 }}>
        <RouteTabs
          css={{ mb: 24 }}
          tabs={[
            {
              label: 'Verus Hilla',
              href: Routes.VerusHilla,
            },
          ]}
        />
        {children}
      </Container>
    </DefaultLayout>
  );
};
