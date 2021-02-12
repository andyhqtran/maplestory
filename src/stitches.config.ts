import { createStyled } from '@stitches/react';

export * from '@stitches/react';

export const { styled, css } = createStyled({
  prefix: '',
  tokens: {
    colors: {
      $black: 'hsl(0, 0%, 0%)',
      $gray100: 'hsla(0, 0%, 0%, 0.04)',
      $gray200: 'hsla(0, 0%, 0%, 0.08)',
      $gray300: 'hsla(0, 0%, 0%, 0.16)',
      $gray400: 'hsla(0, 0%, 0%, 0.24)',
      $gray500: 'hsla(0, 0%, 0%, 0.4)',
      $gray600: 'hsla(0, 0%, 0%, 0.64)',
      $gray700: 'hsla(0, 0%, 0%, 0.84)',
      $gray800: 'hsla(0, 0%, 0%, 1)',
      $white: 'hsl(0, 0%, 100%)',
    },
    fonts: {
      $inter: 'Inter, -apple-system, system-ui, sans-serif',
    },
    fontWeights: {
      $black: '900',
      $bold: '700',
      $semibold: '600',
      $medium: '500',
      $regular: '400',
    },
  },
  breakpoints: {},
  utils: {
    m: (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
