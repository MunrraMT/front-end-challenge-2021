import { Box } from '@material-ui/core';

import GenderFilter from '../GenderFilter';

const SearchFilter = () => (
  <Box
    component="section"
    width="100%"
    display="flex"
    justifyItems="flex-start"
    marginBottom="1rem"
  >
    <GenderFilter />
  </Box>
);

export default SearchFilter;
