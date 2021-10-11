import { useEffect } from 'react';
import { Text } from '~/components/Primitives/Text';
import { StyledVerusHillaTimer, StyledVerusHillaTimerProps } from '~/components/verus-hilla/VerusHillaTimer.styles';
import { VERUS_HILLA_TIMER } from '~/constants/testIds';

export type VerusHillaTimerProps = Pick<StyledVerusHillaTimerProps, 'css'> & { nextTime?: number };

export const VerusHillaTimer = ({ css, nextTime = 1633 }: VerusHillaTimerProps) => {
  const date = new Date(0);
  date.setSeconds(nextTime);

  const timeString = date.toISOString().substr(14, 5);

  return (
    <StyledVerusHillaTimer css={css} data-testid={VERUS_HILLA_TIMER}>
      <Text css={{ mb: 12 }} size='body-14'>
        Next full map attack is at:
      </Text>
      <Text size='heading-70'>{timeString}</Text>
    </StyledVerusHillaTimer>
  );
};
