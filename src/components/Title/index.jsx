import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { string } from 'prop-types';

const useStyles = makeStyles(() => ({
  title: {
    display: 'inline-block',
    fontFamily: 'Leckerli One',
  },
}));

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
