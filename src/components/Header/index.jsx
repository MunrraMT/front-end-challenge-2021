import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import ImageCircle from '../ImageCircle';
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
    <Box height="3rem" paddingX="2rem" paddingY="1rem" component="header">
      <Grid container alignItems="center" justifyContent="center">
        <ImageCircle src="./logo.svg" alt="Logo da Empresa" />
        <Title className={classes.title} text="Pharma Inc" />
        <ImageCircle src="./perfil.webp" alt="Foto de perfil do usuário" />
      </Grid>
    </Box>
  );
};

export default Header;
