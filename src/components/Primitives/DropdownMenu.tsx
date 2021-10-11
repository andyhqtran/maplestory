import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';
import {
  StyledDropdownMenuContent,
  StyledDropdownMenuItem,
  StyledDropdownMenuItemAdornment,
} from '~/components/Primitives/DropdownMenu.styles';
import { Text } from '~/components/Primitives/Text';
import { CSS } from '~/stitches.config';

export type DropdownMenuItem = {
  adornmentLeft?: JSX.Element;
  label: string;
  onSelect: () => void;
  type: 'item';
};

export type DropdownMenuProps = Pick<
  RadixDropdownMenu.DropdownMenuContentProps,
  'align' | 'alignOffset' | 'side' | 'sideOffset'
> & {
  css?: CSS;
  items: DropdownMenuItem[];
  trigger: ReactNode;
};

export const DropdownMenu = ({
  align = 'end',
  alignOffset = 0,
  css,
  items,
  side = 'bottom',
  sideOffset = 4,
  trigger,
}: DropdownMenuProps) => {
  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger asChild>{trigger}</RadixDropdownMenu.Trigger>
      <StyledDropdownMenuContent align={align} alignOffset={alignOffset} css={css} side={side} sideOffset={sideOffset}>
        {items.map((item) => {
          return (
            <StyledDropdownMenuItem onSelect={item.onSelect}>
              {item.adornmentLeft && (
                <StyledDropdownMenuItemAdornment>{item.adornmentLeft}</StyledDropdownMenuItemAdornment>
              )}
              <Text css={{ color: 'inherit', fontWeight: 'inherit' }} size='body-14'>
                {item.label}
              </Text>
            </StyledDropdownMenuItem>
          );
        })}
      </StyledDropdownMenuContent>
    </RadixDropdownMenu.Root>
  );
};

DropdownMenu.toString = () => StyledDropdownMenuContent.className;

DropdownMenu.Item = StyledDropdownMenuItem;

DropdownMenu.Item.toString = () => StyledDropdownMenuItem.className;
