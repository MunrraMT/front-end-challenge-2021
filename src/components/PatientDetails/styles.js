import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  fullScreen: {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '2',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(118, 146, 165, 0.8)',
  },
  article: {
    width: '90%',
    maxWidth: '40rem',
    backgroundColor: '#ffffff',
    borderRadius: '0.5rem',
    position: 'relative',
    paddingTop: '5rem',
    padding: '2rem',
  },
  perfilImage: {
    position: 'absolute',
    top: 0,
    transform: 'translateY(-50%)',
  },
  btnClose: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '3rem',
  },
}));

export default useStyles;
