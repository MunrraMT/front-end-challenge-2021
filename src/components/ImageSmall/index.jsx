import { makeStyles } from '@material-ui/styles';
import { string } from 'prop-types';

const useStyles = makeStyles(() => ({
  image: {
    borderRadius: '100%',
  },
}));

const ImageSmall = ({ src, alt }) => {
  const classes = useStyles();

  return (
    <img className={classes.image} src={src} alt={alt} width="50" height="50" />
  );
};

ImageSmall.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
};

export default ImageSmall;
