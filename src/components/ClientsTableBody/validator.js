import randomNumber from '../../utils/random-number';
import formatData from './format-data';
import formatGender from './format-gender';

export const idIsValid = (id) => id || randomNumber(99999, 10000);

export const nameIsValid = (firstName, lastName) => {
  const first = firstName || 'Sem nome';
  const last = lastName || 'Sem sobrenome';

  return `${first} ${last}`;
};

export const genderIsValid = (gender) => {
  if (!gender) return 'Sem gênero';

  return formatGender(gender);
};

export const birthIsValid = (birth) => {
  if (!birth) return 'Sem data';

  return formatData(birth);
};
