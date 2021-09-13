import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  icon: {
    position: 'absolute',
    top: '50%',
    width: '50%',
    transform: 'translate(50%,-20%)',
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Box component="section" height="5rem">
      <img
        className={classes.icon}
        width="50"
        height="50"
        src="./Reload-1s-50px.svg"
        alt="Loading"
      />
    </Box>
  );
};

export default Loading;
