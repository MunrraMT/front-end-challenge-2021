import { useContext, useEffect, useState } from 'react';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';

import DataContext from '../../providers/DataContext';

const GenderFilter = () => {
  const { setFilterSearch } = useContext(DataContext);

  const [value, setValue] = useState('all');

  useEffect(() => {
    setFilterSearch((prev) => ({ ...prev, gender: value }));
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="h3">Pesquisar por gênero</FormLabel>
      <RadioGroup
        row
        aria-label="filtro por gênero"
        name="gender"
        value={value}
        onChange={handleChange}
        role="radiogroup"
      >
        <FormControlLabel
          aria-label="Todos"
          value="all"
          control={<Radio color="primary" />}
          label="Todos"
        />
        <FormControlLabel
          aria-label="Masculino"
          value="male"
          control={<Radio color="primary" />}
          label="Masculino"
        />
        <FormControlLabel
          aria-label="Feminino"
          value="female"
          control={<Radio color="primary" />}
          label="Feminino"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default GenderFilter;
