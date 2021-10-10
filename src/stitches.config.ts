import { createStitches } from '@stitches/react';

import type * as Stitches from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  prefix: '',
  theme: {
    colors: {
      background: 'hsla(0deg, 0%, 100%, 1)',
      black: 'hsl(0deg, 0%, 0%)',
      blue100: 'hsla(216deg, 77%, 45%, 0.04)',
      blue200: 'hsla(216deg, 77%, 45%, 0.08)',
      blue300: 'hsla(216deg, 77%, 45%, 0.16)',
      blue400: 'hsla(216deg, 77%, 45%, 0.24)',
      blue500: 'hsla(216deg, 77%, 45%, 0.4)',
      blue600: 'hsla(216deg, 77%, 45%, 0.64)',
      blue700: 'hsla(216deg, 77%, 45%, 0.84)',
      blue800: 'hsla(216deg, 77%, 45%, 1)',
      gray100: 'hsla(0deg, 0%, 0%, 0.04)',
      gray200: 'hsla(0deg, 0%, 0%, 0.08)',
      gray300: 'hsla(0deg, 0%, 0%, 0.16)',
      gray400: 'hsla(0deg, 0%, 0%, 0.24)',
      gray500: 'hsla(0deg, 0%, 0%, 0.4)',
      gray600: 'hsla(0deg, 0%, 0%, 0.64)',
      gray700: 'hsla(0deg, 0%, 0%, 0.84)',
      gray800: 'hsla(0deg, 0%, 0%, 1)',
      overlay: 'hsla(0deg, 0%, 100%, 0.96)',
      white: 'hsl(0deg, 0%, 100%)',
      focus: 'hsla(216deg, 77%, 45%, 1)',
    },
    fonts: {
      inter: 'Inter, -apple-system, system-ui, sans-serif',
    },
    fontWeights: {
      black: '900',
      bold: '700',
      semibold: '600',
      medium: '500',
      regular: '400',
    },
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    ellipsis: (value: 'default' | 'truncate') => ({
      whiteSpace: value === 'truncate' ? 'nowrap' : 'normal',
      overflow: value === 'truncate' ? 'hidden' : 'visible',
      textOverflow: value === 'truncate' ? 'ellipsis' : 'clip',
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export type { VariantProps } from '@stitches/react';

export const globalStyles = globalCss({
  html: {
    height: '100%',
  },

  body: {
    backgroundColor: '$background',
    height: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },

  '#__next': {
    height: '100%',
  },
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    background: 'hsla(213deg, 22%, 8%, 1)',
    black: 'hsl(0deg, 0%, 0%)',
    blue100: 'hsla(216deg, 77%, 45%, 0.04)',
    blue200: 'hsla(216deg, 77%, 45%, 0.08)',
    blue300: 'hsla(216deg, 77%, 45%, 0.16)',
    blue400: 'hsla(216deg, 77%, 45%, 0.24)',
    blue500: 'hsla(216deg, 77%, 45%, 0.4)',
    blue600: 'hsla(216deg, 77%, 45%, 0.64)',
    blue700: 'hsla(216deg, 77%, 45%, 0.84)',
    blue800: 'hsla(216deg, 77%, 45%, 1)',
    gray100: 'hsla(0deg, 0%, 100%, 0.04)',
    gray200: 'hsla(0deg, 0%, 100%, 0.08)',
    gray300: 'hsla(0deg, 0%, 100%, 0.16)',
    gray400: 'hsla(0deg, 0%, 100%, 0.24)',
    gray500: 'hsla(0deg, 0%, 100%, 0.4)',
    gray600: 'hsla(0deg, 0%, 100%, 0.64)',
    gray700: 'hsla(0deg, 0%, 100%, 0.84)',
    gray800: 'hsla(0deg, 0%, 100%, 1)',
    overlay: 'hsla(213deg, 22%, 8%, 0.96)',
    white: 'hsl(0deg, 0%, 100%)',
  },
});
