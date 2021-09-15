import { Box, Typography } from '@material-ui/core';
import { string } from 'prop-types';

const ErrorMessage = ({ message }) => (
  <Box
    component="section"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    paddingY="1rem"
  >
    <img src="/sad.svg" alt="Icone de triste" width="40" height="40" />

    <Typography variant="h5" component="h2">
      {message}
    </Typography>
  </Box>
);

ErrorMessage.defaultProps = {
  message: 'Servidor não encontrado.',
};

ErrorMessage.propTypes = {
  message: string,
};

export default ErrorMessage;
