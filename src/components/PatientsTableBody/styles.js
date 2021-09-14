import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  link: {
    'textDecoration': 'none',
    'backgroundColor': '#209cee',
    'color': '#ffffff',
    'fontFamily': 'Roboto',
    'padding': '0.25rem 0.5rem',
    'borderRadius': '0.25rem',
    '&:hover': {
      backgroundColor: '#146296',
    },
  },
}));

export default useStyles;
