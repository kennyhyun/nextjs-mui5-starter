import { Button as MuiButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';

export const Button = ({ blackButtonStyle = {} as any }) => (
  <MuiButton variant='contained' sx={blackButtonStyle}>
    Emotion Button
  </MuiButton>
);

const Container = () => {
  const theme = useTheme();
  const styles = {
    blackButton: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      width: 'fit-content',
      '&:hover': {
        backgroundColor: 'rgb(41, 38, 38)',
      },
    },
  } as any;
  return Button({ blackButtonStyle: styles.blackButton });
};

export default Container;
