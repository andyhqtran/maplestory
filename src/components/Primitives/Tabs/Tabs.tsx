import { Box, BoxProps } from '~/components/Primitives/Box';

export type TabsProps = BoxProps;

export const Tabs = ({ children, css }: TabsProps) => {
  return (
    <Box css={{ display: 'inline-flex', backgroundColor: '$gray100', borderRadius: 4, p: 4, ...(css as {}) }}>
      {children}
    </Box>
  );
};
