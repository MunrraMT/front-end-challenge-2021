import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  backgroundColorBlue: {
    backgroundColor: '#209cee',
  },
  textColor: {
    color: '#ffffff',
  },
  textUpperCase: {
    textTransform: 'uppercase',
  },
  head: {
    zIndex: '2',
  },
}));

export default useStyles;
