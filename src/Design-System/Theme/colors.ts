export const colors = {
  primary: {
    100: '#d9e0d6',
    600: '#3a4f3a',
    700: '#2c3d2c',
  },

  secondary: {
    400: '#8f8f8f',
    500: '#6b6b6b',
    600: '#3a3a3a',
    900: '#141414',
  },

  tertiary: {
    100: '#fbfaf6',
    200: '#f3f1ea',
    300: '#ebe8df',
    400: '#e3dfd2',
    500: '#d9d5c7',
    600: '#c8c4b6',
  },
} as const

export type ColorScale = typeof colors
export type ColorGroup = keyof ColorScale
