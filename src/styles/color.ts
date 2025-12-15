export type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950?: string; // 프라이머리만 이 색상 있음
};

export type Palette = {
  primary: ColorScale;
  gray: ColorScale;
  black: string;
  white: string;
};

export const palette:Palette = {
  primary: {
    50: '#E8F4FF',
    100: '#D5EAFF',
    200: '#B3D6FF',
    300: '#85B8FF',
    400: '#558CFF',
    500: '#2E60FF',
    600: '#0D2EFF',
    700: '#0929FF',
    800: '#0623CD',
    900: '#10289F',
    950: '#0A165C'
  },
  gray: {
    50: '#F6F6F6',
    100: '#E7E7E7',
    200: '#D1D1D1',
    300: '#B0B0B0',
    400: '#888888',
    500: '#6D6D6D',
    600: '#5D5D5D',
    700: '#4F4F4F',
    800: '#454545',
    900: '#3D3D3D',
  },
  black: '#000000',
  white: '#FFFFFF',
}

export type SemanticColors = {
  success: { border: string; background: string };
  fail: { border: string; background: string };
};

export const semanticColors:SemanticColors = {
  success: {
    border:'#00AE63',
    background: '#DFF8F3'
  },
  fail: {
    border: '#C8274F',
    background: '#FFB9C0'
  }
}