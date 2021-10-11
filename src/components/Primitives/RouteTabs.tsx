import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { StyledRouteTabs, StyledRouteTabsItem, StyledRouteTabsProps } from '~/components/Primitives/RouteTabs.style';
import { Text } from '~/components/Primitives/Text';
import { ROUTE_TABS, ROUTE_TABS_ITEM } from '~/constants/testIds';

export type RouteTabsProps = Pick<StyledRouteTabsProps, 'css'> & {
  tabs: {
    label: string;
    href: string;
  }[];
};

export const RouteTabs = ({ css, tabs }: RouteTabsProps) => {
  const router = useRouter();

  return (
    <StyledRouteTabs css={css} data-testid={ROUTE_TABS}>
      {tabs.map((tab) => {
        const isActiveTab = router.asPath === tab.href;

        return (
          <Link href={tab.href} passHref>
            <StyledRouteTabsItem
              css={{
                color: isActiveTab ? '$primary800' : undefined,
                boxShadow: isActiveTab ? 'inset 0 -2px 0 $colors$primary800' : 'none',
              }}
              data-testid={ROUTE_TABS_ITEM}
            >
              <Text css={{ color: 'inherit', fontWeight: 'inherit' }} size='body-14'>
                {tab.label}
              </Text>
            </StyledRouteTabsItem>
          </Link>
        );
      })}
    </StyledRouteTabs>
  );
};
