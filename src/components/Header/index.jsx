import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ImageSmall from '../ImageSmall';
import Title from '../Title';

const useStyles = makeStyles(() => ({
  title: {
    marginRight: 'auto',
    marginLeft: '1rem',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box paddingX="1.5rem" paddingY="0.5rem" component="header">
      <Grid container alignItems="center" justifyContent="center">
        <ImageSmall src="./logo.svg" alt="Logo da Empresa" />
        <Title className={classes.title} text="Pharma Inc" />
        <ImageSmall src="./perfil.webp" alt="Foto de perfil do usuário" />
      </Grid>
    </Box>
  );
};

export default Header;
