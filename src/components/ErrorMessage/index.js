import { Box, Typography } from '@material-ui/core';

const ErrorMessage = () => (
  <Box
    component="section"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
    <img src="/sad.svg" alt="Icone de triste" width="40" height="40" />

    <Typography variant="h5" component="h2">
      Servidor não encontrado.
    </Typography>
  </Box>
);

export default ErrorMessage;
