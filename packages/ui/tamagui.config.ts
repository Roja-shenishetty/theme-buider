import { createTamagui, createTokens } from 'tamagui'

const tokens = createTokens({
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    true: 16,
  },
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    true: 16,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 16,
    true: 8,
  },
  color: {
    primary: '#4F46E5',
    secondary: '#06B6D4',
    background: '#F9FAFB',
    text: '#111827',
    muted: '#6B7280',
    error: '#EF4444',
    success: '#22C55E',
  },
})

const lightTheme = {
  background: '#F9FAFB',
  color: '#111827',
  primary: '#4F46E5',
  secondary: '#06B6D4',
}

const darkTheme = {
  background: '#111827',
  color: '#F9FAFB',
  primary: '#6366F1',
  secondary: '#22D3EE',
}

export const tamaguiConfig = createTamagui({
  tokens,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  defaultTheme: 'light',
})

export type AppConfig = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}