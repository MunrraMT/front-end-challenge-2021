import { Box } from '@material-ui/core';

import SearchInput from '../SearchInput';
import TextBasic from '../TextBasic';

const MainContent = () => (
  <Box
    component="main"
    minHeight="calc(100vh - 8rem)"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    paddingX="2rem"
    paddingY="2rem"
    maxWidth="60rem"
    marginX="auto"
  >
    <TextBasic>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
      deleniti minima esse repellendus eius ducimus similique! Alias, harum
      consectetur nesciunt commodi deleniti, totam corrupti vitae blanditiis
      molestias nobis, accusantium vero!
    </TextBasic>

    <SearchInput label="Pesquisar" />
  </Box>
);

export default MainContent;
