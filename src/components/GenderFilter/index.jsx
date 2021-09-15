import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';

const GenderFilter = () => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Pesquisar por gênero</FormLabel>
    <RadioGroup row aria-label="gender" name="gender1">
      <FormControlLabel
        value="Todos"
        control={<Radio color="primary" />}
        label="Todos"
      />
      <FormControlLabel
        value="Masculino"
        control={<Radio color="primary" />}
        label="Masculino"
      />
      <FormControlLabel
        value="Feminino"
        control={<Radio color="primary" />}
        label="Feminino"
      />
    </RadioGroup>
  </FormControl>
);

export default GenderFilter;
