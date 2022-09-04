import { Typography, TypographyProps } from '@mui/material';
import * as React from 'react';

export type TitleProps = TypographyProps;

const Title: React.FunctionComponent<TitleProps> = (props) => (
  <Typography variant={props.variant}>{props.children}</Typography>
);

export default Title;
