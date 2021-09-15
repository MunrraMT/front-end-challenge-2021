import { useContext, useEffect, useRef } from 'react';

import { Box, InputAdornment, TextField } from '@material-ui/core';
import { string } from 'prop-types';

import useStyles from './styles';

import DataContext from '../../providers/DataContext';

const SearchInput = ({ label }) => {
  const { textSearch, setTextSearch } = useContext(DataContext);

  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  const classes = useStyles();

  return (
    <Box component="section" display="flex" justifyContent="center">
      <TextField
        inputRef={input}
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
              <img
                src="/search.svg"
                alt="Icone de busca"
                width="30"
                height="30"
              />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

SearchInput.propTypes = {
  label: string.isRequired,
};

export default SearchInput;
