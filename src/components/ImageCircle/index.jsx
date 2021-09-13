import { makeStyles } from '@material-ui/styles';
import { number, string } from 'prop-types';

const useStyles = makeStyles(() => ({
  image: {
    borderRadius: '100%',
  },
}));

const ImageCircle = ({ src, alt, width, ClassName }) => {
  const classes = useStyles();

  return (
    <img
      className={`${classes.image} ${ClassName}`}
      src={src}
      alt={alt}
      width={width}
      height={width}
    />
  );
};

ImageCircle.defaultProps = {
  width: 50,
  ClassName: '',
};

ImageCircle.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
  width: number,
  ClassName: string,
};

export default ImageCircle;
