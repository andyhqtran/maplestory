import React, { ComponentProps } from 'react';

import { styled } from '~/stitches.config';

export const Icon = styled('svg', {
  display: 'block',
  fill: 'currentColor',

  variants: {
    size: {
      large: {
        width: 32,
        height: 32,
      },
      medium: {
        width: 24,
        height: 24,
      },
      small: {
        width: 20,
        height: 20,
      },
      tiny: {
        width: 16,
        height: 16,
      },
      micro: {
        width: 12,
        height: 12,
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

export type IconProps = ComponentProps<typeof Icon>;

export type CheckSquareIconProps = IconProps;

export const CheckSquareIcon = (props: CheckSquareIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M10.933 13.519L8.707 11.293 7.293 12.707 11.067 16.481 16.769 9.641 15.231 8.359z' />
      <path d='M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M5,19V5h14 l0.002,14H5z' />
    </Icon>
  );
};

export type DataIconProps = IconProps;

export const DataIcon = (props: DataIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M20,17V7c0-2.168-3.663-4-8-4S4,4.832,4,7v10c0,2.168,3.663,4,8,4S20,19.168,20,17z M12,5c3.691,0,5.931,1.507,6,1.994 C17.931,7.493,15.691,9,12,9S6.069,7.493,6,7.006C6.069,6.507,8.309,5,12,5z M6,9.607C7.479,10.454,9.637,11,12,11 s4.521-0.546,6-1.393v2.387C17.931,12.493,15.691,14,12,14s-5.931-1.507-6-2V9.607z M6,17v-2.393C7.479,15.454,9.637,16,12,16 s4.521-0.546,6-1.393v2.387C17.931,17.493,15.691,19,12,19S6.069,17.493,6,17z' />
    </Icon>
  );
};

export type ListIconProps = IconProps;

export const ListIcon = (props: ListIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M4 6H6V8H4zM4 11H6V13H4zM4 16H6V18H4zM20 8L20 6 18.8 6 9.2 6 8.023 6 8.023 8 9.2 8 18.8 8zM8 11H20V13H8zM8 16H20V18H8z' />
    </Icon>
  );
};

export type ListCheckIconProps = IconProps;

export const ListCheckIcon = (props: ListCheckIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M4 7H15V9H4zM4 11H15V13H4zM4 15H11V17H4zM19.299 12.292L14.999 16.583 13.707 15.292 12.293 16.707 14.999 19.411 20.711 13.708z' />
    </Icon>
  );
};

export type MoonIconProps = IconProps;

export const MoonIcon = (props: MoonIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M12,11.807C9.349,9.155,8.7,5.261,10.049,2c-1.875,0.37-3.666,1.281-5.12,2.735c-3.905,3.905-3.905,10.237,0,14.142  c3.906,3.906,10.237,3.905,14.143,0c1.454-1.454,2.364-3.244,2.735-5.119C18.545,15.106,14.651,14.458,12,11.807z' />
    </Icon>
  );
};

export type MusicIconProps = IconProps;

export const MusicIcon = (props: MusicIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M19.684,5.821l-9-3.272C10.071,2.326,9.387,2.415,8.853,2.79C8.318,3.163,8,3.775,8,4.428v6.129 C7.409,10.212,6.731,10,6,10c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4V4.428L19,7.7v6.856C18.409,14.212,17.731,14,17,14 c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4V7.7C21,6.862,20.471,6.106,19.684,5.821z M6,16c-1.103,0-2-0.897-2-2s0.897-2,2-2 s2,0.897,2,2S7.103,16,6,16z M17,20c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2S18.103,20,17,20z' />
      '
    </Icon>
  );
};

export type PencilIconProps = IconProps;

export const PencilIcon = (props: PencilIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M8.707 19.707L18 10.414 13.586 6l-9.293 9.293c-.128.128-.219.289-.263.464L3 21l5.242-1.03C8.418 19.926 8.579 19.835 8.707 19.707zM21 7.414c.781-.781.781-2.047 0-2.828L19.414 3c-.781-.781-2.047-.781-2.828 0L15 4.586 19.414 9 21 7.414z' />
    </Icon>
  );
};

export type PlusIconProps = IconProps;

export const PlusIcon = (props: PlusIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z' />
    </Icon>
  );
};

export type SunIconProps = IconProps;

export const SunIcon = (props: SunIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19H13V22H11zM11 2H13V5H11zM2 11H5V13H2zM19 11H22V13H19z' />
      <path transform='rotate(-134.999 5.99 18.01)' d='M4.989 16.51H6.989V19.51H4.989z' />
      <path transform='rotate(-45.001 18.01 5.99)' d='M16.51 4.99H19.511000000000003V6.99H16.51z' />
      <path transform='rotate(-134.983 5.99 5.99)' d='M4.489 4.99H7.489V6.99H4.489z' />
      <path transform='rotate(134.999 18.01 18.01)' d='M17.01 16.51H19.01V19.511000000000003H17.01z' />
    </Icon>
  );
};

export type TrashIconProps = IconProps;

export const TrashIcon = (props: TrashIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M6 7C5.447 7 5 7 5 7v13c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2V7c0 0-.447 0-1 0H6zM10 19H8v-9h2V19zM16 19h-2v-9h2V19zM16.618 4L15 2 9 2 7.382 4 3 4 3 6 8 6 16 6 21 6 21 4z' />
    </Icon>
  );
};
