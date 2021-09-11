import { Box, InputAdornment, TextField } from '@material-ui/core';
import { string } from 'prop-types';

const SearchInput = ({ label }) => (
  <Box component="section" display="flex" justifyContent="center">
    <TextField
      size="small"
      fullWidth
      id="outlined-search"
      label={label}
      type="search"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <img src="./search.svg" alt="teste" width="30" height="30" />
          </InputAdornment>
        ),
      }}
    />
  </Box>
);

SearchInput.propTypes = {
  label: string.isRequired,
};

export default SearchInput;
