import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Box, Button, Container, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';

import ImageCircle from '../ImageCircle';
import {
  isValidAddress,
  isValidBirth,
  isValidEmail,
  isValidGender,
  isValidImage,
  isValidName,
  isValidNationality,
  isValidPhone,
} from '../../utils/validator';
import Loading from '../Loading';

const PatientsDetails = () => {
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const history = useHistory();
  const { seed, page, uuid } = useParams();

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=${page}&results=50&seed=${seed}`)
      .then((response) => response.json())
      .then(({ results }) => {
        setData(results.find((client) => client.login.uuid === uuid));

        setIsLoaded(true);
      });
  }, []);

  const classes = useStyles();

  const closeModal = () => {
    history.push('/');
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
      {isLoaded ? (
        <Container
          className={classes.article}
          component="article"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            onClick={closeModal}
            className={classes.btnClose}
            type="button"
          >
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
              src={isValidImage(data.picture.large)}
              alt="Imagem de perfil do cliente."
              width={150}
            />
            <Typography variant="h5" component="h2" align="center">
              {isValidName(data.name.first, data.name.last)}
            </Typography>
            <Typography variant="h6" component="h3">
              {isValidEmail(data.email)}
            </Typography>
          </Box>

          <Typography>Gênero: {isValidGender(data.gender)}</Typography>
          <Typography>
            Data de nascimento: {isValidBirth(data.dob.date)}
          </Typography>
          <Typography>Telefone: {isValidPhone(data.phone)}</Typography>
          <Typography>Nacionalidade: {isValidNationality(data.nat)}</Typography>
          <Typography>
            Endereço:{' '}
            {isValidAddress(
              data.location.city,
              data.location.state,
              data.location.country,
            )}
          </Typography>
          <Typography>ID: {uuid}</Typography>

          <Box
            component="footer"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop="2rem"
          >
            <Typography>{`http://localhost:3000/patient/${seed}-${page}-${uuid}`}</Typography>
          </Box>
        </Container>
      ) : (
        <Loading />
      )}
    </Box>
  );
};

export default PatientsDetails;
