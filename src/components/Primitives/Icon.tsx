import { ComponentProps } from 'react';

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

export type ArrowToLeftIconProps = IconProps;

export const ArrowToLeftIcon = (props: ArrowToLeftIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M4 6H6V18H4zM14.293 5.293L7.586 12 14.293 18.707 15.707 17.293 11.414 13 20 13 20 11 11.414 11 15.707 6.707z' />
    </Icon>
  );
};
export type ArrowToRightIconProps = IconProps;

export const ArrowToRightIcon = (props: ArrowToLeftIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M4 6H6V18H4zM14 11L8 11 8 13 14 13 14 18 20 12 14 6z' />{' '}
    </Icon>
  );
};

export type BugIconProps = IconProps;

export const BugIcon = (props: BugIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M6.787 7h10.426c-.108-.158-.201-.331-.318-.481l2.813-2.812-1.414-1.414-2.846 2.846c-.233-.166-.473-.321-.723-.454-1.723-.91-3.726-.911-5.45 0-.25.132-.488.287-.722.453L5.707 2.293 4.293 3.707l2.813 2.812C6.988 6.67 6.896 6.842 6.787 7zM5.756 9H2v2h2.307C4.242 11.495 4.2 11.997 4.2 12.5c0 .507.042 1.013.107 1.511H2v2h2.753c.013.039.021.08.034.118.188.555.421 1.093.695 1.6.044.081.095.155.141.234l-2.33 2.33 1.414 1.414 2.11-2.111c.235.254.478.498.736.716.418.354.867.657 1.332.903.479.253.982.449 1.496.58.204.052.411.085.618.118V16h2v5.914c.207-.032.414-.065.618-.118.514-.131 1.017-.327 1.496-.58.465-.246.914-.55 1.333-.904.258-.218.5-.462.734-.716l2.111 2.111 1.414-1.414-2.33-2.33c.047-.08.098-.155.142-.236.273-.505.507-1.043.694-1.599.013-.039.021-.079.034-.118H22v-2h-2.308c.065-.499.107-1.004.107-1.511 0-.503-.042-1.005-.106-1.5H22V9h-3.756H5.756z' />
    </Icon>
  );
};

export type CheckSquareIconProps = IconProps;

export const CheckSquareIcon = (props: CheckSquareIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M10.933 13.519L8.707 11.293 7.293 12.707 11.067 16.481 16.769 9.641 15.231 8.359z' />
      <path d='M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M5,19V5h14 l0.002,14H5z' />
    </Icon>
  );
};
export type CircleIconProps = IconProps;

export const CircleIcon = (props: CircleIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 10 10.001 5.514 0 10-4.486 10.001-10.001 0-5.514-4.486-10-10.001-10zm0 18.001c-4.41 0-7.999-3.589-8-8.001 0-4.411 3.589-8 8-8 4.412 0 8.001 3.589 8.001 8-.001 4.412-3.59 8.001-8.001 8.001z' />
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

export type DotsVerticalIconProps = IconProps;

export const DotsVerticalIcon = (props: DotsVerticalIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 10 12 10zM12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 4 12 4zM12 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 16 12 16z' />
    </Icon>
  );
};

export type ExportIconProps = IconProps;

export const ExportIcon = (props: ExportIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M11 16L13 16 13 7 16 7 12 2 8 7 11 7z' />
      <path d='M5,22h14c1.103,0,2-0.897,2-2v-9c0-1.103-0.897-2-2-2h-4v2h4v9H5v-9h4V9H5c-1.103,0-2,0.897-2,2v9C3,21.103,3.897,22,5,22 z' />
    </Icon>
  );
};

export type IdCardIconProps = IconProps;

export const IdCardIcon = (props: IdCardIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M9.715 12c1.151 0 2-.849 2-2s-.849-2-2-2-2 .849-2 2 .848 2 2 2z' />
      <path d='M20 4H4c-1.103 0-2 .841-2 1.875v12.25C2 19.159 2.897 20 4 20h16c1.103 0 2-.841 2-1.875V5.875C22 4.841 21.103 4 20 4zm0 14-16-.011V6l16 .011V18z' />
      <path d='M14 9h4v2h-4zm1 4h3v2h-3zm-1.57 2.536c0-1.374-1.676-2.786-3.715-2.786S6 14.162 6 15.536V16h7.43v-.464z' />
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
      <path d='M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z' />
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
      <path d='M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z' />
    </Icon>
  );
};

export type TimerIconProps = IconProps;

export const TimerIcon = (props: TimerIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M20.145,8.27l1.563-1.563l-1.414-1.414L18.586,7c-1.05-0.63-2.274-1-3.586-1c-3.859,0-7,3.14-7,7s3.141,7,7,7s7-3.14,7-7 C22,11.175,21.292,9.517,20.145,8.27z M15,18c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S17.757,18,15,18z' />
      <path d='M14 10H16V14H14zM13 3H17V5H13zM3 8H7V10H3zM3 16H7V18H3zM2 12H5.99V14H2z' />
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
export type WrenchIconProps = IconProps;

export const WrenchIcon = (props: WrenchIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M5.122 21c.378.378.88.586 1.414.586S7.572 21.378 7.95 21l4.336-4.336a7.495 7.495 0 0 0 2.217.333 7.446 7.446 0 0 0 5.302-2.195 7.484 7.484 0 0 0 1.632-8.158l-.57-1.388-4.244 4.243-2.121-2.122 4.243-4.243-1.389-.571A7.478 7.478 0 0 0 14.499 2c-2.003 0-3.886.78-5.301 2.196a7.479 7.479 0 0 0-1.862 7.518L3 16.05a2.001 2.001 0 0 0 0 2.828L5.122 21zm4.548-8.791-.254-.616a5.486 5.486 0 0 1 1.196-5.983 5.46 5.46 0 0 1 4.413-1.585l-3.353 3.353 4.949 4.95 3.355-3.355a5.49 5.49 0 0 1-1.587 4.416c-1.55 1.55-3.964 2.027-5.984 1.196l-.615-.255-5.254 5.256h.001l-.001 1v-1l-2.122-2.122 5.256-5.255z'></path>
    </Icon>
  );
};

export type XIconProps = IconProps;

export const XIcon = (props: XIconProps) => {
  return (
    <Icon viewBox='0 0 24 24' {...props}>
      <path d='M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z' />
    </Icon>
  );
};
