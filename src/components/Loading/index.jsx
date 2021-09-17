import { Box } from '@material-ui/core';

const Loading = () => (
  <Box
    component="section"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <img
      aria-label="Imagem de Loading"
      width="50"
      height="50"
      src="/Reload-1s-50px.svg"
      alt="Imagem de Loading"
    />
  </Box>
);

export default Loading;
