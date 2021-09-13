import { useContext } from 'react';
import { Box, InputAdornment, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { number, string } from 'prop-types';

import DataContext from '../../providers/DataContext';

const useStyles = makeStyles(() => ({
  marginBottom: (props) => ({
    marginBottom: `${props.marginBottom}rem`,
  }),
  marginTop: (props) => ({
    marginTop: `${props.marginTop}rem`,
  }),
  input: {
    borderColor: '#209cee',
    backgroundColor: '#ffffff',
  },
}));

const SearchInput = ({ label, marginTop, marginBottom }) => {
  const { textSearch, setTextSearch } = useContext(DataContext);

  const classes = useStyles({ marginTop, marginBottom });

  return (
    <Box component="section" display="flex" justifyContent="center">
      <TextField
        value={textSearch}
        onInput={(e) => setTextSearch(e.target.value)}
        className={`${classes.marginBottom} ${classes.marginTop} ${classes.input}`}
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
};

SearchInput.defaultProps = {
  marginBottom: 0,
  marginTop: 0,
};

SearchInput.propTypes = {
  label: string.isRequired,
  marginBottom: number,
  marginTop: number,
};

export default SearchInput;
