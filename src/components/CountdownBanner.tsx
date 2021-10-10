import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

import { Box, BoxProps } from '~/components/Primitives/Box';
import { TimerIcon } from '~/components/Primitives/Icon';
import { Text } from '~/components/Primitives/Text';
import { useServerResetTime } from '~/hooks/useServerResetTime';

export type CountdownBannerProps = BoxProps;

export const CountdownBanner = ({ css, ...restOfProps }: CountdownBannerProps) => {
  const { nextResetTime } = useServerResetTime();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '$gray100',
        minHeight: 48,
        px: 24,
        ...(css as {}),
      }}
      {...restOfProps}
    >
      <TimerIcon css={{ mr: 12 }} size='small' />
      <Text size='body-14'>Next server reset in</Text>
      &nbsp;
      {isMounted && (
        <Countdown
          date={nextResetTime}
          renderer={({ hours, minutes, seconds }) => (
            <Text as='time' dateTime={`PT${hours}H${minutes}M${seconds}S`} size='body-14'>
              {hours}h {minutes}m {seconds}s
            </Text>
          )}
        />
      )}
    </Box>
  );
};
