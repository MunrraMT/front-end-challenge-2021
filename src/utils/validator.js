import formatData from '../components/ClientsTableBody/format-data';
import formatGender from '../components/ClientsTableBody/format-gender';
import randomNumber from './random-number';

export const isValidImage = (src) => src || './No_image_available.svg';

export const isValidId = (id) => id || randomNumber(99999, 10000);

export const isValidName = (firstName, lastName) => {
  const first = firstName || 'Sem nome cadastrado';
  const last = lastName || 'Sem sobrenome cadastrado';

  return `${first} ${last}`;
};

export const isValidGender = (gender) => {
  if (!gender) return 'Sem gênero cadastrada';

  return formatGender(gender);
};

export const isValidBirth = (birth) => {
  if (!birth) return 'Sem data cadastrada';

  return formatData(birth);
};

export const isValidEmail = (email) => email || 'Sem email cadastrado';

export const isValidNationality = (nat) =>
  nat || 'Sem nacionalidade cadastrada';

export const isValidAddress = (city, state, country) => {
  const address = `${city}, ${state}/${country}`;

  return address || 'Sem endereço cadastrado';
};

export const isValidPhone = (phone) => phone || 'Sem telefone cadastrado';
