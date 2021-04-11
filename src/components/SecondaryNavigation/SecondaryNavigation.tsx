import React from 'react';

import { Box } from '~/components/Box';

export const SecondaryNavigation = () => {
  return <Box as='nav' css={{ backgroundColor: '$background', borderRight: '1px solid $colors$gray100' }} />;
};
