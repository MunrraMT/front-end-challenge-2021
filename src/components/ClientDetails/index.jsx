import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import ImageCircle from '../ImageCircle';

const useStyles = makeStyles(() => ({
  fullScreen: {
    position: 'absolute',
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

const ClientDetails = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.fullScreen}
      component="section"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container className={classes.article} component="article">
        <Button className={classes.btnClose} type="button">
          <CloseIcon />
        </Button>

        <Box
          component="header"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          paddingBottom="2rem"
        >
          <ImageCircle
            ClassName={classes.perfilImage}
            src="./perfil.webp"
            alt="Imagem de perfil do cliente."
            width={120}
          />
          <Typography variant="h5" component="h2" align="center">
            André Rodrigues Melgaço dos Santos
          </Typography>
          <Typography variant="h6" component="h3">
            dev-asantos@outlook.com
          </Typography>
        </Box>

        <Typography>Gênero: Masculino</Typography>
        <Typography>Data de nascimento: Masculino</Typography>
        <Typography>Telefone: 65 9 9999 9999</Typography>
        <Typography>Nacionalidade: Brasileiro</Typography>
        <Typography>Endereço: Rua das Violetas, 17</Typography>
        <Typography>ID: xxx.xxx.xxx-xx</Typography>

        <Box
          component="footer"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginTop="2rem"
        >
          <Typography>
            https://www.linkedin.com/in/andr%C3%A9-rodrigues-86369544/
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientDetails;
