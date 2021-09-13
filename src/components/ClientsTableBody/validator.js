import randomNumber from '../../utils/random-number';
import formatData from './format-data';
import formatGender from './format-gender';

export const isValidId = (id) => id || randomNumber(99999, 10000);

export const isValidName = (firstName, lastName) => {
  const first = firstName || 'Sem nome';
  const last = lastName || 'Sem sobrenome';

  return `${first} ${last}`;
};

export const isValidGender = (gender) => {
  if (!gender) return 'Sem gênero';

  return formatGender(gender);
};

export const isValidBirth = (birth) => {
  if (!birth) return 'Sem data';

  return formatData(birth);
};
