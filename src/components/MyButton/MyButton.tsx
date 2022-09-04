import { Button, ButtonProps as MuiButtonProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';

export type MyButtonProps = MuiButtonProps & {
  prefix?: string;
  suffix?: string;
};
export type ButtonComponentProps = MyButtonProps;
export type ButtonContainerProps = ButtonComponentProps;

export const MyButtonComponent: React.FunctionComponent<ButtonComponentProps> = ({
  variant = 'contained',
  children = 'Emotion Button',
  suffix = '',
  prefix = '',
  ...props
}) => (
  <Button {...props} {...{ variant }}>
    {typeof children === 'string' ? `${prefix}${children}${suffix}` : children}
  </Button>
);

const Container: React.FunctionComponent<MyButtonProps> = ({ prefix = 'My ', ...props }) => {
  const theme = useTheme();
  const { palette: { mode } } = theme;
  const { variant } = props;
  const textColor = mode === 'dark' ? 'white' : 'black';
  const styles = {
    blackButton: {
      ...(variant !== 'contained' && { color: textColor }),
      width: 'fit-content',
      '&:hover': {
        backgroundColor: 'rgb(41, 38, 38)',
      },
    },
  } as any;
  return MyButtonComponent({
    ...props,
    sx: { ...props.sx, ...styles.blackButton },
    prefix,
  });
};

export default Container;
