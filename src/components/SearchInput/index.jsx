import { useContext, useEffect, useRef, useState } from 'react';

import { Box, InputAdornment, TextField } from '@material-ui/core';

import useStyles from './styles';

import DataContext from '../../providers/DataContext';

const SearchInput = () => {
  const { setFilterSearch } = useContext(DataContext);

  const [value, setValue] = useState('');

  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  useEffect(() => {
    setFilterSearch((prev) => ({ ...prev, name: value }));
  }, [value]);

  const classes = useStyles();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box component="section" display="flex" justifyContent="center">
      <TextField
        inputRef={input}
        value={value}
        onChange={handleChange}
        className={`${classes.marginBottom} ${classes.marginTop} ${classes.input}`}
        size="small"
        fullWidth
        id="outlined-search"
        label="Pesquisar"
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

export default SearchInput;
