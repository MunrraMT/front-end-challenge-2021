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
      <FormLabel component="legend">Pesquisar por gênero</FormLabel>
      <RadioGroup
        row
        aria-label="filtro por gênero"
        name="gender"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="all"
          control={<Radio color="primary" />}
          label="Todos"
        />
        <FormControlLabel
          value="male"
          control={<Radio color="primary" />}
          label="Masculino"
        />
        <FormControlLabel
          value="female"
          control={<Radio color="primary" />}
          label="Feminino"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default GenderFilter;
