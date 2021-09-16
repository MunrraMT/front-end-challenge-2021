import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  container: {
    minHeight: '40vh',
    maxHeight: '40vh',
    borderRadius: '0',
    marginBottom: '0.5rem',
  },
  containerEmpty: {
    minHeight: '0',
    maxHeight: '0',
    borderRadius: '0',
    marginBottom: '0.5rem',
  },
}));

export default useStyles;
