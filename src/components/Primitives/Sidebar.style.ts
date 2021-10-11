import { ComponentProps } from 'react';
import { styled } from '~/stitches.config';

export type StyledSidebarProps = ComponentProps<typeof StyledSidebar>;

export const StyledSidebar = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$background',
  borderRight: '1px solid $colors$gray200',
  padding: 24,
  overflowY: 'auto',
});
