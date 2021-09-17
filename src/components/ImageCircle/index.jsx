import { number, string } from 'prop-types';

import useStyles from './styles';

const ImageCircle = ({ src, alt, width, ClassName }) => {
  const classes = useStyles();

  return (
    <img
      aria-label={alt}
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
