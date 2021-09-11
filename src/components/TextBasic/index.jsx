import { Typography } from '@material-ui/core';
import { string } from 'prop-types';

const TextBasic = ({ children }) => (
  <Typography align="justify" variant="body1" component="h2">
    {children}
  </Typography>
);

TextBasic.propTypes = {
  children: string.isRequired,
};

export default TextBasic;
