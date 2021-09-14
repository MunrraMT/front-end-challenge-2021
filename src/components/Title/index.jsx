import { Typography } from '@material-ui/core';
import { string } from 'prop-types';

import useStyles from './styles';

const Title = ({ text, className }) => {
  const classes = useStyles();

  return (
    <Typography
      className={`${classes.title} ${className}`}
      variant="h4"
      component="h1"
    >
      {text}
    </Typography>
  );
};

Title.defaultProps = {
  className: '',
};

Title.propTypes = {
  text: string.isRequired,
  className: string,
};

export default Title;
