import { StyledSidebar, StyledSidebarProps } from '~/components/Primitives/Sidebar.style';
import { SIDEBAR } from '~/constants/testIds';

export type SidebarProps = StyledSidebarProps;

export const Sidebar = (props: SidebarProps) => {
  return <StyledSidebar data-testid={SIDEBAR} {...props} />;
};

Sidebar.toString = () => StyledSidebar.className;
