import { Box, Container } from '@material-ui/core';
import SearchInput from '../SearchInput';

const MainContent = () => (
  <Box
    component="main"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Container maxWidth="md">
      <SearchInput label="Pesquisar" />
    </Container>
  </Box>
);

export default MainContent;
