import { useContext, useEffect, useRef, useState } from 'react';

import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';

import useStyles from './styles';

import DataContext from '../../providers/DataContext';

const SearchInput = () => {
  const { setFilterSearch } = useContext(DataContext);

  const [typeSearch, setTypeSearch] = useState('name');
  const [textSearch, setTextSearch] = useState('');

  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  useEffect(() => {
    setFilterSearch((prev) => ({ ...prev, text: textSearch }));
  }, [textSearch]);

  useEffect(() => {
    setFilterSearch((prev) => ({ ...prev, type: typeSearch }));
  }, [typeSearch]);

  const classes = useStyles();

  const handleChangeTextInput = (e) => {
    setTextSearch(e.target.value);
  };

  const handleChangeTypeInput = (e) => {
    setTypeSearch(e.target.value);
  };

  return (
    <Box
      component="section"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <FormControl component="fieldset" className={classes.type}>
        <FormLabel component="h3">Tipo de pesquisa</FormLabel>
        <RadioGroup
          row
          aria-label="filtro por gênero"
          name="gender"
          value={typeSearch}
          onChange={handleChangeTypeInput}
        >
          <FormControlLabel
            value="name"
            control={<Radio color="primary" />}
            label="Nome"
          />
          <FormControlLabel
            value="nationality"
            control={<Radio color="primary" />}
            label="Nacionalidade"
          />
        </RadioGroup>
      </FormControl>

      <TextField
        fullWidth
        inputRef={input}
        value={textSearch}
        onChange={handleChangeTextInput}
        className={classes.input}
        size="small"
        id="text-search"
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
