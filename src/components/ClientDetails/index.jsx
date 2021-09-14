import { useContext } from 'react';
import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import DataContext from '../../providers/DataContext';
import ImageCircle from '../ImageCircle';
import {
  isValidAddress,
  isValidBirth,
  isValidEmail,
  isValidGender,
  isValidId,
  isValidImage,
  isValidName,
  isValidNationality,
} from '../../utils/validator';

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
  const { setShowModal, clientDetails } = useContext(DataContext);

  const classes = useStyles();

  const closeModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Box
      className={classes.fullScreen}
      component="section"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={closeModal}
    >
      <Container
        className={classes.article}
        component="article"
        onClick={(e) => e.stopPropagation()}
      >
        <Button onClick={closeModal} className={classes.btnClose} type="button">
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
            src={isValidImage(clientDetails.picture.large)}
            alt="Imagem de perfil do cliente."
            width={150}
          />
          <Typography variant="h5" component="h2" align="center">
            {isValidName(clientDetails.name.first, clientDetails.name.last)}
          </Typography>
          <Typography variant="h6" component="h3">
            {isValidEmail(clientDetails.email)}
          </Typography>
        </Box>

        <Typography>Gênero: {isValidGender(clientDetails.gender)}</Typography>
        <Typography>
          Data de nascimento: {isValidBirth(clientDetails.dob.date)}
        </Typography>
        <Typography>
          Telefone: {isValidBirth(clientDetails.dob.date)}
        </Typography>
        <Typography>
          Nacionalidade: {isValidNationality(clientDetails.nat)}
        </Typography>
        <Typography>
          Endereço:{' '}
          {isValidAddress(
            clientDetails.location.city,
            clientDetails.location.state,
            clientDetails.location.country,
          )}
        </Typography>
        <Typography>ID: {isValidId(clientDetails.id.value)}</Typography>

        <Box
          component="footer"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginTop="2rem"
        >
          <Typography>{`https://randomuser.me/api/?id=${clientDetails.id.value}`}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientDetails;
