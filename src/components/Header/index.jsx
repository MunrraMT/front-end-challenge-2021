import { Box, Grid } from '@material-ui/core';

import useStyles from './styles';

import ImageCircle from '../ImageCircle';
import Title from '../Title';

const Header = () => {
  const classes = useStyles();

  return (
    <Box height="3rem" paddingX="2rem" paddingY="1rem" component="header">
      <Grid
        component="section"
        container
        alignItems="center"
        justifyContent="center"
      >
        <ImageCircle src="/logo.svg" alt="Logo da Empresa" />
        <Title className={classes.title} text="Pharma Inc" />
        <ImageCircle src="/perfil.webp" alt="Foto de perfil do usuário" />
      </Grid>
    </Box>
  );
};

export default Header;
