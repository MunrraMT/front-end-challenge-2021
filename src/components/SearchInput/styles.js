import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  marginBottom: (props) => ({
    marginBottom: `${props.marginBottom}rem`,
  }),
  marginTop: (props) => ({
    marginTop: `${props.marginTop}rem`,
  }),
  input: {
    borderColor: '#209cee',
    backgroundColor: '#ffffff',
  },
}));

export default useStyles;
