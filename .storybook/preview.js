//.storybook/preview.js

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';
import React from 'react';

import { getTheme } from '../src/utils/muiTheme';

const withThemeProvider = (Story, context) => {
  const [mode, setMode] = React.useState('light');
  const {
    globals: { backgrounds: { value: backgroundColor = '' } = {} },
  } = context || {};
  const colorValues = backgroundColor
    .substr(4)
    .split(')')[0]
    .split(',')
    .slice(0, 3);
  const grayLevel = colorValues.reduce((sum, v) => sum + Number(v), 0) / 3;
  React.useEffect(() => {
    setMode(grayLevel && grayLevel < 128 ? 'dark' : 'light');
  }, [context]);
  const theme = React.useMemo(() => getTheme(mode), [mode]);
  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
