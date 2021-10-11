import * as RadixDialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { ReactNode } from 'react';
import {
  StyledDialogClose,
  StyledDialogContent,
  StyledDialogContentProps,
  StyledDialogOverlay,
} from '~/components/Primitives/Dialog.styles';
import { XIcon } from '~/components/Primitives/Icon';
import { Text } from '~/components/Primitives/Text';

export type DialogProps = Pick<StyledDialogContentProps, 'children' | 'css'> & {
  description: string;
  title: string;
  trigger: ReactNode;
};

export const Dialog = ({ children, css, description, title, trigger }: DialogProps) => {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <StyledDialogOverlay />
      <StyledDialogContent css={css}>
        <RadixDialog.Title asChild>
          <Text as='h2' css={{ marginBottom: 8 }} size='heading-20'>
            {title}
          </Text>
        </RadixDialog.Title>
        <RadixDialog.Description asChild>
          <Text as='p' css={{ marginBottom: 24 }} size='body-14'>
            {description}
          </Text>
        </RadixDialog.Description>

        <RadixDialog.Close asChild>
          <StyledDialogClose size='tiny'>
            <VisuallyHidden>Close dialog</VisuallyHidden>
            <XIcon size='tiny' />
          </StyledDialogClose>
        </RadixDialog.Close>

        {children}
      </StyledDialogContent>
    </RadixDialog.Root>
  );
};
