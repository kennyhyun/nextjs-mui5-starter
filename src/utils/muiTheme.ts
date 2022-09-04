import { green, orange } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

/* * need to use module augmentation for the theme to accept the value that just added **/

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

export const getTheme = (mode = 'light' as 'dark' | 'light') => {
  let theme = createTheme({
    //edit this to a color pallete your app
    palette: {
      mode,
      primary: {
        main: green[500],
      },
      secondary: {
        main: orange[500],
      },
    },
  });

  const components: any = createTheme(theme, {
    MuiButton: {
      //add variants to button component
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed ${theme.palette.primary.main}`,
          },
        },
      ],
      styleOverrides: {
        root: {
          fontSize: '1em',
        },
      },
    },
  });

  // Create a theme instance.
  theme = createTheme({
    palette: {
      mode,
    },
    components,
  });
  // add responsive MUI responsiveFontSize
  theme = responsiveFontSizes(theme);

  return theme;
};

const initialTheme = getTheme();

export default initialTheme;
